interface IKeys {
  p256dh: string;
  auth: string;
}

export interface ISubscription {
  endpoint: string;
  keys: IKeys;
}

export interface INotification {
  subscription: ISubscription;
}
