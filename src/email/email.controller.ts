import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { EmailService } from './email.service';
import { Response, response, Send } from 'express';



interface SendMailOptions {
    to: string;
}

const TokenMap = new Map<string,string>;

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}



    @Post('send')
    async sendEmail(@Body() selam : SendMailOptions): Promise<void> {
        try {
           const token = await this.emailService.sendMail(selam.to);
           TokenMap.set(token,selam.to)
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            throw new Error('Email gönderilemedi');
        }
    }

    @Post('verify/:token')
    async receiveEmail(@Param('token') token : string,@Body() {verifycode , publicKey} : {verifycode : string , publicKey : string})
    {
        const email = TokenMap.get(token)
        console.log('TokenPost:', token);
        console.log('EmailPost:', email);
        if(!email)
        {
            throw new Error("Wrong Url")
        }
        await this.emailService.safePay(email,verifycode,publicKey)
        return { message: 'Verification successful and payment requested.' };
    }

    @Get('verify/:token')
    async verifyEmail(@Param('token') token: string, @Res() res : Response): Promise<any> {
        const email = TokenMap.get(token);
        console.log('Token:', token);
        console.log('Email:', email);
        if (!email) {
            throw new Error('Invalid token');
        }
        res.type('text/html');
        return res.send(`<form action="http://localhost:3000/email/verify/${token}" method="POST">
  <label>Telegram Doğrulama Kodu:</label><br/>
  <input type="text" name="code" /><br/><br/>
  
  <label>Stellar Public Key:</label><br/>
  <input type="text" name="publicKey" /><br/><br/>
  
  <button type="submit">Doğrula ve Parayı Talep Et</button>
</form>`)
    }

}
