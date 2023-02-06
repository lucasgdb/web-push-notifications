import { Body, Controller, Get, Post } from '@nestjs/common';

import { INotification } from './interfaces/notification.interface';
import { NotificationService } from './notification.service';

@Controller('/push')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Get('/public_key')
  getPublicKey() {
    return {
      publicKey: this.notificationService.getPublicKey(),
    };
  }

  @Post('/register')
  registerNotification() {
    return this.notificationService.register();
  }

  @Post('/send')
  sendNotification(@Body() notification: INotification) {
    return this.notificationService.send(notification);
  }
}
