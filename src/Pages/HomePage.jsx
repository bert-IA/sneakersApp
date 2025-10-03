import ShoppingList from '../Components/ShoppingList';

function HomePage({ cart, addToCart }) {
    return (
        <div>
            <ShoppingList addToCart={addToCart} />
        </div>
    );
}

export default HomePage;
