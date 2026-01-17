import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  
  .carousel-item {
    padding-right: 40px;
  }

  .react-multiple-carousel__arrow--left {
    left: 15px;
    top: 10px;
  }

  .react-multiple-carousel__arrow--right {
    top: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #9758a6;
  font-weight: 800;
  text-align: center;
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    width: 56px;
    height: 4px;
    background-color: #9758a6;
    left: calc(50% - 28px);
  }
`;

export const ContainerItems = styled.div`
  /* Corrigido: 'url' em minúsculo e uso de $imageUrl */
  background: url(${(props) => props.$imageUrl});
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 250px;
`;

export const CategoryButton = styled(Link)`
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 22.5px;
  font-weight: bold;
  margin-top: 50px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #9758a6;
  }
`;