import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store'

function Index(){
  return (
  	<React.StrictMode>
  	  <Provider store={store}>
  	    <PersistGate loading={null} persistor={persistStore(store)}>
  	      <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(<Index />,document.getElementById('root'));

