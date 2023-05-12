import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity(quantity + 1)
  }
  const decrement = () => {
    quantity > 0 && setQuantity(quantity - 1)
  }
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    )
  }
  return (
    <>
      <div className="flex justify-between gap-5">
        <div className="basis-2/3 overflow-hidden bg-white flex justify-center items-center">
          <img
            className="mx-auto h-80 object-contain hover:scale-90 transition-all duration-300"
            src={productDetail?.image}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between basis-1/3 border-2 h-96 p-7 bg-black bg-opacity-10">
          <p className="font-semibold text-2xl">{productDetail?.title}</p>
          <div className="flex items-center gap-3 text-lg">
            <div className="flex items-center gap-1">
              <span>
                <AiFillStar className="text-yellow-500" />
              </span>
              <span className="font-semibold">
                {productDetail?.rating?.rate}
              </span>
            </div>
            <span>|</span>
            <span className="text-sm">
              {productDetail?.rating?.count} Değerlendirme
            </span>
          </div>
          <div className="">
            <p className="text-lg">Fiyat</p>
            <p className="font-semibold text-3xl">{productDetail?.price} TL</p>
          </div>
          <div className="flex items-center gap-1 my-2">
            <button onClick={decrement} className="text-xl cursor-pointer">
              -
            </button>
            <input
              readOnly
              className="w-7 text-center rounded-lg bg-black bg-opacity-0 text-2xl outline-none"
              type="text"
              value={quantity}
            />
            <button onClick={increment} className="text-xl cursor-pointer">
              +
            </button>
          </div>
          <button
            onClick={addBasket}
            className="bg-white hover:bg-opacity-80 rounded-md py-1 text-center"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
      <div className="bg-black bg-opacity-10 mt-5 p-7">
        <p className="font-bold text-xl mb-5">Açıklama</p>
        <p>{productDetail?.description}</p>
      </div>
    </>
  )
}
export default DetailComp
