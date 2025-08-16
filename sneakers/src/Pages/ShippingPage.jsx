import { Link } from "react-router-dom";
import '../styles/ShippingPage.css';

function ShippingPage() {
    return (
        <div className="shipping-page">
            <div className="page-header">
                <h2>Informations de livraison</h2>
            </div>
            
            <div className="shipping-content">
                <div className="info-section">
                    <div className="development-notice">
                        <h3>🚧 Fonctionnalité en développement</h3>
                        <p>Cette page sera développée dans le prochain cours.</p>
                        <p>Vous apprendrez à créer des formulaires complets avec validation.</p>
                    </div>
                    
                    <div className="features-preview">
                        <h4>Prochaines fonctionnalités :</h4>
                        <ul className="features-list">
                            <li>📍 Formulaire d'adresse de livraison</li>
                            <li>🚚 Choix du transporteur</li>
                            <li>✅ Validation des champs</li>
                            <li>💳 Finalisation de la commande</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="shipping-actions">
                <Link to="/checkout" className="btn-secondary">← Retour au récapitulatif</Link>
            </div>
        </div>
    );
}

export default ShippingPage;