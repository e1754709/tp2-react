import { useState } from "react"

const AddProduct = ({onAdd}) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!name || !description || !price || !category){
            alert("Please fill all inputs")
            return
        }
        onAdd({name, description, category ,price}) 
        setName('')
        setDescription('')
        setCategory('')
        setPrice('')
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Product Name</label>
                <input
                    type="text"
                    placeholder="add Product"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Product description</label>
                <input
                    type="text"
                    placeholder="add Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Price</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Category</label>
                <input
                    type="text"
                    id='category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                </input>
            </div>
            <input type="submit" className="btn btn-block" value="Save Product"/>
        </form>
    )
}

export default AddProduct