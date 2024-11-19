import Rating from './Rating';

const Card = props => {
    return (
        <div className='product-card'>
            <img src={props.imageUrl} height="250px"></img>
            <div className='product-details'>
                <h6>{props.title}</h6>
                <h4>${props.price}</h4>
            </div>
            <button>Add to cart</button>
            <div className='rating-container'>
                <Rating value={props.rating}/>
                Rating: {props.rating}/5
            </div>
        </div>
    )
}

export default Card;