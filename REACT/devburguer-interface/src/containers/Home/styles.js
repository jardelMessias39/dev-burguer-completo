// styles.js
import styled from 'styled-components';
import Background from '../../assets/background.png';
import bannerHome from '../../assets/bannerHome.svg';

export const Banner = styled.div`
  background: url(${bannerHome});
  background-position: center;
  background-size: cover;
  height: 480px;
  position: relative;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: #f4f4f4;
    position: absolute;
    right: 20%;
    top: 10%;
  }
`;

export const Container = styled.section`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
`;

// 👉 Novo export
export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
