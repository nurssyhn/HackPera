import { Module } from '@nestjs/common';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [EmailModule, TelegramModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
