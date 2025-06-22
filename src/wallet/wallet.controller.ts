import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { EscrowService } from './wallet.service';
import axios from 'axios';

@Controller('escrow')
export class EscrowController {
  constructor(private readonly escrowService: EscrowService) {}

  @Get('balance/:publicKey')
  async getBalance(@Param('publicKey') publicKey: string) {
    return this.escrowService.getAccountBalance(publicKey);
  }

  @Post('fund')
async fundAccount(@Body() body: { destination: string; startingBalance?: string }) {
  return this.escrowService.fundAccount(body.destination, body.startingBalance);
}



  @Post('send')
  async createTransaction(
    @Body() body: { destination: string; amount: string },
  ) {
    const { destination, amount } = body;
    return this.escrowService.createTransaction(destination, amount);
  }

  @Get('public-key')
  getPublicKey() {
    return { publicKey: this.escrowService.publicKey };
  }
}
