import Header from '@/components/Header';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import store, { persistor } from '../store/Store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
