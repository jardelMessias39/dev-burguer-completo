import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../../../hooks/CartContext';

import "../styles.css";

const CheckoutForm = ({ products, address }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ DEBUG: Veja o que está chegando
  console.log('CheckoutForm - Products:', products);
  console.log('CheckoutForm - Address:', address);

  const total = products?.reduce((acc, item) => acc + (item.price * item.quantity), 0) || 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      setMessage(error.message);
      toast.error(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      toast.success('Pagamento realizado com sucesso!');
      
      clearCart();
      
      // ✅ DEBUG: Veja o que está sendo enviado
      console.log('Navegando para confirmação com:', {
        orderId: paymentIntent.id,
        products: products,
        address: address,
        total: total
      });
      
      // ✅ Passa tudo para a confirmação
      navigate('/confirmacao', { 
        state: { 
          status: 'success',
          orderId: paymentIntent.id,
          products: products,
          address: address,
          total: total
        } 
      });
    } else {
      setMessage('Ocorreu um erro inesperado.');
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'tabs',
  };

  return (
    <div className="App">
      <form id="payment-form" onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>💳 Pagamento</h2>
        
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        
        <button className="button" disabled={isLoading || !stripe || !elements}>
          {isLoading ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            'Finalizar Pedido'
          )}
        </button>

        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
};

export default CheckoutForm;