import { sneakersList } from '../../datas/sneakersList'; // ← NOUVEAU : chemin adapté
import SneakerItem from './SneakerItem';
import '../../styles/ShoppingList.css'; // ← NOUVEAU : chemin adapté

function ShoppingList({addToCart}) {
    return (
        <div className="shopping-list">
            <h2>Nos Sneakers</h2>
            <div className="sneakers-grid">
                {sneakersList.map((sneaker) => (
                    <SneakerItem 
                        key={sneaker.id}
                        sneakerData={sneaker}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default ShoppingList;
