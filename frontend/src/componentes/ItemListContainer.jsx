import { useEffect, useState } from "react"
import { PRODUCTS } from "../data/products"
import Loader from "./Loader"
import WineCard from "./WineCard"
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ReactPaginate from 'react-paginate';


const ItemListContainer = () => {

  const [items, setItems] = useState([])

  useEffect( () => {

    getProducts()
        .then( res => {
            setItems( res )
        })
        .catch( err => { console.log(err) })
  }, [])

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
          resolve( PRODUCTS )
        }, 1000);
    })
  }


  ////////////

  const [item, setItem] = useState([])

  // useEffect(() => {
  //   getItems()
  // }, [])


  // const getItems = async () => {
  //   const db = getFirestore()
  //   const itemCollection = collection(db, 'items')
  //   const snapshot = await getDocs(itemCollection)
  //   setItem(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
  // }

  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(3);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const itemsPerPage = screenWidth < 600 ? 5 : 9;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = items.slice(startIndex, endIndex);

  useEffect(() => {
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [items, itemsPerPage]);
  
  useEffect(() => {
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [items, itemsPerPage, screenWidth]);

  return (
    <div className="item-list-container" id="products">

        <div className="space-product-title">
          <h1 className="product-title">
            Nuestros Productos
          </h1>
        </div>

        <div className="products">
          <Loader loading={ items.length === 0 } />
          { itemsToShow.map(i => <WineCard key={i.id} {...i}/> ) } 
        </div>

        <ReactPaginate
          pageCount={pageCount}
          forcePage={currentPage}
          onPageChange={({ selected }) => setCurrentPage(selected)}
          containerClassName="pagination"
          previousLabel="<<"
          nextLabel=">>"
          renderOnZeroPageCount={null}
          breakLabel="..."
          pageRangeDisplayed={5}
        />
        
    </div>
  )
}
export default ItemListContainer