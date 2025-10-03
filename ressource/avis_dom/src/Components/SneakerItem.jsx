import { useState } from 'react';  // Import du hook useState
import CustomerReview from './CustomerReview';  // Import du composant CustomerReview
import '../styles/SneakerItem.css';  // Import du CSS

function SneakerItem({ nom, marque, prix, style, esthetique, confort, image, bestSeller = false }) {  // Valeur par défaut
    const [showReviews, setShowReviews] = useState(false);  // État pour gérer l'affichage des avis

    const handleToggleAvis = () => { 
        setShowReviews(!showReviews);  // Inverse l'état d'affichage
    };
    
    return (
        <div className={`sneaker-item ${bestSeller ? 'best-seller' : ''}`}>
            {bestSeller && <span className="best-seller-badge">Top vente</span>}
            <img src={image} alt={nom} className="sneaker-image" />
            
            <h3>{nom}</h3>
            <p className="sneaker-brand">{marque}</p>          
            <p className="sneaker-price">{prix} €</p>            
            <p className="sneaker-style">{style}</p>
            
            
            <div className="sneaker-review">
                <button onClick={handleToggleAvis}>
                    {showReviews ? 'Masquer les avis' : 'Voir les avis'}
                </button>
                {showReviews && (
                    <div className="avis-details">
                        <CustomerReview reviewType='esthétisme' scaleValue={esthetique} />
                        <CustomerReview reviewType='confort' scaleValue={confort} />
                    </div>
                )}
            </div>           
        </div>
    );
}

export default SneakerItem;

