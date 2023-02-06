import { api } from '../services/api.service';

export const getSubscripton = async () => {
  const sw = await navigator.serviceWorker.register('service-worker.js');

  const subscription = await sw.pushManager.getSubscription();
  if (subscription) {
    return subscription;
  }

  const { data } = await api.get<{ publicKey: string }>('/push/public_key');

  return sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: data.publicKey,
  });
};
