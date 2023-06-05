import SingleProduct from "./SingleProduct.js"

const ManyProducts = ({products, onDeleteMany, onModifyMany}) => {
    return (
        <>
            {products.map((product) => 
                (<SingleProduct product={product} key={product.id} onModify={onModifyMany} onDelete={onDeleteMany}/>)
            )}
        </>
    )
}

export default ManyProducts
