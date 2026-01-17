import { StrictMode } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Deve vir antes do seu GlobalStyle
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import AppProvider from "./hooks";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_12345...");


import GlobalStyle from './styles/globalStyles.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
    <RouterProvider router={router} />
    </Elements>
    <GlobalStyle />
    {/* Coloque o container no final e com zIndex */}
    <ToastContainer autoClose={2000} theme="colored" style={{ zIndex: 9999 }} />
    </AppProvider>
  </StrictMode>
);