import { useEffect } from 'react'
import { BiSearch, BiHeart, BiBasket } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { searchProducts } from '../../../redux/productSlice'

const NavbarRight = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { carts } = useSelector((state) => state.carts)

  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
    dispatch(searchProducts(e.target.value))
  }

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center justify-between border-2 border-black px-3 py-1 rounded-lg">
        <input
          onChange={(e) => handleChange(e)}
          className="outline-none bg-black bg-opacity-0"
          type="text"
          placeholder="Ürün Arama..."
          value={inputValue}
        />
        <BiSearch className="text-xl" />
      </div>
      <BiHeart className="text-xl" />
      <div onClick={() => navigate('cart')} className="relative">
        <div className="absolute flex justify-center items-center text-xs -top-2 -right-3 bg-black text-white rounded-full h-4 w-4 font-bold">
          {carts?.length}
        </div>
        <BiBasket className="text-xl" />
      </div>
    </div>
  )
}
export default NavbarRight
