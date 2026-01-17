

import PropTypes from 'prop-types';
import { ContainerButton } from './styles';

import cartIcon from '../../assets/carrinho.svg';


export function CartButton({ ...props }) {

    
    return (
        <ContainerButton {...props}>
            <img src={cartIcon} alt="Carrinho de compras" />

        </ContainerButton>
     

    );
   
}


