import { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
    const [cartCounter, setCartCounter] = useState(0);

    return (
        <CartContext.Provider value={{ cartCounter, setCartCounter }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
