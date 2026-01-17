import styled from 'styled-components';
import BannerHamburger from '../../assets/banner-hamburger.svg';
import Background from '../../assets/background.png';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 100%;
  background: url('${BannerHamburger}') no-repeat;
  background-position: center;
  background-color: #1f1f1f;
  background-size: cover;
  position: relative;

  h1 {
    font-size: 80px;
    font-family: 'Road Rage', cursive;
    line-height: 60px;
    color: #fff;
    position: absolute;
    right: 20%;
    top: 30%;

    span {
      display: block;
      color: #9c9393;
      font-size: 20px;
      font-family: 'Poppins', sans-serif;
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 30px;
  border-bottom: 1px solid #976565;
  padding-bottom: 10px;
  position: relative; /* Para permitir que o botão se posicione em relação a isso se necessário */
`;

export const CategoryButton = styled.button`
  text-decoration: none;
  /* Usei a cor roxa que você definiu no botão voltar para manter o padrão */
  color: ${props => (props.$isActiveCategory ? '#9758a6' : '#9a9a9b')};
  font-size: 24px;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  padding-bottom: 5px;
  line-height: 20px;
  border-bottom: ${props => (props.$isActiveCategory ? '3px solid #9758a6' : 'none')};
  transition: all 0.3s;

  &:hover {
    color: #9758a6;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 60px;
  padding: 20px;
  justify-content: center;
  max-width: 1208px;
  margin: 50px auto;
  width: 100%;
`;

export const BottonHomeVoltar = styled.button`
  background-color: #9758a6;
  color: #fff;
  border: none;
  border-radius: 8px;
  width: 120px;
  height: 40px;
  cursor: pointer;
  font-family: "Road Rage", sans-serif;
  font-size: 18px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  
  /* Ajuste para ficar no canto direito das categorias */
  margin-right: 20px; 

  &:hover {
    background-color: #8c7a91;
    transform: scale(1.05);
  }

  span {
    display: inline-block;
    animation: bounce 1s infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
`;