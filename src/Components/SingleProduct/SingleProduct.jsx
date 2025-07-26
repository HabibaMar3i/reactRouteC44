import React from 'react'

export default function SingleProduct({ productDetails }) {
    const { id, name, price, quantity } = productDetails;
    return (
        <div className='bg-gray-100 p-4 rounded-md shadow-md m-2'>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
        </div>
    )
}
