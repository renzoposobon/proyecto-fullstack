import React from 'react'
import Background from './Background'
import FrecuentQuestions from './FrecuentQuestions'
import ItemListContainer from './ItemListContainer'

export const Home = () => {
  return (
    <div className='font'>
        <Background />
        <ItemListContainer />
        <FrecuentQuestions />
    </div>
  )
}
