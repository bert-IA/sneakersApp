import Cart from '../Components/features/Cart'; // ← NOUVEAU : structure organisée
import { Link } from 'react-router-dom';
import '../styles/CartPage.css';

function CartPage({ cart, removeFromCart, clearCart }) {
    return (
        <div className="cart-page">
            <Cart
                cartItems={cart}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
            />
            
            {/* Affichage conditionnel : bouton "Commander" uniquement si le panier contient des articles */}
            {cart.length > 0 && (
                <div className="checkout-section">
                    <Link to="/checkout" className="checkout-button">
                        <span className="btn-text">Passer la commande</span>
                        <span className="btn-icon">→</span>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default CartPage;
