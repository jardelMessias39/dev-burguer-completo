import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

import { useCart } from "../../hooks/CartContext";
import { useUser } from "../../hooks/UserContext"; 
import api from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../Button";
import { Container, MainWrapper } from "./styles";

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(500);
  const navigate = useNavigate();
  
  const { cartProducts, clearCart } = useCart();
  const { userData } = useUser(); 

  useEffect(() => {
    if (cartProducts && cartProducts.length > 0) {
      const total = cartProducts.reduce((acc, product) => {
        return acc + (product.price * product.quantity);
      }, 0);
      setFinalPrice(total);
    } else {
      setFinalPrice(0);
    }
  }, [cartProducts]);

  const submitOrder = async () => {
    if (!cartProducts || cartProducts.length === 0) {
      toast.error("Seu carrinho está vazio!");
      return;
    }

    // ✅ CORREÇÃO: Passa o nome do produto também
    const products = cartProducts.map((product) => ({
      id: product.id,
      name: product.name,      // ✅ Nome do produto
      quantity: product.quantity,
      price: product.price,
    }));

    const token = userData?.token || JSON.parse(localStorage.getItem('codeburger:userData'))?.token;

    if (!token) {
      toast.error("É necessário estar logado para finalizar o pedido.");
      return;
    }

    
        // ✅ Vai primeiro para o ENDEREÇO
    navigate('/endereco', { 
      state: { 
        products: products 
      } 
    });
  };

  return (
    <MainWrapper>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatPrice(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button onClick={submitOrder} style={{ width: '100%', marginTop: '20px' }}>
        Finalizar Pedido
      </Button>
    </MainWrapper>
  );
}

export default CartResume;