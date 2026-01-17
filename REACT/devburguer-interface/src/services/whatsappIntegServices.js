
/**
 * Service to handle WhatsApp integration for ordering.
 * This formats the cart data and redirects the user to WhatsApp.
 */

export const sendOrderToWhatsApp = (cartItems, customerInfo) => {
  // Replace with the owner's phone number (Include Country Code and DDD)
  const businessPhone = "5511999999999"; 

  // 1. Calculate the grand total
  const totalOrderPrice = cartItems.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0);

  // 2. Format the products list for the message
  const itemsText = cartItems
    .map((item) => {
      return `• *${item.quantity}x ${item.name}* - R$ ${(item.price * item.quantity).toFixed(2)}`;
    })
    .join("\n");

  // 3. Build the final message string
  const messageTemplate = `
🍔 *NOVO PEDIDO RECEBIDO* 🍔
---------------------------------------
*DADOS DO CLIENTE*
👤 Nome: ${customerInfo.name}
📞 Telefone: ${customerInfo.phone}

*DETALHES DO PEDIDO*
${itemsText}

💰 *TOTAL: R$ ${totalOrderPrice.toFixed(2)}*
---------------------------------------
📍 *ENDEREÇO DE ENTREGA*
Rua: ${customerInfo.address}, ${customerInfo.addressNumber}
Bairro: ${customerInfo.neighborhood}
${customerInfo.complement ? `Complemento: ${customerInfo.complement}` : ""}

💳 *PAGAMENTO*
Forma: ${customerInfo.paymentMethod}
${customerInfo.changeFor ? `Troco para: R$ ${customerInfo.changeFor}` : ""}
---------------------------------------
_Pedido gerado via Menu Digital_
  `.trim();

  // 4. URL Encode the message for the web link
  const encodedMessage = encodeURIComponent(messageTemplate);
  const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodedMessage}`;

  // 5. Open WhatsApp in a new tab
  window.open(whatsappUrl, "_blank");
};