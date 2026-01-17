import styled from 'styled-components';
import backgroundImage from '../../assets/background-login.svg';
import background from '../../assets/background.png';
import { Link as ReactLink} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  flex: 1;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

    background-image: url(${background});
    background-color: #1e1e1e;

    p {
      color: #fff;
      font-size: 18px;
      font-weight: 800;
      margin-top: 20px;
    }
    a {
      text-decoration: underline;
    }
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size:40px;
  color: #b242d7ff;

`;
export const InputContainer = styled.div`

  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border:none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }
  label {
    font-size: 18px;
    font-weight: 600;
    color: #9758a6;
  }
  p {
    font-size: 14px;
    line-height: 80%;
    color: #ff4d4d;
    font-weight: 500;
    height: 10px;
  }
`;

export const Form = styled.form`
  display:flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;


export default {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  InputContainer,

  Form,
  
};
export const Link = styled(ReactLink)`
text-decoration: none;
color: #fff;
`;