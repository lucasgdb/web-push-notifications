import { Button } from './components/Button';
import { api } from './services/api.service';
import { getSubscripton } from './utils/getSubscription';

function App() {
  function showNotification() {
    window.Notification.requestPermission((permission) => {
      if (permission === 'granted') {
        new window.Notification('Notificação', {
          body: 'Notificação em tempo real',
        });
      }
    });
  }

  async function scheduleNotification() {
    const subscription = await getSubscripton();

    await api.post('/push/send', {
      subscription,
    });
  }

  return (
    <div className="p-4 flex flex-col gap-4 items-center">
      <Button onClick={showNotification}>Mostrar notificação agora</Button>
      <Button onClick={scheduleNotification}>Agendar notificação para daqui há 2 segundos</Button>
    </div>
  );
}

export default App;
