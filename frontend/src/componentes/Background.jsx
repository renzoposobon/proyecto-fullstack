import React from 'react'

const Background = () => {

  const index = {
    "margin-bottom": "50px"
  }

  return (
    <div className='fondoInicio font'>
        <div className="hero min-h-screen" style={{ backgroundImage: `url("http://mundoclubhouse.com/wp-content/uploads/2019/09/IMG_5153-1-1024x575.jpg")` }}>
          <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold tituloInicio" style={index}>¡Bienvenidos!</h1>
                <p className="mb-5 text-2xl parrafoInicio" style={index}>DISFRUTÁ DE TODA LA CATA DE VINOS DE NUESTRO RESTORANT</p>
                <a className="tracking-widest btn btn-primary bg-red-900 border-red-900 hover:border-rose-800 hover:bg-rose-600" href='#products'>Comenzar</a>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Background