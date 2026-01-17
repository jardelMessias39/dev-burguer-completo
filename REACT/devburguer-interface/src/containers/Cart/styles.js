import styled from 'styled-components';

export const Container = styled.div`
  background: #e5e5e5;
  min-height: 100vh;
  width: 100%;
`;

export const Banner = styled.div`
  background: url('https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200') no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;

  img {
    width: 300px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 1400px; /* Largura expandida para preencher a tela */
  margin: 40px auto;
  align-items: flex-start;
  padding: 0 20px;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CartItems = styled.div`
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  flex: 2; /* Faz a lista ocupar mais espaço que o resumo */
  overflow: hidden;
`;

export const Title = styled.h1`
  color: #9758a6;
  font-size: 35px;
  font-weight: 900;
  text-align: center;
  padding-bottom: 12px;
  margin: 20px auto;
  border-bottom: 2px solid #9758a6;
  width: fit-content;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 120px 2fr 1fr 1fr 1fr 60px; /* Colunas proporcionais */
  padding: 15px 25px;
  background-color: #484848;
  align-items: center;
  
  p {
    font-size: 17px;
    color: #ffffff;
    font-weight: 500;
    text-align: center;
  }

  p:nth-child(2) {
    text-align: left;
    padding-left: 20px;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 120px 2fr 1fr 1fr 1fr 60px;
  width: 100%;
  padding: 15px 25px;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;

  img {
    border-radius: 15px;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  p {
    font-size: 18px;
    color: #323d5d;
    font-weight: bold;
    text-align: center;
  }

  p:nth-child(2) {
    text-align: left;
    padding-left: 20px;
  }

  .quantity-container {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;

    button {
      height: 30px;
      width: 30px;
      background: #9758a6;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
    
    p {
      color: #000;
      margin: 0;
    }
  }

  .delete-button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 22px;
    color: #ef4444;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const EmptyCart = styled.p`
  padding: 50px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #555;
`;