import React, { useState } from 'react'
import SingleProduct from '../SingleProduct/SingleProduct'

export default function Products() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Laptop', price: 1000, quantity: 5, onSale: "true"},
        { id: 2, name: 'Mobile', price: 500, quantity: 10, onSale: "false"},
        { id: 3, name: 'Tablet', price: 300, quantity: 15, onSale: "true"},
        { id: 4, name: 'Monitor', price: 200, quantity: 8, onSale: "false"},
        { id: 5, name: 'Keyboard', price: 50, quantity: 20, onSale: "false"},
        { id: 6, name: 'Mouse', price: 25, quantity: 30, onSale: "true"}
    ])

    let deleteProduct = (id) => {
        const myProducts = structuredClone(products);
        const filteredProducts = myProducts.filter((products)=> {
            return products.id !== id;
        })
        setProducts(filteredProducts);
    }

    const [quantity, setQuantity] = useState(0)

    const changeQuantity = (index) => {
        const myProducts = structuredClone(products);
        setQuantity(myProducts[index].quantity++);
        setProducts(myProducts);
    }

    return (
        <div>
            <h1>Products</h1>
            <div className="flex flex-row justify-center items-center">
            {
                products.map((product, index) => (
                    <SingleProduct
                        key={product.id}
                        index={index}
                        deleteP={deleteProduct}
                        updateP={() => changeQuantity(index)}
                        productDetails={product}
                    />
                ))
            }
            </div>
        </div>
    )
}
