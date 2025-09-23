// Fonctions utilitaires pour la gestion du panier
// Ces fonctions sont "pures" : même entrée = même sortie

// Calcule le nombre total d'articles dans le panier
export const calculateCartCount = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
};

// Calcule le prix total du panier
export const calculateCartTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + (item.prix * item.quantity), 0);
};

// Trouve un article spécifique dans le panier
export const findItemInCart = (cartItems, productId) => {
    return cartItems.find(item => item.id === productId);
};

// Vérifie si un article existe dans le panier
export const isItemInCart = (cartItems, productId) => {
    return cartItems.some(item => item.id === productId);
};
