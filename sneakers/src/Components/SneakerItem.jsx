import { useState } from 'react';  // Import du hook useState pour gérer l'état local
import CustomerReview from './CustomerReview';  // Import du composant CustomerReview pour afficher les avis
import '../styles/SneakerItem.css';  // Import du CSS pour le style du composant

function SneakerItem({ sneakerData, onAddToCart }) {
    // ÉTAT LOCAL : gère l'affichage/masquage des avis détaillés
    const [showReviews, setShowReviews] = useState(false);
    
    // DESTRUCTURATION : extrait les propriétés nécessaires depuis l'objet sneakerData
    const { nom, marque, prix, style, esthetique, confort, image, bestSeller = false } = sneakerData;

    // GESTIONNAIRE D'ÉVÉNEMENT : toggle (bascule) l'affichage des avis
    const handleToggleAvis = () => { 
        setShowReviews(!showReviews); 
    };
    
    // GESTIONNAIRE D'ÉVÉNEMENT : envoie les données du sneaker vers App via ShoppingList
    const handleAddToCart = () => {
        console.log('🛒 Données transmises:', sneakerData);  // ← Ajout pour vérification
        onAddToCart(sneakerData);  // Appelle la fonction reçue en props, qui remonte via ShoppingList jusqu'à App
    };
    
    return (
        // CONTENEUR PRINCIPAL : classe conditionnelle pour les best-sellers
        <div className={`sneaker-item ${bestSeller ? 'best-seller' : ''}`}>
            
            {/* BADGE BEST-SELLER : affiché seulement si bestSeller est true */}
            {bestSeller && <span className="best-seller-badge">Top vente</span>}
            
            {/* IMAGE du produit avec alt pour l'accessibilité */}
            <img src={image} alt={nom} className="sneaker-image" />
            
            {/* INFORMATIONS PRODUIT : utilisation des variables destructurées */}
            <h3>{nom}</h3>
            <p className="sneaker-brand">{marque}</p>          
            <p className="sneaker-price">{prix} €</p>            
            <p className="sneaker-style">{style}</p>
            
            {/* SECTION PANIER : bouton pour ajouter le produit au panier */}
            <div className="sneaker-actions">
                <button onClick={handleAddToCart} className="add-to-cart-btn">
                    🛒 Ajouter au panier
                </button>
            </div>
            
            {/* SECTION AVIS : gestion de l'affichage des reviews */}
            <div className="sneaker-review">
                {/* Bouton toggle pour afficher/masquer les avis */}
                <button onClick={handleToggleAvis}>
                    {showReviews ? 'Masquer les avis' : 'Voir les avis'}
                </button>
                
                {/* RENDU CONDITIONNEL : affiche les avis seulement si showReviews est true */}
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

// Export du composant pour pouvoir l'importer dans d'autres fichiers
export default SneakerItem;

/*
RÉSUMÉ DU COMPOSANT SneakerItem :

RESPONSABILITÉS :
- Affiche les informations d'un sneaker individual (nom, prix, image, etc.)
- Gère l'interaction utilisateur (boutons cliquables)
- Communique avec le parent via les callbacks (onAddToCart)
- Maintient un état local pour l'affichage des avis

PROPS REÇUES :
- sneakerData : objet contenant toutes les infos du produit
- onAddToCart : fonction callback pour ajouter au panier

ÉTAT LOCAL :
- showReviews : boolean pour afficher/masquer les avis détaillés

FONCTIONNALITÉS :
- Affichage conditionnel du badge "best-seller" 
- Bouton "Ajouter au panier" qui communique avec App
- Toggle des avis avec état local
- Utilisation de composants enfants (CustomerReview)

CONCEPTS REACT UTILISÉS :
- Props et destructuring
- useState hook
- Event handlers
- Rendu conditionnel (&&, ternaire)
- Communication enfant → parent via callbacks
*/

