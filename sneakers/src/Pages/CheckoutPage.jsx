import { Link } from 'react-router-dom';
import '../styles/CheckoutPage.css';
import { calculateCartTotal } from '../utils/cartHelpers'; // ← NOUVEAU : import de la fonction utilitaire

function CheckoutPage({ cart, cartItemsCount }) {
    // NOUVEAU : utilisation de la fonction utilitaire
    const totalTTC = calculateCartTotal(cart);
    const HT = totalTTC/1.2;
    const TVA = totalTTC-HT;
    
    if (cartItemsCount === 0) {
        return (
            <div className='checkout-page'>
                <div className="empty-checkout">
                    <h2>Finaliser la commande</h2>
                    <p className="empty-message">Votre panier est vide</p>
                    <Link to="/" className="btn-secondary">Retourner au catalogue</Link>
                </div>
            </div>
        );
    }
    
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <h2>Finaliser la commande</h2>
            </div>
            
            <div className="checkout-content">
                <div className='order-summary'>
                    <div className="summary-header">
                        <h3>Récapitulatif de votre commande</h3>
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
                    <h3>Total de la commande</h3>
                    <div className="totals-breakdown">
                        <div className="total-line subtotal">
                            <span>Sous-total HT :</span>
                            <span>{HT.toFixed(2)}€</span>
                        </div>
                        <div className="total-line tax">
                            <span>TVA (20%) :</span>
                            <span>{TVA.toFixed(2)}€</span>
                        </div>
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
                        <span className="btn-text">Retourner au panier</span>
                    </Link>
                </div>
                <div className="action-group primary-actions">
                    <Link to="/shipping" className="btn-primary">
                        <span className="btn-text">Continuer vers la livraison</span>
                        <span className="btn-icon">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
