import { addDoc, collection, getFirestore} from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CheckoutList from './CheckoutList'
import { useCart } from './context/CartContext'

const Checkout = () => {

  const { items } = useCart()

  const [button, setbutton] = useState(true)

  const [buyer, setBuyer] = useState({
    name: "",
    surname: "",
    telephone: "",
    email: "",
})

const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im

const handleSubmitChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value })
}

  const makeOrder = () => {

    const order = {
      buyer,
      items: items,
    }
    saveOrder(order)
    setbutton(false)
  }

  const saveOrder = async ( order ) => {
    const db = getFirestore()
    const orderCollection = collection(db, "orders")
    const { id } = await addDoc(orderCollection, order)
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: <strong>¡COMPRA EXITOSA!</strong>,
      html: <i>Orden de compra: {id}</i>,
      icon: 'success'
    })
  }

  return (
    <div className='check font h-auto flex justify-center'>
        <div className='box-1 w-1/2 ml-14'>
            <h1 className="text-3xl font-bold m-10 max-w-28">Checkout</h1>
            <form className='w-5/6 mb-14 h-auto form' action=''>
              <div className='input-and-label'>
                <label className='label'>Nombre</label>
                <input id="name" type="text" name="name" placeholder="Nombre" onChange={handleSubmitChange} className="input input-bordered w-full max-w-xs ml-5"/>
              </div>
              <div className='input-and-label'>
                <label className='label'>Apellido</label>
                <input id="surname" type="text" name="surname" placeholder="Apellido" onChange={handleSubmitChange} className="input input-bordered w-full max-w-xs ml-5" />
              </div>
              <div className='input-and-label'>
                <label className='label'>Teléfono</label>
                <input id="telephone" type="tel" name="telephone" placeholder="Teléfono" onChange={handleSubmitChange} className="input input-bordered w-full max-w-xs ml-5" pattern='[0-9]{7,9}' maxLength={9} />
              </div>
              <div className='input-and-label'>
                <label className='label'>Email</label>
                <input id="email" type="email" name="email" placeholder="Email" onChange={handleSubmitChange} className="input input-bordered w-full max-w-xs ml-5" />
              </div>

              <div className="form-control ml-10 mt-5">
                  <div className="input-group">
                      <select className="select select-bordered">
                          <option value="0" disabled selected>--Tipo de envío--</option>
                          <option value="1">Retiro en local</option>
                          <option value="2">Envío a domocilio</option>
                      </select>
                  </div>
              </div>
              {
                button ?
                  <>
                  {buyer.name && buyer.surname && buyer.telephone && buyer.email && telephoneRegex.test(buyer.telephone) && emailRegex.test(buyer.email)
                    ?
                    <Link to='/'>
                      <button className="btn btn-block bg-black ml-10 mt-10 button-pay" onClick={makeOrder}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="mr-2 mt-2" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                          <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                          <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                          <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                        </svg>   
                        <p>
                          PAGAR
                        </p> 
                      </button>
                    </Link>
                    :

                    <button className="btn btn-block bg-black ml-10 mt-10 button-pay" disabled>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="mr-2 mt-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                      </svg>
                      <p>
                        PAGAR
                      </p> 
                    </button>
                  }
                  <Link to='/cart'>
                    <button className="btn-block bg-white ml-10 mt-5 flex flex-row justify-center items-center hover:bg-gray-500 h-12 hover:text-white hover:rounded button-pay">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.021 11.9 3.453 8.62a.719.719 0 0 1 0-1.238L8.021 4.1a.716.716 0 0 1 1.079.619V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
                        <path d="M5.232 4.293a.5.5 0 0 1-.106.7L1.114 7.945a.5.5 0 0 1-.042.028.147.147 0 0 0 0 .252.503.503 0 0 1 .042.028l4.012 2.954a.5.5 0 1 1-.593.805L.539 9.073a1.147 1.147 0 0 1 0-1.946l3.994-2.94a.5.5 0 0 1 .699.106z"/>
                      </svg>
                      <p className='ml-2'>Volver</p>
                    </button>
                    </Link>
                  </>
                  :
                  <></>
              }
          </form>
        </div>
        
        <CheckoutList />
    </div>
  )
}

export default Checkout