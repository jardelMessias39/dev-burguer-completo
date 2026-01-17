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
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
`;

export const SuccessIcon = styled.div`
  font-size: 60px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: #28a745;
  margin-bottom: 10px;
  font-size: 24px;
`;

export const OrderNumber = styled.p`
  color: #666;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const Summary = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  text-align: left;
`;

export const SummaryTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 16px;
  color: #333;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  color: #555;
`;

export const SummaryDivider = styled.hr`
  margin: 15px 0;
  border: none;
  border-top: 1px solid #ddd;
`;

export const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 16px;
  color: #333;
`;

export const AddressBox = styled.div`
  background: #fff3cd;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  text-align: left;
  border: 1px solid #ffc107;
`;

export const AddressTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 14px;
  color: #856404;
`;

export const AddressText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #856404;
  line-height: 1.5;
`;

export const DeliveryTime = styled.p`
  background: #e8f5e9;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  color: #2e7d32;
  font-size: 16px;
  border: 1px solid #4caf50;
`;

// ✅ Novo estilo para forma de pagamento
export const PaymentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  font-size: 15px;
  
  background: ${props => props.status === 'paid' ? '#d4edda' : '#fff3cd'};
  border: 1px solid ${props => props.status === 'paid' ? '#28a745' : '#ffc107'};
  color: ${props => props.status === 'paid' ? '#155724' : '#856404'};

  strong {
    font-weight: bold;
  }
`;

export const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #25D366;
  color: #fff;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  margin-bottom: 10px;
  transition: background 0.2s;

  &:hover {
    background: #128C7E;
  }
`;

export const HomeButton = styled.button`
  width: 100%;
  background: #9758a6;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #7a4587;
  }
`;