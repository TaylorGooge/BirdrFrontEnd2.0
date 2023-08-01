import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <Auth0Provider
    domain= 'birdr.us.auth0.com'
    clientId='UsHRB8pI6jlvkOF93awA4Hmk8Ln57KTr'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  		<App />
     </Auth0Provider>
	</React.StrictMode>
)