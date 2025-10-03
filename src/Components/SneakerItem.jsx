import CustomerReview from './CustomerReview';  // Import du composant CustomerReview
import '../styles/SneakerItem.css';  // Import du CSS

function SneakerItem({ nom, marque, prix, style, esthetique, confort }) {  // Deconstruction directe
   return (
        <div className="sneaker-item">
            <h3>{nom}</h3>
            <p className="sneaker-brand">{marque}</p>          
            <p className="sneaker-price">{prix} €</p>            
            <p className="sneaker-style">{style}</p>
            <div className="sneaker-review">
                <CustomerReview reviewType='esthétisme' scaleValue={esthetique} />
                <CustomerReview reviewType='confort' scaleValue={confort} />
            </div>           
        </div>
    );
}

export default SneakerItem;