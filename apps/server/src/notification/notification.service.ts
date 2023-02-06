import { Injectable } from '@nestjs/common';
import * as WebPush from 'web-push';
import * as schedule from 'node-schedule';

import type { INotification } from './interfaces/notification.interface';

@Injectable()
export class NotificationService {
  constructor() {
    const { HOST, WEB_PUSH_PUBLIC_KEY, WEB_PUSH_PRIVATE_KEY } = process.env;

    WebPush.setVapidDetails(HOST, WEB_PUSH_PUBLIC_KEY, WEB_PUSH_PRIVATE_KEY);

    this.publicKey = WEB_PUSH_PUBLIC_KEY;
  }

  publicKey: string;

  getPublicKey() {
    return this.publicKey;
  }

  async register() {
    return {};
  }

  async send(notification: INotification) {
    try {
      const triggerDate = new Date();
      triggerDate.setSeconds(triggerDate.getSeconds() + 2);

      schedule.scheduleJob(triggerDate, () => {
        WebPush.sendNotification(notification.subscription, 'Mensagem da notificação agendada no servidor.');
      });
    } catch (err) {
      console.error(err);
    }
  }
}
