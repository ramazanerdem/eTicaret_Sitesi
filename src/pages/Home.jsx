import { useState } from 'react'
import Category from '../components/navbar/home/Category'
import Products from '../components/navbar/home/Products'
import SliderComp from '../components/navbar/home/SliderComp'
import Sorting from '../components/navbar/home/Sorting'

const Home = () => {
  const [sort, setSort] = useState('')
  const [category, setCategory] = useState('')
  return (
    <div>
      <SliderComp />
      <Sorting setSort={setSort} />
      <div className="flex gap-10">
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  )
}
export default Home
