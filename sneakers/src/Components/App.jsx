
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCart } from '../hooks/useCart'; // ← NOUVEAU : import du hook personnalisé

import Banner from './Banner';
import HomePage from '../Pages/HomePage';
import CartPage from '../Pages/CartPage';
import CheckoutPage from '../Pages/CheckoutPage';
import ShippingPage from '../Pages/ShippingPage';
import '../styles/App.css';

function App() {
    // ← NOUVEAU : Utilisation du hook au lieu de gérer l'état ici
    // Toute la logique complexe est maintenant dans useCart.js
    const { 
        cart, 
        cartItemsCount, 
        addToCart, 
        removeFromCart, 
        clearCart 
    } = useCart();

    // ← SUPPRIMÉ : Tout le code useState, useEffect, et les fonctions
    // Car ils sont maintenant dans le hook useCart

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
                                    addToCart={addToCart} 
                                />
                            } 
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
                                    cartItemsCount={cartItemsCount} 
                                />
                            } 
                        />
                        <Route
                            path="/shipping"
                            element={
                                <ShippingPage 
                                    clearCart={clearCart}
                                />
                            }
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;