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
                        nom={sneaker.nom}        
                        marque={sneaker.marque}  
                        prix={sneaker.prix}      
                        style={sneaker.style}    
                        esthetique={sneaker.esthetique} 
                        confort={sneaker.confort} 
                        image={sneaker.image}    
                        bestSeller={sneaker.bestSeller} 
                    />
                ))}
            </div>
        </div>
    );
}

export default ShoppingList;
