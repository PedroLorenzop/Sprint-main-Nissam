import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Loja from './pages/Loja';
import FAQ from './components/Faq';
import Double from './pages/Double';
import Login from './pages/Login';
import CarCustomization from './pages/CarCustomization';
import Ranking from './pages/Ranking';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // Página inicial
      { path: 'loja', element: <Loja /> }, // Rota da loja
      { path: 'faq', element: <FAQ /> },  // Rota FAQ
      { path: 'login', element: <Login /> }, // Página Login - Correção aqui
      { path: 'double', element: <Double /> },
      { path: 'car', element: <CarCustomization /> }, // Nova rota para a customizar carro
      { path: 'ranking', element: <Ranking /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
