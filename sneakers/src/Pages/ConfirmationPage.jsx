
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CheckoutPage.css';
import { DELIVERY_OPTIONS, ADDITIONAL_SERVICES } from '../datas/orderOptions';

function ConfirmationPage({ cart, cartItemsCount, shippingChoices, clearCart, clearShipping }) {
    const navigate = useNavigate();
    const [isValidated, setIsValidated] = useState(false);

    // Calculs du total
    const sousTotal = cart.reduce((total, item) => total + (item.prix * item.quantity), 0);
    const deliveryPrice = DELIVERY_OPTIONS[shippingChoices.deliveryOptions]?.price || 0;
    const servicesPrice = Object.entries(shippingChoices.additionalServices)
        .filter(([key, isChecked]) => isChecked)
        .reduce((sum, [key]) => sum + (ADDITIONAL_SERVICES[key]?.price || 0), 0);
    const totalHT = (sousTotal + deliveryPrice + servicesPrice) / 1.2;
    const tva = (sousTotal + deliveryPrice + servicesPrice) - totalHT;
    const totalTTC = sousTotal + deliveryPrice + servicesPrice;

    const handleValidateOrder = () => {
        clearCart();
        if (clearShipping) clearShipping();
        setIsValidated(true);
    };

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <h2>Confirmation de la commande</h2>
            </div>
            {!isValidated ? (
                <>
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
                        <div className="order-options">
                            <div>
                                <span>Livraison :</span>
                                <span>{DELIVERY_OPTIONS[shippingChoices.deliveryOptions]?.label} (+{deliveryPrice}€)</span>
                            </div>
                            {Object.entries(shippingChoices.additionalServices).map(([key, isChecked]) =>
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
                    <div className="action-group primary-actions" style={{width: '100%'}}>
                        <button className="btn-primary" style={{width: '100%'}} onClick={handleValidateOrder}>
                            <span className="btn-text">Valider la commande</span>
                        </button>
                    </div>
                </div>
                </>
            ) : (
                <div className="empty-checkout">
                    <h2>Commande validée !</h2>
                    <p className="empty-message">Merci pour votre achat. Votre commande a bien été enregistrée.</p>
                    <button className="btn-primary" onClick={() => navigate('/')}>Retour à l'accueil</button>
                </div>
            )}
        </div>
    );
}

export default ConfirmationPage;
