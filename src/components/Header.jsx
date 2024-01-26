import React from 'react'

export default function Header() {
    const name = "Rishi"
  return (
    <div className='flex justify-between items-center p-4'>
        <div className='flex justify-center flex-grow'>
            <p className='text-center'>Demo Editor by {name}</p>
        </div>
        <button className='border-2 border-black pl-4 pr-4'>Save</button>
    </div>
  )
}
