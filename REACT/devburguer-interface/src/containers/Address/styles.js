import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f5f5;
  padding: 20px;
`;

export const Content = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #9758a6;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  background: #9758a6;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s;

  &:hover {
    background: #7a4587;
  }
`;

/* ✅ Novos estilos para forma de pagamento */
export const PaymentSection = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
`;

export const PaymentTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border: 2px solid ${props => props.selected ? '#9758a6' : '#ddd'};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${props => props.selected ? '#f8f0fa' : '#fff'};

  &:hover {
    border-color: #9758a6;
  }
`;

export const PaymentIcon = styled.span`
  font-size: 28px;
`;

export const PaymentLabel = styled.p`
  font-weight: bold;
  color: #333;
  margin: 0;
  font-size: 15px;
`;

export const PaymentDescription = styled.p`
  color: #666;
  margin: 0;
  font-size: 13px;
`;