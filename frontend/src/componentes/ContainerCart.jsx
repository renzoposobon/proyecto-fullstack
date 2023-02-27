import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from 'firebase/firestore'
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from './context/CartContext'
import { formatPrice } from './formatPrice'

const ContainerCart = () => {

  const { items, clearCart, removeItem, getTotal } = useCart()

  // const makeOrder = () => {
  //   const user = {name: "Renzo", phone: 2612054958, email: "renzop95@hotmail.com"}
  //   const order = {
  //     buyer: user,
  //     items: items,
  //   }
  //   console.log("Levantando orden:", order);
  //   saveOrder(order)
  // }

  // const saveOrder = async ( order ) => {
  //   const db = getFirestore()
  //   const orderCollection = collection(db, "orders")
  //   const { id } = await addDoc(orderCollection, order)
  //   const orden = `Nueva orden: ${id}`
  //   console.log(orden);
  // }

  // const editOrder = (id) => {
  //   const db = getFirestore()
  //   const orderDoc = doc(db, "orders", id)
  //   updateDoc(
  //     orderDoc,
  //     {buyer: {name: "Juan", phone: 12888233, email: "juan213@hotmail.com", items: items}, total: 250}
  //     )
  // }

  // const editarOrderHandler = () => {
  //   editOrder("9ElCXjPKuE5J90Fhu3DT")
  // }

  // const makeBatch = () => {
  //   const db = getFirestore()
  //   const order1 = doc(db, "orders", "4WDfTds8R0WcN56EnNYO")
  //   const order2 = doc(db, "orders", "C4r9bEzF126lAGecmc56")

  //   const batch = writeBatch(db)

  //   batch.update(order1, {total: 12})
  //   batch.update(order2, {total: 1000000})

  //   batch.commit()
  // }

  return (
    <div>
        <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Nombre</th>
          <th scope="col">Precio unitario</th>
          <th scope="col quantity">Cantidad</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
      {items.map( i => <tr key={i.id}>
        <img src={i.imageSrc} alt={i.imageAlt} className="h-full w-full object-cover object-center imageCart" />
        <td className="cart-table tableResponsive ">{i.name}</td>
        <td className="cart-table tableResponsive">${formatPrice(i.price)}</td>
        <td className="cart-table tableResponsive quantity">{i.quantity}</td>
        <td className="cart-table tableResponsive subPrice">${formatPrice(i.price * i.quantity)}</td>
        <td className="hover:bg-red-400 tableResponsive">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer" onClick={() => removeItem(i.id)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </td>
      </tr>)}
      <tr>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col" id="priceTotal">${formatPrice(getTotal())}</th>
        </tr>
      </tbody>
      </table>
      <div className="buttons">
        {/* <button className='btn mt-8 bg-emerald-500 rounded-none hover:bg-emerald-300 hover:text-black' onClick={editarOrderHandler}>EDITAR ORDEN</button>
        <button className='btn mt-8 bg-emerald-500 rounded-none hover:bg-emerald-300 hover:text-black' onClick={makeBatch}>BATCH</button> */}
        <Link to='/checkout'>
          <button className="btn mt-8 bg-emerald-500 rounded-none hover:bg-emerald-300 hover:text-black finishCart">Finalizar compra</button>        
        </Link>
        <div>
          <button className="btn mt-8 bg-black rounded-none clear-cart" onClick={clearCart}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer icon-clear">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            Vaciar carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContainerCart