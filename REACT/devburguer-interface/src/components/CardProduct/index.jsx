import React from "react";
import PropTypes from "prop-types";
import { useCart } from "../../hooks/CartContext";
import { CartButton } from "../CartButton";
import { Container, CardImage } from "./styles";

// 1. Mudamos para "export const" para satisfazer o import { CardProduct }
export const CardProduct = ({ product }) => {
  const { putProductInCart } = useCart();

  const formatPrice = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue || formatPrice(product.price)}</strong>
      </div>

      <CartButton onClick={() => putProductInCart(product)}>
        Adicionar ao carrinho
      </CartButton>
    </Container>
  );
};

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.number,
    currencyValue: PropTypes.string,
  }).isRequired,
};

// 2. Mantemos o default por segurança
export default CardProduct;