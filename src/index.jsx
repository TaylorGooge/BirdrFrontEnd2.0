import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App'
import config from './auth_config.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <Auth0Provider
    domain= {config.domain}
    clientId={config.clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  		<App />
     </Auth0Provider>
	</React.StrictMode>
)