import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../redux/categorySlice'

const Category = ({ setCategory }) => {
  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.categories)
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  return (
    <div className="basis-1/5 bg-black bg-opacity-5 p-3">
      <div className="font-bold text-lg pb-1 px-2 border-b">KATEGORİ</div>
      {categories?.map((category, i) => (
        <div
          onClick={() => setCategory(category)}
          key={i}
          className="cursor-pointer bg-black bg-opacity-0 hover:bg-opacity-10 p-2"
        >
          {category}
        </div>
      ))}
    </div>
  )
}
export default Category
