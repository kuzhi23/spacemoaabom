import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ContactData, sendMailConfig } from 'src/utils/mailHandler';

@Injectable()
export class ContactService {
  constructor(private readonly mailerService: MailerService) {}

  async sendmail(contactData: ContactData) {
    await this.mailerService.sendMail(sendMailConfig(contactData));
    return { code: 1, message: 'send mail success' };
  }
}
