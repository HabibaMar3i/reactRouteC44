import React, { useState } from 'react';

export default function State() {
    const [userName, setUserName] = useState('Habiba')

    function changeName() {
        setUserName('Habiba Hassan')
    }

    const [count, setCount] = useState(0)

    const changeCount = () => {
        setCount(Math.round(Math.random() * 100))
    }

    const [product, setProduct] = useState({name: 'Laptop', price: 1000, quantity: 5})
    let {name, price, quantity} = product
    const changeProduct = () => {
        setProduct({name: 'Mobile', price: 500, quantity: 10})
    }
    

    return (
        <>
            <h1>State Component</h1>
            <p>My name is: {userName}</p>
            <button className="bg-amber-100 p-1 rounded-md cursor-pointer" onClick={changeName}>Change Name</button>

            <p className={count>=50 ? "underline" : "bg-red-100"}>My count is: {count}</p>
            <button className="bg-blue-100 p-1 rounded-md cursor-pointer" onClick={changeCount}>Change count</button>
        
            <p>Product Name: {name}</p>
            <p>Product Price: {price}</p>   
            <p>Product Quantity: {quantity}</p>
            <button className="bg-yellow-100 p-1 rounded-md cursor-pointer" onClick={changeProduct}>Change product</button>
        </>
    )
}