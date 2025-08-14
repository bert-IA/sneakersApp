
import {useState, useEffect} from 'react'; // ← IMPORT : permet de gérer l'état dans les composants fonctionnels
import Banner from './Banner'; // ← IMPORT : récupère le composant
import ShoppingList from './ShoppingList'
import Cart from './Cart'; // ← IMPORT : récupère le composant du panier
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
        console.log('🗑️ removeFromCart appelée avec:', sneaker);
        console.log('📦 État actuel du panier:', cart);
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

    return (
        <div className="App">
            <Banner />
            <div className="main-content">
                <div className="shopping-section">
                    <ShoppingList onAddToCart={addToCart} />
                </div>
                <div className="cart-section">
                    <Cart 
                    cartItems={cart} 
                    onRemoveFromCart={removeFromCart}
                    onClearCart={clearCart}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;