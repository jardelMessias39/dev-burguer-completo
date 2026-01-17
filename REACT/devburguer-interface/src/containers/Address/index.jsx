import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../../hooks/CartContext';  // ✅ Adicione este import

import {
  Container,
  Content,
  Title,
  Form,
  InputGroup,
  InputWrapper,
  Label,
  Input,
  Button,
  PaymentSection,
  PaymentTitle,
  PaymentOptions,
  PaymentOption,
  PaymentIcon,
  PaymentLabel,
  PaymentDescription
} from './styles';

export function Address() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { clearCart } = useCart();  // ✅ Adicione esta linha
  
  const [address, setAddress] = useState({
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    reference: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('');

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!address.street || !address.number || !address.neighborhood) {
      toast.error('Preencha os campos obrigatórios do endereço!');
      return;
    }

    if (!paymentMethod) {
      toast.error('Selecione uma forma de pagamento!');
      return;
    }

    // ✅ Se for cartão online, vai para o Stripe
    if (paymentMethod === 'card_online') {
      navigate('/checkout', {
        state: {
          products: state?.products,
          address: address,
          paymentMethod: paymentMethod
        }
      });
    } else {
      // ✅ Limpa o carrinho antes de ir para confirmação
      clearCart();
      
      // ✅ Se for dinheiro ou presencial, vai direto para confirmação
      navigate('/confirmacao', {
        state: {
          products: state?.products,
          address: address,
          paymentMethod: paymentMethod,
          total: state?.products?.reduce((acc, item) => acc + (item.price * item.quantity), 0) || 0,
          orderId: `ORDER-${Date.now()}`
        }
      });
    }
  };

  if (!state?.products) {
    navigate('/');
    return null;
  }

  return (
    <Container>
      <Content>
        <Title>📍 Endereço de Entrega</Title>

        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label>Rua *</Label>
            <Input
              type="text"
              name="street"
              value={address.street}
              onChange={handleChange}
              placeholder="Ex: Rua das Flores"
            />
          </InputWrapper>

          <InputGroup>
            <InputWrapper>
              <Label>Número *</Label>
              <Input
                type="text"
                name="number"
                value={address.number}
                onChange={handleChange}
                placeholder="123"
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Complemento</Label>
              <Input
                type="text"
                name="complement"
                value={address.complement}
                onChange={handleChange}
                placeholder="Apto 101"
              />
            </InputWrapper>
          </InputGroup>

          <InputWrapper>
            <Label>Bairro *</Label>
            <Input
              type="text"
              name="neighborhood"
              value={address.neighborhood}
              onChange={handleChange}
              placeholder="Ex: Centro"
            />
          </InputWrapper>

          <InputWrapper>
            <Label>Ponto de Referência</Label>
            <Input
              type="text"
              name="reference"
              value={address.reference}
              onChange={handleChange}
              placeholder="Ex: Próximo ao mercado"
            />
          </InputWrapper>

          <PaymentSection>
            <PaymentTitle>💰 Forma de Pagamento *</PaymentTitle>
            
            <PaymentOptions>
              <PaymentOption 
                selected={paymentMethod === 'card_online'}
                onClick={() => setPaymentMethod('card_online')}
              >
                <PaymentIcon>💳</PaymentIcon>
                <div>
                  <PaymentLabel>Cartão Online</PaymentLabel>
                  <PaymentDescription>Pague agora pelo site</PaymentDescription>
                </div>
              </PaymentOption>

              <PaymentOption 
                selected={paymentMethod === 'presencial'}
                onClick={() => setPaymentMethod('presencial')}
              >
                <PaymentIcon>📱</PaymentIcon>
                <div>
                  <PaymentLabel>Pix ou Cartão na Entrega</PaymentLabel>
                  <PaymentDescription>Pague na maquininha do entregador</PaymentDescription>
                </div>
              </PaymentOption>

              <PaymentOption 
                selected={paymentMethod === 'dinheiro'}
                onClick={() => setPaymentMethod('dinheiro')}
              >
                <PaymentIcon>💵</PaymentIcon>
                <div>
                  <PaymentLabel>Dinheiro</PaymentLabel>
                  <PaymentDescription>Pague em dinheiro na entrega</PaymentDescription>
                </div>
              </PaymentOption>
            </PaymentOptions>
          </PaymentSection>

          <Button type="submit">
            {paymentMethod === 'card_online' ? 'Continuar para Pagamento' : 'Finalizar Pedido'}
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

export default Address;