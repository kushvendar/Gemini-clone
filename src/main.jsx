import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ContextProvider from './components/context/Context.jsx'

createRoot(document.getElementById('root')).render(
<ContextProvider>
  <App/>
</ContextProvider>
)
