import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getCartTotal } from '../redux/cartSlice'
import { useEffect } from 'react'
import CartComp from '../components/carts/CartComp'

const Cart = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts)
  console.log(carts, totalAmount, itemCount)

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch, carts])
  return (
    <div>
      {carts?.length > 0 ? (
        <div className="space-y-3 bg-black bg-opacity-5 p-5">
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="text-end text-xl">
            Toplam Tutar : <span className="font-bold">{totalAmount} TL</span>
          </div>
        </div>
      ) : (
        <div>Sepet Boş...</div>
      )}
    </div>
  )
}
export default Cart
