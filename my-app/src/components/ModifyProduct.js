import { useState, useEffect } from 'react';

const ModifyProduct = ({ selectedProduct, onSubmit }) => {
  // Initialize state variables for the form inputs
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    // When the selectedProduct prop changes, update the form inputs
    if (selectedProduct) {
      setName(selectedProduct.name);
      setDescription(selectedProduct.description); 
      setCategory(selectedProduct.category); 
      setPrice(selectedProduct.price);
    }
  }, [selectedProduct]);

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a modifiedProduct object with the updated data
    const modifiedProduct = {
      id: selectedProduct.id,
      name,
      description,
      category,
      price,
    };

    // Call the onSubmit function with the modifiedProduct object
    onSubmit(modifiedProduct);
  };

  return (
    
    <form className='modify-form' onSubmit={handleSubmit}>
      <h1>Modify product</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
        </input>
      </div>
      <button type="submit">Modify</button>
    </form>
  );
};
 

export default ModifyProduct;