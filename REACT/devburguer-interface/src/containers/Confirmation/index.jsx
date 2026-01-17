import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import {
  Container,
  Content,
  SuccessIcon,
  Title,
  OrderNumber,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryDivider,
  SummaryTotal,
  AddressBox,
  AddressTitle,
  AddressText,
  DeliveryTime,
  PaymentInfo,  // ✅ Adicionado
  WhatsAppButton,
  HomeButton
} from './styles';

export function Confirmation() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const orderId = state?.orderId || 'N/A';
  const products = state?.products || [];
  const address = state?.address || {};
  const total = state?.total || 0;
  const paymentMethod = state?.paymentMethod || '';  // ✅ Adicionado

  const deliveryTime = '30-45';

  const formatPrice = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  // ✅ Texto da forma de pagamento
  const getPaymentText = () => {
    switch (paymentMethod) {
      case 'card_online':
        return { icon: '💳', text: 'Cartão Online', status: '✅ Pago' };
      case 'presencial':
        return { icon: '📱', text: 'Pix/Cartão na Entrega', status: '⏳ Pagar na entrega' };
      case 'dinheiro':
        return { icon: '💵', text: 'Dinheiro', status: '⏳ Pagar na entrega' };
      default:
        return { icon: '💰', text: 'Não informado', status: '' };
    }
  };

  const paymentInfo = getPaymentText();

  // ✅ Mensagem para a HAMBURGUERIA
  const generateWhatsAppMessage = () => {
    let message = `🍔 *NOVO PEDIDO*\n\n`;
    message += `📋 *Pedido:* #${String(orderId).slice(-8).toUpperCase()}\n\n`;
    
    message += `*📍 ENDEREÇO DE ENTREGA:*\n`;
    message += `${address.street}, ${address.number}`;
    if (address.complement) message += ` - ${address.complement}`;
    message += `\n${address.neighborhood}`;
    if (address.reference) message += `\nRef: ${address.reference}`;
    
    message += `\n\n*🍔 ITENS DO PEDIDO:*\n`;
    
    products.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Qtd: ${item.quantity} - ${formatPrice(item.price * item.quantity)}\n`;
    });
    
    message += `\n💰 *Total:* ${formatPrice(total)}\n`;
    
    // ✅ Adiciona forma de pagamento
    message += `\n*💳 PAGAMENTO:*\n`;
    message += `${paymentInfo.icon} ${paymentInfo.text} - ${paymentInfo.status}`;
    
    return encodeURIComponent(message);
  };

  // ⚠️ ALTERE PARA O NÚMERO DA HAMBURGUERIA
  const whatsappNumber = '5579998061093';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${generateWhatsAppMessage()}`;

  return (
    <Container>
      <Content>
        <SuccessIcon>✅</SuccessIcon>
        
        <Title>
          {paymentMethod === 'card_online' ? 'Pagamento Confirmado!' : 'Pedido Confirmado!'}
        </Title>
        
        <OrderNumber>Pedido #{String(orderId).slice(-8).toUpperCase()}</OrderNumber>

        {/* Resumo do pedido */}
        <Summary>
          <SummaryTitle>📋 Resumo do Pedido:</SummaryTitle>
          {products.map((item, index) => (
            <SummaryItem key={index}>
              <span>{item.name} x{item.quantity}</span>
              <span>{formatPrice(item.price * item.quantity)}</span>
            </SummaryItem>
          ))}
          <SummaryDivider />
          <SummaryTotal>
            <span>Total:</span>
            <span>{formatPrice(total)}</span>
          </SummaryTotal>
        </Summary>

        {/* ✅ Forma de pagamento */}
        <PaymentInfo status={paymentMethod === 'card_online' ? 'paid' : 'pending'}>
          <span>{paymentInfo.icon} {paymentInfo.text}</span>
          <strong>{paymentInfo.status}</strong>
        </PaymentInfo>

        {/* Endereço de entrega */}
        {address.street && (
          <AddressBox>
            <AddressTitle>📍 Entregar em:</AddressTitle>
            <AddressText>
              {address.street}, {address.number}
              {address.complement && ` - ${address.complement}`}
            </AddressText>
            <AddressText>{address.neighborhood}</AddressText>
            {address.reference && (
              <AddressText>Ref: {address.reference}</AddressText>
            )}
          </AddressBox>
        )}

        {/* Tempo de entrega */}
        <DeliveryTime>
          🕐 Tempo estimado: <strong>{deliveryTime} minutos</strong>
        </DeliveryTime>

        {/* Botão WhatsApp */}
        <WhatsAppButton
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          📱 Enviar Pedido via WhatsApp
        </WhatsAppButton>

        <HomeButton onClick={() => navigate('/')}>
          Voltar para Home
        </HomeButton>
      </Content>
    </Container>
  );
}

export default Confirmation;