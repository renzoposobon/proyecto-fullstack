import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from "./context/CartContext"

const CartWidget  = () => {

  const {cartLenght} = useCart()

  return (
    <div>
      <div className="ml-4 flow-root lg:ml-6">
        <Link to='/cart'>
          <a href="#" className="group -m-2 flex items-center p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          { cartLenght() === 0 ?
            <span className="ml-1 text-m font-semibold text-gray-600">0</span>
          :
            <span className="ml-1 text-m font-semibold text-gray-600 span-responsive">{cartLenght()}</span>
          }
          </span>
          <span className="sr-only"></span>
          </a>
        </Link> 
      </div>
    </div>
  )
}

export default CartWidget