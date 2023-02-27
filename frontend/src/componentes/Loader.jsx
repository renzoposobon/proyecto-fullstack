import React from 'react'
import { ColorRing } from  'react-loader-spinner'

const Loader = ( { loading = false } ) => {
  return (
    loading &&
    <>    
    {/* <p>Cargando...</p> */}
    <ColorRing
      visible={true}
      height="300"
      width="300"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
    </>
  )
}
export default Loader