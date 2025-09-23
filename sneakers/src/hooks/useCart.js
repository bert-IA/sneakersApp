import { useState, useEffect } from 'react';
import { calculateCartCount, calculateCartTotal } from '../utils/cartHelpers';

// Hook personnalisé pour gérer le panier
export const useCart = () => {
    // État du panier (déplacé depuis App.jsx)
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Sauvegarde automatique (déplacé depuis App.jsx)
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Fonction pour ajouter un article (déplacée depuis App.jsx)
    const addToCart = (sneaker) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === sneaker.id);
            
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === sneaker.id 
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...sneaker, quantity: 1 }];
            }
        });
    };

    // Fonction pour supprimer un article (déplacée depuis App.jsx)
    const removeFromCart = (sneaker) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === sneaker.id);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    return prevCart.filter(item => item.id !== sneaker.id);
                } else {
                    return prevCart.map(item =>
                        item.id === sneaker.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    );
                }
            }
            return prevCart;
        });
    };

    // Fonction pour vider le panier (déplacée depuis App.jsx)
    const clearCart = () => {
        setCart([]);
    };

    // Calculs utilisant les fonctions utilitaires
    const cartItemsCount = calculateCartCount(cart);
    const cartTotal = calculateCartTotal(cart);

    // Le hook retourne tout ce dont les composants ont besoin
    return {
        cart,
        cartItemsCount,
        cartTotal,
        addToCart,
        removeFromCart,
        clearCart
    };
};
