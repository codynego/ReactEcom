import React from 'react';

export const NavBar = () => {
  return (
    <div>
      <nav className="flex gap-5 flex-row items-center justify-between font-semibold p-7">
        <h1 className="font-bold text-4xl md:text-6xl">SHOP.CO</h1>
        <ul className="md:flex md:flex-row hidden gap-5 sm:gap-10">
          <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrival</li>
          <li>Brands</li>
        </ul>
        <input
          type="search"
          placeholder="Search for products..."
          className="rounded-full p-2 sm:p-3 bg-gray-200 mt-5 sm:mt-0 hidden md:flex flex-1"
        />
        <div className="flex gap-5 mt-5 sm:mt-0">
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </nav>
    </div>
  );
};