import React from 'react'

export const NavBar = () => {
  return (
    <div>
        <nav className="flex gap-20 items-center font-semibold p-10">
            <h1 className='font-bold text-4xl'>SHOP.CO</h1>
            <ul className="flex gap-10">
                <li>Shop</li>
                <li>On Sale</li>
                <li>New Arrival</li>
                <li>Brands</li>
            </ul>
            <input type="search" placeholder="Search for products..." className='rounded-full p-3 flex-1 bg-gray-200'/>
            <div className='flex gap-5'>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-user"></i>
            </div>
        </nav>
    </div>
  )
}
