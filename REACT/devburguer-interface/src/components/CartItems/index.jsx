import React from 'react';
// Importações originais mantidas conforme solicitado para a estrutura do seu projeto
import { useCart } from '../../hooks/CartContext';
import { Table } from '../index';


import {
  ProductImage,
  ButtonGroup,
  StyledButton,
  ProductTotalPrice,
  EmptyCart
} from './styles';


function CartItems() {
  const { cartProducts, decreaseProduct, increaseProduct } = useCart();
// O objeto do produto DEVE ter: id, quantity, price
const products = cartItems.map(item => ({
  id: item.id,
  quantity: item.quantity,
  price: item.price,  // preço unitário (ex: 25.90)
}));
  // Função para formatar valores monetários em Real (BRL)
  const formatPrice = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
        </Table.Tr>
      </Table.Header>

      <Table.Body>
        {cartProducts && cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} alt={`Imagem de ${product.name}`} />
              </Table.Td>
              <Table.Td>
                <p style={{ fontWeight: 'bold', color: '#323232' }}>{product.name}</p>
              </Table.Td>
              <Table.Td>
                <span style={{ color: '#555' }}>
                  {product.currencyValue || formatPrice(product.price)}
                </span>
              </Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <StyledButton onClick={() => decreaseProduct(product)}>-</StyledButton>
                  <span style={{ width: '25px', textAlign: 'center', fontWeight: 'bold' }}>
                    {product.quantity}
                  </span>
                  <StyledButton onClick={() => increaseProduct(product)}>+</StyledButton>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                <ProductTotalPrice>
                  {formatPrice(product.price * product.quantity)}
                </ProductTotalPrice>
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <Table.Tr>
            <Table.Td colSpan="5">
              <EmptyCart>O seu carrinho está vazio.</EmptyCart>
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Body>
    </Table.Root>
  );
}

/**
 * Exportação padrão necessária para o funcionamento do componente
 * Nota: No seu projeto local, o App.js importará este CartItems.
 */
export default CartItems;
