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
  max-width: 1400px;
  margin: 40px auto;
  align-items: flex-start;
  padding: 0 20px;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    margin: 20px auto;
    padding: 0 10px;
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
  grid-template-columns: 120px 2fr 1fr 1fr 1fr 60px;
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

  @media (max-width: 768px) {
    display: none;
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
    }
  }

  .delete-button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 22px;
    color: #ef4444;
  }

  /* 🔽 MOBILE */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 20px;
    text-align: center;

    img {
      width: 120px;
      height: 120px;
      margin: 0 auto;
    }

    p {
      text-align: center;
      padding: 0;
      font-size: 16px;
    }

    .quantity-container {
      justify-content: center;
      gap: 20px;

      button {
        height: 36px;
        width: 36px;
        font-size: 22px;
      }
    }

    .delete-button {
      font-size: 26px;
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
