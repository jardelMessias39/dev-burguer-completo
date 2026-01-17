import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import CheckoutForm from "../../components/Stripe/CheckoutForm";
import api from "../../services/api";

const stripePromise = loadStripe('pk_test_51SnBlrJe9yn9dnSXqxnxYlLUEVNrlX8c9Z0isUjAkymFrmaYnRIdWrExBRTTtZZLHuGv7cPPGltJkk7dLQGf9YM300kdcr4wJy');

export function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // ✅ DEBUG: Veja o que está chegando
  console.log('Checkout - State recebido:', state);
  console.log('Checkout - Products:', state?.products);
  console.log('Checkout - Address:', state?.address);

  useEffect(() => {
    async function createPaymentIntent() {
      try {
        if (!state?.products || state.products.length === 0) {
          setError('Nenhum produto no carrinho');
          setLoading(false);
          toast.error('Carrinho vazio!');
          navigate('/');
          return;
        }

        const { data } = await api.post('/create_payment_intent', {
          products: state.products,
        });

        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setError('Erro ao processar pagamento');
        }
      } catch (err) {
        console.error('Erro:', err);
        setError(err.response?.data?.error || 'Erro ao conectar com o servidor');
      } finally {
        setLoading(false);
      }
    }

    createPaymentIntent();
  }, [state, navigate]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <h2>⏳ Carregando pagamento...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <h2 style={{ color: 'red' }}>❌ {error}</h2>
        <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px 20px' }}>
          Voltar para Home
        </button>
      </div>
    );
  }

  const options = {
    clientSecret,
    appearance: { theme: 'stripe' },
  };

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          {/* ✅ Passa produtos E endereço */}
          <CheckoutForm 
            products={state.products} 
            address={state.address}  
          />
        </Elements>
      )}
    </div>
  );
}

export default Checkout;