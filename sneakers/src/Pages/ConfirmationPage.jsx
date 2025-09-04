import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CheckoutPage.css';

function ConfirmationPage({ clearCart, clearShipping }) {
    const navigate = useNavigate();

    useEffect(() => {
        clearCart();
        if (clearShipping) clearShipping();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <h2>Commande validée !</h2>
            </div>
            <div className="empty-checkout">
                <p className="empty-message">Merci pour votre achat. Votre commande a bien été enregistrée.</p>
                <button className="btn-primary" onClick={() => navigate('/')}>Retour à l'accueil</button>
            </div>
        </div>
    );
}

export default ConfirmationPage;
