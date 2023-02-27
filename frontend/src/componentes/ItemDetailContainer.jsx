import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { PRODUCTS } from "../data/products"
import { useCart } from './context/CartContext'
import { Counter } from "./Counter"

const ItemDetailContainer = () => {

  const [isInCart, setIsInCart] = useState(false)

  const [item, setItem] = useState({})

  const { id } = useParams()

  const { addToCart } = useCart()

  useEffect(() => {
    getItemDetail().then( res => {
        setItem( res )
    })
  }, [ id ])
  
  const getItemDetail = () => {
    return new Promise( (resolve, reject) => {
      const item = PRODUCTS.find( p => p.id == id )
      setTimeout(() => {
          resolve( item )
      }, 500);
    })
  }

  const addHandler = () => {
    addToCart( id )
  }

  const onAdd = (quantity) => {
    const newItem = {
        ...item,
        quantity
    }
    addToCart(newItem)
    setIsInCart(true)
}

return (
  <div className="bg-white cont font">
    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
      <img
        src={item.imageSrc}
        alt={item.imageAlt}
        className="h-full object-cover object-center image-item"
      />
    </div>
    <div className="info info-small">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-5 title-item">{item.name}</h1>
      </div>
      <div className="mt-4 lg:row-span-3 lg:mt-0 div-info">
        <h2 className="sr-only">Product information</h2>
        <p className="text-2xl tracking-tight text-gray-900 mb-5 text-responsive">${item.price}</p>
        <div>
          <h3 className="sr-only">Description</h3>
          <div className="space-y-6">
            <p className="text-xl text-gray-900 mb-5 text-description">{item.description}</p>
          </div>
        </div>
        <div className="mt-10 button-small">
          {/* <h2 className="text-sm font-medium text-gray-900">Detalles</h2>
          <div className="mt-4 space-y-6">
            <p className="text-sm text-gray-600">{item.details}</p>
          </div> */}
            
          {isInCart ? (
            <div className="flex flex-col space-y-8 mt-10 mb-8 button-responsive">
              <Link to='/cart' className="btn btn-sm py-1 px-4 text-white bg-black rounded-none w-44 h-12">Ir al carrito</Link>
              <Link to='/products' className="text-black bg-white rounded-none w-40 h-9 text-center mt-buttons">Seguir comprando</Link>
            </div>)
              :
            (<>
              <Counter onAdd={onAdd} stock={item.stock} />
            </>)}
        </div>
      </div>
    </div>
  </div>
  )
}
export default ItemDetailContainer

