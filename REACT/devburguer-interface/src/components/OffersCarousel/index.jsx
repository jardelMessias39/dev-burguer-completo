import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { api } from "../../services/api";
import { Container, Title } from "./styles";
import { CardProduct } from "../CardProduct";

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  // Função para formatar o preço caso o utilitário externo falhe
  const formatPrice = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await api.get("/products");

        // Verificação robusta da estrutura de dados da API
        const allProducts = Array.isArray(data) ? data : (data.products || []);

        const onlyOffers = allProducts
          .filter((product) => product.offer === true || product.offer === 1)
          .map((product) => ({
            ...product,
            currencyValue: formatPrice(product.price),
          }));

        console.log("Ofertas filtradas:", onlyOffers); // Verifique no console se este array tem itens
        setOffers(onlyOffers);
      } catch (error) {
        console.error("Erro ao carregar ofertas de produtos:", error);
      }
    }
    loadProducts();
  }, []);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1280 }, items: 4 },
    tablet: { breakpoint: { max: 1280, min: 690 }, items: 3 },
    mobile: { breakpoint: { max: 690, min: 0 }, items: 2 },
  };

  return (
    <Container>
      <Title>Ofertas do dia</Title>

      {offers && offers.length > 0 ? (
        <Carousel
          responsive={responsive}
          infinite={true}
          itemClass="carousel-item"
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {offers.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </Carousel>
      ) : (
        <p style={{ textAlign: 'center', padding: '20px' }}>
          {offers.length === 0 ? "Nenhuma oferta encontrada." : "Carregando ofertas..."}
        </p>
      )}
    </Container>
  );
}