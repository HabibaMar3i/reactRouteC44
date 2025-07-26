import React from 'react'

export default function Child({email, age}) {
    return (
        <div className='bg-blue-50 p-3 rounded-md'>
            <h1>Child component</h1>
            <p>I'm getting data from Parent component using destructing props</p>
            {/* Accessing props directly */}
            {/* <p className='underline'>{props.email}</p> */}
            {/* destructuring props */}
            <p className='underline'>{email}</p>
            <p className='text-red-600'>This age is passed from App to parent to child: {age}</p>
        </div>
    )
}
