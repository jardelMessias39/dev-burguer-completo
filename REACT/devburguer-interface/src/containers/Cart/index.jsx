import React from "react";
import Logo from "../../assets/logo.svg";
import { useCart } from "../../hooks/CartContext";
import { CartResume } from '../../components';
import {
    Container,
    Banner,
    Title,
    CartItems,
    Header,
    Body,
    EmptyCart,
    Content,
   
} from "./styles";


const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
};

export function Cart() {
    const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart();

    const total = cartProducts ? cartProducts.reduce((acc, curr) => {
        return (curr.price * curr.quantity) + acc;
    }, 0) : 0;

    return (
        <Container>
            <Banner>
                {/* Certifique-size que o caminho do assets/logo.svg está correto ou use uma URL reserva */}
                <img src={Logo} alt="logo-dev-burger" onError={(e) => e.target.src = 'https://placehold.co/200x100?text=Dev+Burger'} />
            </Banner>
            
            <Title>Carrinho</Title>

            <div style={{ padding: '40px', maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
                <Content>
                <CartItems>
                    <Header>
                        <p>Imagem</p>
                        <p>Itens</p>
                        <p>Preço</p>
                        <p style={{ textAlign: 'center' }}>Quantidade</p>
                        <p>Total</p>
                        <p>Ações</p> {/* Coluna extra para o botão de lixeira */}
                    </Header>

                    {cartProducts && cartProducts.length > 0 ? (
                        cartProducts.map(product => (
                            <Body key={product.id}>
                                {/* Aqui garantimos que a imagem use a URL vinda do banco de dados */}
                                <img src={product.url} alt={product.name} />
                                <p>{product.name}</p>
                                <p>{formatCurrency(product.price)}</p>
                                <div className="quantity-container">
                                    <button onClick={() => decreaseProduct(product.id)}>-</button>
                                    <p>{product.quantity}</p>
                                    <button onClick={() => increaseProduct(product.id)}>+</button>
                                </div>
                                <p>{formatCurrency(product.quantity * product.price)}</p>
                                <button className="delete-button" onClick={() => deleteProduct(product.id)}>
                                    🗑️
                                </button>
                            </Body>
                        ))
                    ) : (
                        <EmptyCart>O seu carrinho está vazio no momento.</EmptyCart>
                    )}
                </CartItems>
                           
                <CartResume/>
                </Content>
            </div>
        </Container>
    );
}

export default Cart;