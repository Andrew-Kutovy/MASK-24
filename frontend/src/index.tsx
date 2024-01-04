import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import MainLayout from "./layouts/MainLayout/MainLayout";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <MainLayout />
  </React.StrictMode>
);
