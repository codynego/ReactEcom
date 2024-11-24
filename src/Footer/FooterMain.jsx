import React from 'react'

export const FooterMain = () => {
  return (
    <div className="mt-52 md:mt-36 lg:mt-24 custom-width md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 ">
        <div className='flex flex-col gap-4'>
            <h1 className='text-5xl'>SHOP.CO</h1>
            <p>we have clothes that suits your style and which you're happy to wear. From women to men</p>
            <div className='flex gap-2'>
            <i className="fa-brands fa-twitter  bg-white p-2 border-[1px] border-gray-600 rounded-full hover:bg-black hover:text-white duration-500"></i>
            <i className="fa-brands fa-facebook  bg-white p-2 border-[1px] border-gray-600 rounded-full hover:bg-black hover:text-white duration-500"></i>
            <i className="fa-brands fa-instagram  bg-white p-2 border-[1px] border-gray-600 rounded-full hover:bg-black hover:text-white duration-500"></i>
            <i className="fa-brands fa-github  bg-white p-2 border-[1px] border-gray-600 rounded-full hover:bg-black hover:text-white duration-500"></i>
            </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 md:col-span-2 gap-10'>
            <div className='flex flex-col gap-3 text-gray-600'>
                <h2 className='font-semibold text-lg'>COMPANY</h2>
                <p>About</p>
                <p>Features</p>
                <p>Work</p>
                <p>Career</p>
            </div>
            <div className='flex flex-col gap-3 text-gray-600'>
                <h2 className='font-semibold text-lg'>HELP</h2>
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className='flex flex-col gap-3 text-gray-600'>
                <h2 className='font-semibold text-lg'>FAQ</h2>
                <p>Account</p>
                <p>Manage Deliveries</p>
                <p>Orders</p>
                <p>Payments</p>
            </div>
            <div className='flex flex-col gap-3 text-gray-600'>
                <h2 className='font-semibold text-lg'>RESOURCES</h2>
                <p>Free eBooks</p>
                <p>Development Tutorial</p>
                <p>How to - Blog</p>
                <p>Youtube Playlist</p>
            </div>
        </div>
    </div>
  )
}
