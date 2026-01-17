import { createBrowserRouter } from "react-router-dom";
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Cart, Home, Menu, Register, Login } from '../containers';
import Checkout from "../containers/Checkout"; 
import { CompletePayment } from '../containers/CompletePayment';  
import { Confirmation } from "../containers/Confirmation";
import { Address } from '../containers/Address';




export const router = createBrowserRouter([
  {
    path: '/',
    element: 
    (
    <>
    <Header/>
    <Home />
    <Footer/>
    </>   // agora "/" abre a Home
    
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/home',
    element: <Home />,
  },
   {
    path: '/cardapio',
      element: 
    (
    <>
    <Header/>
    <Menu />
    <Footer/>
   
    </> 
    )
  },
  {
    path: '/carrinho',
    element: <Cart />
    
   
  },
   {
    path: '/checkout',
    element: <Checkout />
    
   
  },
   {
    path: '/complete-payment',
    element: <CompletePayment />
    
   
  },
   {
    path: '/confirmacao',
    element: <Confirmation />
    
   
  },
   {
    path: '/endereco',
    element: <Address />
    
   
  },
  

]);
