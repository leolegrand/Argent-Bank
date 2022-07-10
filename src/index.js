import React from 'react'

import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import { persistStore } from 'redux-persist'

import App from './app/App.js'

import store from './app/store'

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
