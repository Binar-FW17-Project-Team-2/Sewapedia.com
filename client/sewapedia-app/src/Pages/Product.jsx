import React, { useState} from "react";
import '../App.css'

function Products(){
    const [cart, setCart] = useState([]);
    const [products] = useState([
        {
            nama: 'Bicyle Kick',
            harga: '100.000',
            image: 'https://foto.kontan.co.id/W3S6NLMJvuwd6WpmH0QgUnqBc-Y=/smart/2020/02/02/359563101p.jpg',
        },
        {
            nama: 'Transfomers Kit',
            harga: '80.000',
            image: 'https://static-ca.gamestop.ca/images/products/767200/3max.jpg',
        },
    ]);

    const addToCart = (product) => {
        console.log('add to cart')
        setCart([...cart, product])
    }

    return (
        <div className="App">
            <h1>Product</h1>
            <div className="products">
            {products.map((product, index) => (
             <div className="product" key={index}>
                 <h3>{product.nama}</h3>
                 <h4>{product.harga}</h4>
                 <img src={product.image} alt={product.nama} />
                 <br />
                 <button onClick={() => addToCart(product)}>Add to Cart</button>
             </div>   
            ))}
            </div>
            <footer>
                <button>Go to Cart({cart.length})</button>
            </footer>
        </div>
    )
}

export default Products;