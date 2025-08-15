import ShoppingList from '../Components/ShoppingList';

function HomePage({ cart, addToCart }) {
    // REMARQUE : cart n'est pas utilisé ici mais on le garde pour la cohérence avec les autres pages
    return (
        <div>
            <ShoppingList addToCart={addToCart} />
        </div>
    );
}

export default HomePage;
