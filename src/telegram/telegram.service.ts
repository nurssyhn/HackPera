import { Injectable, OnModuleInit } from '@nestjs/common';
import { Telegraf } from 'telegraf';

@Injectable()
export class TelegramService implements OnModuleInit {
	private bot: Telegraf;

	 verificationMap = new Map<number,string>()
	constructor() {
		this.bot = new Telegraf(process.env.TELEGRAM_ID!);
	}

	onModuleInit() {
		this.bot.start((ctx) => {
			const chatId = ctx.chat.id;
			console.log(`Yeni kullanıcı: ${ctx.from.username} (${chatId})`);
			return ctx.reply('👋 Merhaba! Benimle iletişime geçmek için buradayım.');
		});
		this.bot.launch();
		console.log('Telegram bot çalışıyor.');
	}
	


	async sendVerificationCode(chatId: number, code: string): Promise<void> {
		this.verificationMap.set(chatId, code);
		await this.bot.telegram.sendMessage(chatId, `📌 Doğrulama Kodunuz: ${code}`);
	}
}
