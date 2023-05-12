import { useDispatch } from 'react-redux'
import { removeCart } from '../../redux/cartSlice'

const CartComp = ({ cart }) => {
  const dispatch = useDispatch()
  return (
    <div className="flex justify-between items-center">
      <div className="w-32 h-40 flex justify-center items-center overflow-hidden bg-white rounded-lg">
        <img className="h-32" src={cart?.image} alt="" />
      </div>

      <div className="w-64 text-lg font-semibold">
        <p>{cart?.title}</p>
      </div>
      <div className="w-32 font-semibold text-xl">{`${cart?.price} TL (${cart?.quantity})`}</div>
      <button
        onClick={() => dispatch(removeCart(cart))}
        className="bg-red-400 px-3 py-2 rounded-lg font-semibold"
      >
        Ürünü Sil
      </button>
    </div>
  )
}
export default CartComp
