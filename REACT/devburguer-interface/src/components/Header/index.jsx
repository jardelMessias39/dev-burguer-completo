import { UserCircle, ShoppingCart } from "@phosphor-icons/react";
import {
    Container,
    Navigation,
    HeaderLink,
    Options,
    Profile,
    Logout,
    LinkContainer,
    Content,
    CartContainer,  // ✅ Novo
    CartBadge       // ✅ Novo
} from "./styles";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import { useCart } from "../../hooks/CartContext"; // ✅ Importa o hook do carrinho

export function Header() {
    const navigate = useNavigate();
    const { logout, userInfo } = useUser();
    const { cartProducts } = useCart(); // ✅ Pega os produtos do carrinho
    const { pathname } = useResolvedPath();

    // ✅ Conta o total de itens no carrinho
    const totalItems = cartProducts.reduce((acc, product) => acc + product.quantity, 0);

    function logoutUser() {
        logout();
        navigate('/login');
    }

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to="/" $isActive={pathname === '/'}>
                            Home
                        </HeaderLink>
                        <hr />
                        <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>

                <Options>
                    <Profile>
                        <UserCircle color="#fff" size={32} />
                        <div>
                            <p>Olá, <span>{userInfo.name}</span></p>
                            <Logout onClick={logoutUser}>Sair</Logout>
                        </div>
                    </Profile>

                    <LinkContainer>
                        {/* ✅ Container do carrinho com badge */}
                        <CartContainer onClick={() => navigate('/carrinho')}>
                            <ShoppingCart color="#fff" size={32} />
                            {totalItems > 0 && (
                                <CartBadge>{totalItems}</CartBadge>
                            )}
                        </CartContainer>
                        <HeaderLink to="/carrinho" $isActive={pathname === '/carrinho'}>
                            Carrinho
                        </HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    );
}