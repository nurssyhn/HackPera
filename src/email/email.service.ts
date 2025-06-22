import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv'
import * as nodemailer from "nodemailer"
import { TelegramService } from 'src/telegram/telegram.service';
import { EscrowService } from 'src/wallet/wallet.service';


   interface SendMailOptions  {
    to: string;
   
}

    const CodeMap = new Map<string, string>();

@Injectable()
export class EmailService {

    constructor(private readonly telegram : TelegramService,private readonly wallet : EscrowService)  {}


   private transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    
  });

   async sendMail(to : string): Promise<string> {
    try {
        const token = await this.randomVerificationCodeGen();
        
        console.log('Sending email to:', to);
      
        const  info = await this.transporter.sendMail({
        from: `"SafePay" <${process.env.SMTP_USER}>`,
        to : to,
        subject: 'Verification Email',
        text : `http://localhost:3000/email/verify/${token}`

        
        
        
        
        ,
      });
      const verificationCode = await this.randomVerificationCodeGen();
      CodeMap.set(to, verificationCode);
      this.telegram.sendVerificationCode(5642109574,verificationCode ); // Replace randomChatId with actual chat ID
      console.log('Mail sent: %s', info.messageId);
      console.log('Generated token:', token);
      return token;

    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Email gönderilemedi');
    }


}
    async sendEmailWithList(to : string[]) : Promise<void> {
        try {
            to.forEach(async (email) => {
                await this.sendMail(email);
            }
        );
        } catch (error) {
            console.error('Error sending email to list:', error);
            throw new Error('Email gönderilemedi');
        }
    }


    async randomVerificationCodeGen() : Promise<string> {
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        console.log('Generated verification code:', code);
        return code;
    }
    
    

  
    async safePay(email : string,verifycode : string,publicKey : string) : Promise<any> {
      const verifycodeOld = CodeMap.get(email)
      if(verifycodeOld !== verifycode)
      {
        return new Error("Wrong Verification Code")
      }
      else{
        console.info("Verification Successful")
         this.wallet.createTransaction(publicKey, "1"); // Assuming you want to send 1 XLM
        return {"message" : "Verification Successful", "publicKey" : publicKey, "email" : email}
        
      }
    }


}


 
                            