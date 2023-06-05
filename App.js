import React, { useState, useEffect } from 'react';
import ManyProducts from './components/ManyProducts';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import ModifyProduct from './components/ModifyProduct';
import Footer from './components/Footer.js';
import About from './components/About.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // State variables
  const [products, setProducts] = useState([
    {
      "id": 2,
      "name": "Chicken Thigh",
      "description": "Juicy, tender, farm-raised chicken thighs.",
      "category": "meat",
      "price": 8
    },
    {
      "id": 3,
      "name": "Hot Italian Sausage",
      "description": "What is better than a decadent salty hot italian pork sausage?",
      "category": "meat",
      "price": 12
    },
    {
      "id": 4,
      "name": "Smoked Tofu",
      "description": "For my vegetarian friends, we have a smoky piece of organic tofu, seasoned with Montreal steak seasonning.",
      "category": "vegetarian",
      "price": 6
    },
    {
      "id": 5,
      "name": "Brie Cheese",
      "description": "This fan-favorite soft brie from Charlevoix will make every cheese fan full of joy.",
      "category": "dairy",
      "price": "11"
    },
    {
      "id": 6,
      "name": "Organic Brocolli",
      "description": "A classic side vegetable for our premium meats, this broccoli is perfect for roasting or eating in salads.",
      "category": "vegetable",
      "price": 4
    },
    {
      "id": 7,
      "name": "White Bread Loaf",
      "description": "Delicious white bread for your best leftover meat sandwiches",
      "category": "bakery",
      "price": "5.22"
    }
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModifyForm, setShowModifyForm] = useState(false);

  // Fetch products
  /* useEffect(() => {
    const getProducts = () => {
      
      const data = fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  // Fetch products (simulated)
  const fetchProducts = () => {
    // Simulated data
    const data = products;

    return data;
  }; */

  // Fetch product (simulated)
  const fetchProduct = (id) => {
    // Simulated data
    const product = products.find((p) => p.id === id);
    return product;
  };

  // Add product
  const addProduct = (product) => {
    // Simulated adding a product
    const newProduct = { id: Date.now(), ...product };
    setProducts([...products, newProduct]);
  };

  // Modify product
  const modifyProduct = (product) => {
    // Simulated modifying a product
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === product.id ? product : p))
    );
    setShowModifyForm(false);
  };

  // Delete product
  const deleteProduct = (id) => {
    // Simulated deleting a product
    setProducts((prevProducts) =>
      prevProducts.filter((p) => p.id !== id)
    );
  };

  // Toggle add product form
  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <BrowserRouter>

        <div className="container">

            <div className="row">

                <Header
                    title="Gestion de produits"
                    showAdd={showAddProduct}
                    onAdd={() => setShowAddProduct(!showAddProduct)}
                />

                {showAddProduct && <AddProduct onAdd={addProduct} />}

                {products.length > 0 ? (
                <Routes>
                    <Route path="/" element={
                        <ManyProducts products={products}
                            onModifyMany={async (id) => {
                                const productToModify = await fetchProduct(id);
                                setSelectedProduct(productToModify);
                                setShowModifyForm(true);
                            }}
                            onDeleteMany={deleteProduct} />}>     
                    </Route>
                </Routes>
        
                ) : (
                'No products'
                )}
                <Routes>
					<Route path="/about" element={<About/>}/><Route/>
				</Routes>
                 <Footer/>
            </div>

            <div className="row">
                {showModifyForm && (
                <ModifyProduct
                    selectedProduct={selectedProduct}
                    onSubmit={(modifiedProduct) => {
                    modifyProduct(modifiedProduct);
                    }}
                />
                )}
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
