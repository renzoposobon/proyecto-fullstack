import React from 'react'

const Swap = () => {
  return (
    <div className='flex flex-center item-center justify-center m-10'>
        <label className="swap swap-flip text-9xl">
  
            <input type="checkbox" />
            
            <div className="swap-on">😈</div>
            <div className="swap-off">😇</div>
        </label>
    </div>
  )
}

export default Swap