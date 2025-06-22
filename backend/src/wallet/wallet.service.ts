import { Injectable, InternalServerErrorException } from '@nestjs/common';
import e from 'express';
import { Keypair,  TransactionBuilder, Networks, Operation, Asset, Horizon } from 'stellar-sdk';
import axios from 'axios';

@Injectable()
export class EscrowService {
  private readonly keypair = Keypair.random();
  public readonly publicKey = this.keypair.publicKey();
  private readonly secret = this.keypair.secret();

  private readonly server = new Horizon.Server('https://horizon-testnet.stellar.org');
  private readonly networkPassphrase = Networks.TESTNET;

  constructor() {
    console.log('Escrow Public Key:', this.publicKey);
    console.log('Escrow Secret:', this.secret); // DİKKAT: Gerçek projede asla production ortamında secreti loglama!
    this.autoFund(); // Otomatik funding çağrısı
  }



    private async autoFund() {
    try {
      const response = await axios.get(`https://friendbot.stellar.org?addr=${this.publicKey}`);
      console.log('Account funded successfully:', response.data);
    } catch (error) {
      console.error('Auto-funding failed:', error.response?.data || error.message);
    }
  }


  async fundAccount(destination: string, startingBalance: string = '2') {
  try {
    const fee = await this.server.fetchBaseFee();
    const sourceAccount = await this.server.loadAccount(this.publicKey);

    const transaction = new TransactionBuilder(sourceAccount, {
      fee: fee.toString(),
      networkPassphrase: this.networkPassphrase,
    })
      .addOperation(Operation.createAccount({
        destination,
        startingBalance, // Minimum 1 XLM olması önerilir, burada 2 XLM örnek
      }))
      .setTimeout(30)
      .build();

    transaction.sign(this.keypair);
    const result = await this.server.submitTransaction(transaction);
    return result;
  } catch (error) {
    console.error('Funding failed:', error);
    throw new InternalServerErrorException('Funding failed');
  }
}








  async getAccountBalance(publicKey: string) {
    try {
      const account = await this.server.loadAccount(publicKey);
      return account.balances;
    } catch (error) {
        console.log(publicKey)
        console.error('Failed to fetch account balance:', error);
      throw new InternalServerErrorException('Failed to fetch account balance',error);
    }
  }

  async createTransaction(destination: string, amount: string) {
    try {
      const fee = await this.server.fetchBaseFee();
      const account = await this.server.loadAccount(this.publicKey);

      const transaction = new TransactionBuilder(account, {
        fee: fee.toString(),
        networkPassphrase: this.networkPassphrase,
      })
        .addOperation(Operation.payment({ destination, asset: Asset.native(), amount }))
        .setTimeout(30)
        .build();

      transaction.sign(this.keypair);
      const result = await this.server.submitTransaction(transaction);
      return result;
    } catch (error) {
      console.error('Transaction failed:', error.response?.data || error.message);
      throw new InternalServerErrorException('Transaction failed');
    }
  }
}
