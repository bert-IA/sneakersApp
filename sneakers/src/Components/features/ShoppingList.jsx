import { sneakersList } from '../../datas/sneakersList'; // ← NOUVEAU : chemin adapté
import SneakerItem from './SneakerItem';
import { useState } from 'react';
import '../../styles/ShoppingList.css'; // ← NOUVEAU : chemin adapté

function ShoppingList({ addToCart }) {

    const [marqueFilter, setMarqueFilter] = useState(null)
    const marques = [... new Set(sneakersList.map(sneaker => sneaker.marque))]

    const sneakersFiltered = sneakersList.filter(sneaker =>
        marqueFilter === null || sneaker.marque === marqueFilter
    )

    return (
        <div className="shopping-list">
            <h2>Nos Sneakers</h2>
            <div className="filter-section">
                <button
                    className={`filter-btn ${marqueFilter === null ? 'active' : ''}`}
                    onClick={() => setMarqueFilter(null)}>
                    Toutes
                </button>
                {marques.map(marque => (
                    <button
                        key={marque}
                        className={`filter-btn ${marqueFilter === marque ? 'active' : ''}`}
                        onClick={() => setMarqueFilter(marque)}>
                        {marque}
                    </button>
                ))}
            </div>

            <div className="sneakers-grid">
                {sneakersFiltered.map((sneaker) => (
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
