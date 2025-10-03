import '../styles/CustomerReview.css';

function CustomerReview ({scaleValue, reviewType}) {
    const range = [1, 2, 3, 4, 5]
    const scaleType = reviewType === 'confort' ? '😌': '💖'
    
    return (
        <div className="customer-review">
            <span className="review-label">{reviewType} : </span>
            <div className="review-scale">
                {range.map((rangeElem) =>
                    scaleValue >= rangeElem ? (
                        <span key={rangeElem.toString()} className="scale-icon">{scaleType}</span>
                    ) : null
                )}
            </div>
        </div>
    )
}

export default CustomerReview;