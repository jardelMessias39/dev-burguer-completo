import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const STORAGE_KEY = 'devburger:cartInfo';

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = localStorage.getItem(STORAGE_KEY);

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData));
      }
    };

    loadUserData();
  }, []);

  const updateLocalStorage = (newCart) => {
    setCartProducts(newCart);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newCart));
  };

  // --- NOVA FUNÇÃO: LIMPAR CARRINHO INTEIRO ---
  const clearCart = () => {
    setCartProducts([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newCartProducts = [];

    if (cartIndex >= 0) {
      newCartProducts = [...cartProducts];
      newCartProducts[cartIndex].quantity = newCartProducts[cartIndex].quantity + 1;
    } else {
      product.quantity = 1;
      newCartProducts = [...cartProducts, product];
    }

    updateLocalStorage(newCartProducts);
  };

  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId);
    updateLocalStorage(newCart);
  };

  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd;
    });
    updateLocalStorage(newCart);
  };

  const decreaseProduct = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) => {
        return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd;
      });
      updateLocalStorage(newCart);
    } else {
      deleteProduct(productId);
    }
  };

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increaseProduct,
        decreaseProduct,
        deleteProduct,
        clearCart, // <-- Exportando a nova função aqui
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};