import { sneakersList } from '../datas/sneakersList';
import SneakerItem from './SneakerItem';
import '../styles/ShoppingList.css';

function ShoppingList() {
    return (
        <div className="shopping-list">
            <h2>Nos Sneakers</h2>
            <div className="sneakers-grid">
                {sneakersList.map((sneaker) => (
                    <SneakerItem 
                        key={sneaker.id}
                        nom={sneaker.nom}        // Props "nom" passee a l'enfant
                        marque={sneaker.marque}  // Props "marque" passee a l'enfant
                        prix={sneaker.prix}      // Props "prix" passee a l'enfant
                        style={sneaker.style}    // Props "style" passee a l'enfant
                        esthetique={sneaker.esthetique} // Props "esthetique" passee a l'enfant
                        confort={sneaker.confort} // Props "confort" passee a l
                    />
                ))}
            </div>
        </div>
    );
}

export default ShoppingList;
