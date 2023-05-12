import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailProduct } from '../redux/productSlice'
import DetailComp from '../components/details/DetailComp'
import Loading from '../components/Loading'

const Details = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  )
  // console.log(productDetail)

  useEffect(() => {
    dispatch(getDetailProduct(id))
  }, [dispatch, id])

  return (
    <div className="p-10 bg-black bg-opacity-5">
      {productDetailStatus == 'LOADING' ? (
        <Loading />
      ) : (
        <DetailComp productDetail={productDetail} />
      )}
    </div>
  )
}
export default Details
