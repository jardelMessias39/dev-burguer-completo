import styled from 'styled-components';


export const ProductImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: #997f7fff;
        border-radius: 8px;
        border: none;
        background-color: #9758a7;
        transition: all 0.4s ease-in-out;
        border: none;
    

        &:hover {
            background-color: #6f356c;
        }
    }
`;

export const ProductTotalPrice = styled.p`
    font-weight: bold;
    font-size: 0px;
`;

export const EmptyCart = styled.p`
    padding: 40px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: #323d5d;
    
`;
export const StyledButton = styled.button`
  background-color: #9758a6;
  border: none;
  width:100%;
  height: 52px;
  border-radius: 4px;
  color: #fff;
  font-size: 30px;
  padding: 8px 16px;
  cursor: pointer;
  font-family: "Road Rage", sans-serif;
  transition: background-color 0.3s ease;
  color: #ffff;`