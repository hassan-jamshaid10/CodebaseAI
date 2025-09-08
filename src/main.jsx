import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.jsx';
import { store } from './Store/Store.js';  // ✅ import the configured store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>   {/* ✅ provide the store to the whole app */}
      <App />
    </Provider>
  </StrictMode>
);
