import { Link } from 'react-router-dom';
import '../styles/CheckoutPage.css';

function CheckoutPage({ cart, cartItemsCount }) {
    const totalTTC = cart.reduce((total,item) => total + (item.prix*item.quantity),0);
    const HT = totalTTC/1.2;
    const TVA = totalTTC-HT;
    if (cartItemsCount === 0) {
        return (
            <div className='checkout-page'>
                <h2>Finaliser la commande</h2>
                <p>Le panier est vide</p>
                <Link to="/" className="continue-shopping">Retourner au catalogue</Link>
            </div>
        );
        }
    return (
        <div className='checkout-page'>
            <h2>Finaliser la commande</h2>
            <p>Nombre d'articles de la commande : {cartItemsCount}</p>
            
            <div className='order-summary'>
                {cart.map(item => (
                    <div key={item.id} className='order-line'>
                        <span>{item.nom}x{item.quantity}</span>
                        <span>{(item.prix*item.quantity).toFixed(2)}€</span>
                
                    </div>
                ))}
            </div>
            
            <div className='order-totals'>
                <div><span>Total TTC : </span><span>{totalTTC.toFixed(2)}€</span></div>
                <div><span>TVA : </span><span>{TVA.toFixed(2)}€</span></div>
                <div><span>Total HT : </span><span>{HT.toFixed(2)}€</span></div>
            </div>

            <div className='checkout-actions'>
                <Link to="/cart">Retourner au panier</Link>
                <Link to="/shipping">
                    <button>Continuer vers la livraison</button>
                </Link>
            </div>
        </div>
);
}

export default CheckoutPage;
