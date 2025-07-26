import React from 'react'

export default function SingleProduct({ productDetails }) {
    const { id, name, price, quantity, onSale } = productDetails;
    return (
        <div className='bg-gray-100 p-4 rounded-md shadow-md m-4'>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            {/* { onSale=='true' ? <div className='bg-red-600 text-white font-bold rounded-md'>Sale</div> : <div className='bg-green-600 text-white font-bold rounded-md'>Not on Sale</div> } */}
            { onSale=='true' && <div className='bg-red-600 text-white font-bold rounded-md'>Sale</div>}
        </div>
    )
}
