import ShoppingList from '../Components/features/ShoppingList'; // ← NOUVEAU : structure organisée

function HomePage({ cart, addToCart }) {
    return (
        <div>
            <ShoppingList addToCart={addToCart} />
        </div>
    );
}

export default HomePage;
