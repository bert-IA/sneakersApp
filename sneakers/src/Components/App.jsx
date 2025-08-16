
import {useState, useEffect} from 'react'; // ← IMPORT : permet de gérer l'état dans les composants fonctionnels
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './Banner'; // ← IMPORT : récupère le composant
import HomePage from '../Pages/HomePage';     // ← NOUVEAU : page d'accueil
import CartPage from '../Pages/CartPage';     // ← NOUVEAU : page panier  
import CheckoutPage from '../Pages/CheckoutPage'; // ← NOUVEAU : page commande
import ShippingPage from '../Pages/ShippingPage';
import '../styles/App.css';

function App() {
    
    const [cart, setCart] = useState(() => {
        // ← INITIALISATION : permet de récupérer le panier depuis le localStorage
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // ← MISE À JOUR : sauvegarde le panier dans le localStorage à chaque modification
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (sneaker) => {
        setCart(prevCart => {
            // Vérifier si le produit existe déjà
            const existingItem = prevCart.find(item => item.id === sneaker.id);
            
            if (existingItem) {
                // Augmenter la quantité
                return prevCart.map(item =>
                    item.id === sneaker.id 
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Ajouter nouveau produit avec quantité 1
                return [...prevCart, { ...sneaker, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (sneaker) => {
        
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === sneaker.id);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    // Si la quantité est 1, supprimer l'élément
                    return prevCart.filter(item => item.id !== sneaker.id);
                } else {
                    // Sinon, diminuer la quantité
                    return prevCart.map(item =>
                        item.id === sneaker.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    );
                }
            }
            return prevCart;
        });
    }
    
    const clearCart = () => {
        setCart([]); // Réinitialise le panier
    }

    // Calcul du nombre d'articles dans le panier
    const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <BrowserRouter>
            <div className="App">
                <Banner cartItemsCount={cartItemsCount} />
                <div className="main-content">
                    <Routes>
                        <Route 
                            path="/" 
                            element={
                            <HomePage 
                                cart={cart} 
                                addToCart={addToCart} />} 
                        />
                        <Route 
                            path="/cart" 
                            element={
                                <CartPage 
                                    cart={cart} 
                                    removeFromCart={removeFromCart}
                                    clearCart={clearCart}
                                />
                            } 
                        />
                        <Route 
                            path="/checkout" 
                            element={
                                <CheckoutPage 
                                    cart={cart} 
                                    cartItemsCount={cartItemsCount} />} 
                        />
                        <Route
                            path="/shipping"
                            element={
                                <ShippingPage />}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;