import Header from '@/components/Header';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import store from '../store/Store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}
