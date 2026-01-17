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

  margin-bottom: 50px;

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

  background: Url(${(props) => props.imageUrl});

  background-position: center;

  background-size: cover;

  border-radius: 20px;

  display: flex;

  align-items: center;

  justify-content: center;

  width: 100%;

  height: 350px;



`;





export const CategoryButton = styled(Link)`

color: #ffffff;

    background-color: rgba(0, 0, 0, 0.6);

    padding: 10px 30px;

    border-radius: 30px;

    font-size: 35px;

    font-weight: bold;

    margin-top: 30px;

    font-weight:500;

    text-decoration: none;





&:hover {

  background-color: #9758a6 ;

}



  `;