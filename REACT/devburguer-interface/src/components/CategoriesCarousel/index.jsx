import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { api } from "../../services/api";
import { Container, Title, ContainerItems, CategoryButton } from "./styles";
import { useNavigate } from "react-router-dom";

export function CategoriesCarousel() {
const [categories, setCategories] = useState([]);
const navigate = useNavigate();

useEffect(() => {
async function loadCategories() {
try {
const { data } = await api.get("/categories");
// Verifica se a API retorna um objeto com array ou o array direto
const loadedData = data.categories || data;
setCategories(loadedData);
} catch (error) {
console.error("Erro ao carregar categorias:", error);
}
}
loadCategories();
}, []);

const responsive = {
desktop: { breakpoint: { max: 3000, min: 1280 }, items: 4 },
tablet: { breakpoint: { max: 1280, min: 690 }, items: 3 },
mobile: { breakpoint: { max: 690, min: 0 }, items: 2 }
};

return (
<Container>
<Title>Categorias</Title>

  {categories && categories.length > 0 ? (
    <Carousel
      responsive={responsive}
      infinite={true}
      partialVisible={false}
      itemClass="carousel-item"
    >
      {categories.map((category) => (
        <ContainerItems key={category.id} $imageUrl={category.url}>
          <CategoryButton
            onClick={() => {
              navigate({
                pathname: '/cardapio',
                search: `?categoria=${category.id}`,
              });
            }}
          >
            {category.name}
          </CategoryButton>
        </ContainerItems>
      ))}
    </Carousel>
  ) : (
    <p style={{ textAlign: 'center', color: '#9758a6' }}>Carregando categorias...</p>
  )}
</Container>


);
}