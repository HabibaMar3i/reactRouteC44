import React, { useState } from 'react'
import Child from '../Child/Child';


export default function Parent({age}) {
    const [userEmail, setUserEmail] = useState('habibaorgami@gmail.com')
    return (
        <div className='bg-green-200 p-3 rounded-md'>
            <h1>Parent component</h1>
            <p>I'm getting data from App component using destructing props</p>
            <p className='underline text-yellow-600'>My age is: {age} passed from App to Parent</p>
            <p>I'm just sending data to Child component</p>
            <Child email={userEmail} age={age}/>
        </div>
    )
}
