import Button from "./Button.js"

const SingleProduct = ({product, onDelete, onModify}) => {
    return (
        <div className="product">
            <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <span>{product.price}$</span>
            </div>
            <div className="btn-parent">
                <Button text="Modifier" color="black" onClick={() => {onModify(product.id)}}/>
                <Button text="Supprimer" color="red" onClick={() => {onDelete(product.id)}}/>
            </div>
        </div>
    )
}

export default SingleProduct