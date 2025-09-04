import { Link } from 'react-router-dom';
import '../styles/CheckoutPage.css';
import { DELIVERY_OPTIONS, ADDITIONAL_SERVICES } from '../datas/orderOptions';


// On attend en props : cart, cartItemsCount, selectedDelivery, selectedServices
import { useNavigate } from 'react-router-dom';

function CheckoutPage({ cart, cartItemsCount, selectedDelivery = 'standard', selectedServices = {}, clearCart }) {
    // Calcul du sous-total panier
    const sousTotal = cart.reduce((total, item) => total + (item.prix * item.quantity), 0);
    // Prix livraison
    const deliveryPrice = DELIVERY_OPTIONS[selectedDelivery]?.price || 0;
    // Prix services additionnels
    const servicesPrice = Object.entries(selectedServices)
        .filter(([key, isChecked]) => isChecked)
        .reduce((sum, [key]) => sum + (ADDITIONAL_SERVICES[key]?.price || 0), 0);

    // Total général
    const totalHT = (sousTotal + deliveryPrice + servicesPrice) / 1.2;
    const tva = (sousTotal + deliveryPrice + servicesPrice) - totalHT;
    const totalTTC = sousTotal + deliveryPrice + servicesPrice;

    // Détection : l'utilisateur a-t-il déjà rempli la livraison ?
    const hasShippingInfo = selectedDelivery !== 'standard' || Object.values(selectedServices).some(v => v);

    const navigate = useNavigate();

    // Handler pour valider la commande : redirige vers la page de confirmation
    const handleOrderValidation = () => {
        navigate('/confirmation');
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
                <h2>{hasShippingInfo ? 'Récapitulatif de la commande' : 'Finaliser la commande'}</h2>
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
                    {/* Affichage des options */}
                    <div className="order-options">
                        <div>
                            <span>Livraison :</span>
                            <span>{DELIVERY_OPTIONS[selectedDelivery]?.label} (+{deliveryPrice}€)</span>
                        </div>
                        {Object.entries(selectedServices).map(([key, isChecked]) =>
                            isChecked ? (
                                <div key={key}>
                                    <span>{ADDITIONAL_SERVICES[key]?.label} :</span>
                                    <span>+{ADDITIONAL_SERVICES[key]?.price}€</span>
                                </div>
                            ) : null
                        )}
                    </div>
                </div>

                <div className='order-totals'>
                    <h3>Total de la commande</h3>
                    <div className="totals-breakdown">
                        <div className="total-line subtotal">
                            <span>Sous-total HT :</span>
                            <span>{totalHT.toFixed(2)}€</span>
                        </div>
                        <div className="total-line tax">
                            <span>TVA (20%) :</span>
                            <span>{tva.toFixed(2)}€</span>
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
                    {!hasShippingInfo ? (
                        <Link to="/shipping" className="btn-primary">
                            <span className="btn-text">Continuer vers la livraison</span>
                            <span className="btn-icon">→</span>
                        </Link>
                    ) : (
                        <button className="btn-primary" onClick={handleOrderValidation}>
                            <span className="btn-text">Retour à l'accueil</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
