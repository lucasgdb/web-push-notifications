import './styles/global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { getSubscripton } from './utils/getSubscription';
import { api } from './services/api.service';

async function registerServiceWorker() {
  try {
    const subscription = await getSubscripton();

    await api.post('/push/register', {
      subscription,
    });
  } catch (err) {
    console.error(err);
  }
}

registerServiceWorker();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
