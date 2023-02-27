import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'

const ItemFirebase = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    // getItemsData()
    getItems()
  }, [])
  
  // const getItemsData = () => {
  //   const db = getFirestore()
  //   const docRef = doc(db, 'items', 'JxWMQZYtdAq68AnOa1Rn')
  //   getDoc(docRef).then(snapshot => {
  //     setItems({id: snapshot.id, ...snapshot.data()});
  //   })
  // }

  const getItems = async () => {
    const db = getFirestore()
    const itemCollection = collection(db, 'items')
    const snapshot = await getDocs(itemCollection)
    setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
  }

  return (
    <div className='text-3xl m-10'>
        <h1>
           Listado de productos 
        </h1>
        <div className='flex flex-row'>
          { items.map( i =>
            <div  key={i.id} className="flex justify-center m-14">
              <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src={i.image} alt="imageWine" className='imageWine' /></figure>
                <div className="card-body text-center">
                    <h3 className="card-title-second font-bold text-2xl">{i.title}</h3>
                    <p className='text-card text-lg mt-5'>${i.price}</p>
                    <p className='text-card text-lg'>Stock: {i.stock}</p>
                    <div className="card-actions justify-end">
                        <button className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-red-900 py-3 px-8 text-base font-medium text-white hover:bg-red-200 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Ver detalles</button>
                    </div>
                </div>
              </div> 
            </div> )
          }
        </div>
    </div>
  )
}

export default ItemFirebase