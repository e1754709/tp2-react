import { useState, useEffect } from 'react';
import ManyProducts from './components/ManyProducts';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import ModifyProduct from './components/ModifyProduct';
import Footer from './components/Footer.js';
import About from './components/About.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    // State variables
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModifyForm, setShowModifyForm] = useState(false);

    // Fetch products
    useEffect(() => {

        const getProducts = async () => {
            const productsFromServer = await fetchProducts();
            setProducts(productsFromServer);
        };

        getProducts();

    }, []);

    // Fetch products
    const fetchProducts = async () => {

        const res = await fetch('http://localhost:5000/products');
        const data = await res.json();

        return data;
    };

    // Fetch product
    const fetchProduct = async (id) => {

        const res = await fetch(`http://localhost:5000/products/${id}`);
        const data = await res.json();

        return data;
    };

    // Add product
    const addProduct = async (product) => {

        const res = await fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(product),
        });

        const newProduct = await res.json();

        setProducts([...products, newProduct]);
    };

    // Modify product
    const modifyProduct = async (product) => {
        
        const res = await fetch(`http://localhost:5000/products/${product.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(product),
        });

        const modifiedProduct = await res.json();

        setProducts(
            products.map((product) =>
                product.id === modifiedProduct.id ? modifiedProduct : product
            )
        );
        
        setShowModifyForm(false);
    };

    // Delete product
    const deleteProduct = async (id) => {

        await fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        });

        setProducts(products.filter((product) => product.id !== id));
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

// Path: tp2/my-app/src/App.js
export default App;
 