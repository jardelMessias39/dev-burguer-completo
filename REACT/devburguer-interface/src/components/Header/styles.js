import styled from "styled-components";
import { Link } from "react-router-dom";

// 🎨 Paleta de cores centralizada
const colors = {
  primary: "#9758a6",
  white: "#ffffff",
  accent: "#f4f555",
  hover: "#f4f4f4",
  logout: "#fff111",
};

// 🔧 Utilitário para flexbox
const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.header`
  background-color: ${colors.primary};
  height: 80px;
  ${flexCenter};
  justify-content: space-between;
  padding: 0 50px;
`;

export const Content = styled.div`
  ${flexCenter};
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  ${flexCenter};
  height: 72px;

  div {
    ${flexCenter};
    gap: 20px;
  }
  hr {
    width: 1px;
    height: 24px;
   border: 1px solid #625e5e;
  }
`;

export const HeaderLink = styled(Link)`
  color: ${props => props.$isActive ? colors.accent : colors.white};
  border-bottom: ${props => props.$isActive ? '2px solid #f4f555' : 'none'};
  text-decoration: none;
  margin-right: 20px;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;

  &:hover {
    color: ${colors.accent};
    border-bottom: 2px solid ${colors.accent};
  }
`;

export const Options = styled.div`
  ${flexCenter};
  gap: 48px;
`;

export const Profile = styled.div`
  ${flexCenter};
  gap: 12px;
  font-size: 14px;

  p {
    color: ${colors.white};
    font-weight: 300;
    line-height: 1.2;

    span {
      font-weight: 600;
      color: ${colors.accent};
    }
  }
`;

export const LinkContainer = styled.div`
  ${flexCenter};
  gap: 10px;
`;

export const Logout = styled.button`
  color: ${colors.logout};
  font-size: 18px;
  font-weight: 600;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${colors.hover};
  }
`;

// ✅ Container do ícone do carrinho
export const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
  ${flexCenter};
`;

// ✅ Badge com contador de itens
export const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #e63946;
  color: #fff;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  padding: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  animation: pulse 0.3s ease-in-out;

  @keyframes pulse {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;