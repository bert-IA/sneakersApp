import {Link} from "react-router-dom"

function ShippingPage() {
    return (
        <div className="shipping-page">
            <h2>Informations de livraison</h2>
            <div className="shipping-action">
                <button>
                    <Link to="/checkout">Retour à la commande</Link>
                </button>
            </div>
        </div>
    )
}

export default ShippingPage;