import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProduct, getProducts } from '../../../redux/productSlice'
import Loading from '../../Loading'
import Product from './Product'
import ReactPaginate from 'react-paginate'

const Products = ({ category, sort }) => {
  const dispatch = useDispatch()
  const { filteredProduct, productsStatus } = useSelector(
    (state) => state.products
  )
  const products = filteredProduct

  const [itemOffset, setItemOffset] = useState(0)

  const itemsPerPage = 6

  const endOffset = itemOffset + itemsPerPage
  const currentItems = [...products]
    ?.sort((a, b) =>
      sort == 'inc' ? a.price - b.price : sort == 'dec' ? b.price - a.price : ''
    )
    ?.slice(itemOffset, endOffset)

  const pageCount = Math.ceil(products.length / itemsPerPage)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length
    setItemOffset(newOffset)
  }

  useEffect(() => {
    category ? dispatch(getCategoryProduct(category)) : dispatch(getProducts())
  }, [dispatch, category])
  return (
    <div className="basis-4/5 flex flex-col items-center">
      {productsStatus == 'LOADING' ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-3 gap-10">
            {currentItems?.map((product, i) => (
              <Product key={i} product={product} />
            ))}
          </div>
          <ReactPaginate
            className="flex gap-5 my-5 font-bold text-xl"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  )
}
export default Products
