import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  
  <Auth0Provider
  domain="dev-0jyszypu0vbtqhse.us.auth0.com"
  clientId="lQFgOpycKiMVIYZeZcJn7WDsc1SgYAp3"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,
)
