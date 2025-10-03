import { Link } from 'react-router-dom';
import '../styles/CheckoutPage.css';
// On n'affiche plus les options ni le total final ici


// On attend en props : cart, cartItemsCount, selectedDelivery, selectedServices
import { useNavigate } from 'react-router-dom';

function CheckoutPage({ cart, cartItemsCount }) {
    // Calcul du sous-total panier
    const sousTotal = cart.reduce((total, item) => total + (item.prix * item.quantity), 0);
    // Affichage d'un total TTC simple (panier uniquement)
    const totalTTC = sousTotal;
    const navigate = useNavigate();

    // Handler pour continuer vers la livraison
    const handleGoToShipping = () => {
        navigate('/shipping');
    };

    if (cartItemsCount === 0) {
        return (
            <div className='checkout-page'>
                <div className="empty-checkout">
                    <h2>Récapitulatif de la commande</h2>
                    <p className="empty-message">Votre panier est vide</p>
                    <Link to="/" className="btn-secondary">Retourner au catalogue</Link>
                </div>
            </div>
        );
    }


    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <h2>Récapitulatif du panier</h2>
            </div>
            <div className="checkout-content">
                <div className='order-summary'>
                    <div className="summary-header">
                        <h3>Votre panier</h3>
                        <div className="summary-stats">
                            <span className="total-items">{cartItemsCount} produit{cartItemsCount > 1 ? 's' : ''}</span>
                        </div>
                    </div>
                    <div className="order-items">
                        {cart.map(item => (
                            <div key={item.id} className='order-line'>
                                <div className="item-details">
                                    <span className="item-name">{item.nom}</span>
                                    <div className="item-meta">
                                        <span className="item-price-unit">{item.prix}€ / unité</span>
                                        <span className="item-quantity">Quantité: {item.quantity}</span>
                                    </div>
                                </div>
                                <div className="item-total">
                                    <span className="total-label">Total</span>
                                    <span className="item-price">{(item.prix*item.quantity).toFixed(2)}€</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='order-totals'>
                    <h3>Total TTC du panier</h3>
                    <div className="totals-breakdown">
                        <div className="total-line final-total">
                            <span>Total TTC :</span>
                            <span>{totalTTC.toFixed(2)}€</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='checkout-actions'>
                <div className="action-group secondary-actions">
                    <Link to="/cart" className="btn-secondary">
                        <span className="btn-icon">←</span>
                        <span className="btn-text">Retour au panier</span>
                    </Link>
                </div>
                <div className="action-group primary-actions">
                    <button className="btn-primary" onClick={handleGoToShipping}>
                        <span className="btn-text">Continuer vers la livraison</span>
                        <span className="btn-icon">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
