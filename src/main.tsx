import AppRouter from '@routes/AppRouter'
import { createRoot } from 'react-dom/client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { store } from '@store/index'
import { Toaster } from 'react-hot-toast';
import '@services/axios.global.js'
import './styles/global.css'

const query = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={query}>
      <AppRouter />
      <Toaster />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </Provider>
)
