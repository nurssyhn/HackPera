import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { EmailService } from './email.service';
import { Response, response, Send } from 'express';



interface SendMailOptions {
    to: string;
}

const TokenMap = new Map<string,string>;
const amountMap = new Map<string,string>;
@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}



    @Post('send')
    async sendEmail(@Body() selam : SendMailOptions, amount : string): Promise<void> {
        try {
           const token = await this.emailService.sendMail(selam.to,amount);
           TokenMap.set(token,selam.to)
           amountMap.set(selam.to,amount);
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
        const amount = amountMap.get(email);
        if(!amount)
        {
            throw new Error("Amount not found for this email");
        }
        await this.emailService.safePay(email,verifycode,publicKey,amount)
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
        return res.redirect("http://localhost:3000/process")
    }

}
