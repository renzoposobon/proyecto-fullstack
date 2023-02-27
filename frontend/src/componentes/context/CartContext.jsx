import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  items: [],
  addToCart: () => {},
  clearCart: () => {},
  removeItem: () => {},
  cartLenght: () => {},
  // isInCart: () => {},
  // getSubtotal: () => {},
  getTotal: () => {}
})

const useCart = () => {
  return useContext( CartContext )
}

const CartContextProvider = ( { children } ) => {

  const [items, setItems] = useState( [] )

  const addToCart = ( item ) => {
    setItems( items => items.concat(item) )
  }

  // Remover un item del carrito
  const removeItem = (id) => {
    setItems(items.filter((item) => (item.id !== id)))
  }

  // Obtener número total de items
  const cartLenght = () => {
    let quantity = 0
    items.forEach((item) => {
      quantity = quantity + item.quantity
    })
    return quantity
  }

  // Vaciar carrito
  const clearCart = () => {
    setItems( [] )
  }

  // Checkear si el item ya se encuentra en el carrito
    const isInCart = (id) => {
        return items.some((item) => (item.id == id))
    }

  // Obtener el total
  const getTotal = () => {
    let total = 0
    items.forEach((item) => {
        total = total + (item.quantity * item.price)
    })
    return Number(total)
  }

  const context = {
    items: items,
    addToCart: addToCart,
    clearCart: clearCart,
    removeItem: removeItem,
    cartLenght: cartLenght,
    isInCart: isInCart,
    getTotal: getTotal
  }

  // Agregar un item al carrito
    // const addItem = (item, quantity) => {
    //     if (isInCart(item.id)) {
    //         let index = cartItems.findIndex((index) => (index.id == item.id))
    //         let copyCart = [...cartItems]
    //         copyCart[index].quantity += quantity
    //         setCartItems(copyCart)
    //     } else {
    //         const itemToAdd = { ...item, quantity }
    //         setCartItems([...cartItems, itemToAdd])
    //     }
    // }

  return (
    <CartContext.Provider value={context}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider, useCart }