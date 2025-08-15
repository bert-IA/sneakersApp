import '../styles/Cart.css';

function Cart({ cartItems, removeFromCart, clearCart }) {
    console.log('🏪 Cart rendu avec props:');
    console.log('   - cartItems:', cartItems);
    console.log('   - removeFromCart:', removeFromCart);
    const totalItems= cartItems.reduce((sum, item) =>
        sum + item.quantity,0)
    const totalPrice = cartItems.reduce((sum, item) => 
        sum + (item.prix * item.quantity),0);

    const handleRemoveFromCart = (itemToRemove) => {
        removeFromCart(itemToRemove);
    }

    if (cartItems.length === 0) {
    return (
        <div className="cart">
        <h2>Mon Panier</h2>
        <p className="empty-cart">Votre panier est vide</p>
        </div>
        );
    }   

    return (
        <div className="cart">
            <div className="cart-header">
                <h2>Mon Panier ({totalItems})</h2>
            </div>
            
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.nom} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h4>{item.nom}</h4>
                            <p>{item.marque}</p>
                            <p>Quantité: {item.quantity}</p>
                            <p className="cart-item-price">{item.prix * item.quantity}€</p>
                        </div>
                        <div className="sneaker-action">
                            <button 
                                onClick={() => {
                                    console.log('🖱️ Clic sur le bouton supprimer');
                                    console.log('📦 Item à supprimer:', item);
                                    handleRemoveFromCart(item);
                                }} 
                                className="remove-from-cart"
                            >
                                Supprimer du panier
                            </button>


                        </div>
                    </div>
                ))}
            </div>
            
            <div className="cart-summary">
                <h3>Total: {totalPrice}€</h3>
            </div>
            <div className="cart-actions">
                <button 
                    onClick={clearCart}
                    className="clear-cart-btn"
                >
                    Vider le panier
                </button>
            </div>
        </div>
    );
}

export default Cart;