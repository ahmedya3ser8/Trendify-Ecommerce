import AppRouter from '@routes/AppRouter'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { Provider } from 'react-redux'
import { store } from '@store/index'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppRouter />
    <Toaster />
  </Provider>
)
