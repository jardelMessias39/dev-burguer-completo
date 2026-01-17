import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 10px;
`;
// Componente FILHO: O card de resumo propriamente dito
export const Container = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: 100%;
  display: flex;
  height: 380px;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  overflow: hidden;

  * {
    color: #484848;
    font-weight: 700;
  }

  .container-top {
    display: grid;
    grid-gap: 15px 0px;
    grid-template-areas:
      "title title"
      "items items-price"
      "delivery-tax delivery-tax-price";
  }

  .title {
    grid-area: title;
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
    background-color: #2c2c2c;
    padding: 15px 20px;
    text-align: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
  }

  .items {
    grid-area: items;
    font-weight: 300;
    font-size: 20px;
    color: #222222;
    text-align: left;
    padding-left: 20px;
    margin-top: 15px;
  }

  .items-price {
    grid-area: items-price;
    font-weight: 300;
    font-size: 20px;
    color: #222222;
    text-align: right;
    margin-right: 20px;
    margin-top: 15px;
  }

  .delivery-tax {
    grid-area: delivery-tax;
    font-weight: 300;
    font-size: 20px;
    color: #222222;
    padding-left: 20px;
  }

  .delivery-tax-price {
    grid-area: delivery-tax-price;
    font-weight: 300;
    font-size: 20px;
    color: #222222;
    text-align: right;
    margin-right: 20px;
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
    font-size: 24px;
    color: #222222;
    margin-top: 50px;
    margin-right: 20px;
    padding-left: 20px;
    margin-bottom: 30px;
  }
`;