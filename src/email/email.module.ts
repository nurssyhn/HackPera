import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { ConfigModule } from '@nestjs/config';
import { TelegramModule } from 'src/telegram/telegram.module';
import { WalletModule } from 'src/wallet/wallet.module';

@Module({
  imports: [TelegramModule,WalletModule],
  controllers: [EmailController],
  providers: [EmailService]
})
export class EmailModule {}
