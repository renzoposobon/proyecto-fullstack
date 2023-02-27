import { useState } from "react"
import Swal from "sweetalert2";

export const Counter = ( { stock, onAdd } ) => {

  const [count, setCount] = useState(1)

  const onAddHandler = () => {
    if ( count < stock ) {
        setCount( count => count + 1 )
    }
  }
  
  const onSubHandler = () => {
    if ( count >= 1 ) {
        setCount( count => count - 1 )
    }
  }

  const notifyTwo = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: '¡Producto agregado!'
    })
  }

  return (
    <>
      <div className="counter mb-4 font">
        <button onClick={onSubHandler} className="btn btn-sm py-1 px-4 text-sm text-white w-3 bg-black rounded-none"> - </button>
        <span className="text-xl m-2">{count}</span>
        <button onClick={onAddHandler} className="btn btn-sm py-1 px-4 text-sm text-white w-3 bg-black rounded-none"> + </button>
      </div>
      <div onClick={notifyTwo}>
        <button className="addCart h-12 btn btn-sm py-1 px-4 text-white mb-8 bg-black rounded-none active: " onClick={()=>onAdd(count)}>Agregar al Carrito</button>
      </div>
    </>
  )
}