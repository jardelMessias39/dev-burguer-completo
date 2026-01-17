import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f4f4f4;
  cursor: grab;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-top: 50px; /* Importante para dar espaço à imagem que sobe */

  div {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }

  p {
    font-size: 18px;
    color: #61a192;
    font-weight: 800;
    line-height: 20px;
    margin-top: 40px;
  }

  strong {
    font-size: 32px;
    color: #363636;
    font-weight: 800;
    line-height: 20px;
  }
`;

export const CardImage = styled.img`
  height: 100px;
  position: absolute;
  top: -50px;
  object-fit: contain;
`;