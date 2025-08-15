import { Link } from 'react-router-dom';
import '../styles/CheckoutPage.css';

function CheckoutPage({ cart, cartItemsCount }) {
    return (
        <div className="checkout-page">
            <div className="page-header">
                <h2>Finaliser votre commande</h2>
                <Link to="/cart" className="back-to-cart">
                    ← Retour au panier
                </Link>
            </div>
            
            <div className="checkout-content">
                <p>Page de commande - À développer dans l'exercice !</p>
                <p>Nombre d'articles : {cartItemsCount || 0}</p>
            </div>
        </div>
    );
}

export default CheckoutPage;
