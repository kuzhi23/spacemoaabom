import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactData } from 'src/utils/mailHandler';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('sendmail')
  async sendmail(@Body() contactData: ContactData) {
    return await this.contactService.sendmail(contactData);
  }
}
