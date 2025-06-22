import { Module } from '@nestjs/common';
import { EscrowService } from './wallet.service';
import { EscrowController } from './wallet.controller';

@Module({
  providers: [EscrowService],
  controllers: [EscrowController],
  exports: [EscrowService],
})
export class WalletModule {}
