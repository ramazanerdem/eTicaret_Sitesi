import { useNavigate } from 'react-router-dom'

const Product = ({ product }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className="flex flex-col justify-between gap-5 border-2 p-4 text-center bg-white"
    >
      <div className="flex justify-center items-center h-60 overflow-hidden">
        <img
          className="h-60 object-contain hover:scale-90 transition-all duration-300"
          src={product?.image}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between h-ful">
        <p>{product?.title}</p>
        <div className="font-bold text-xl mt-2">
          {product?.price} <span className="text-sm">TL</span>
        </div>
      </div>
    </div>
  )
}
export default Product
