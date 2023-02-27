import React from 'react'
import { useState } from 'react'
import Modal from './Modal'

const ModalTwo = () => {

const [button, setbutton] = useState(true)

const falso = () => {
    setbutton(false)
}

const verdedero = ( ) => {
    setbutton(true)
}

  return (
    <div>
        {
        button ?
            <button onClick={falso} className="btn text-xl bg-red-700 text-white">Verdadero</button>
            :
            <>
            {/* <button onClick={falso} className="btn text-xl bg-red-700 text-white">Verdadero</button>
            <Modal /> */}
              <button onClick={verdedero} className="btn text-xl bg-red-700 text-white">Falso</button>
            </>
        }
        {/* <label className="swap swap-flip text-9xl">
          <input type="checkbox" />
          {
            button ?
              <div className="swap-on">😈</div>
            :
              <div className="swap-off">😇</div>
          }
        </label> */}
    </div>
  )
}

export default ModalTwo