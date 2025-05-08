import Button from '@components/common/button/Button'
import useProductsByCategoryQuery from '@hooks/useProductsByCategoryQuery'
import { useState } from 'react'
import MainTitle from '../main-title/MainTitle'
import ProductItem from '../product-item/ProductItem'

const categoriesName = [
  {name: "All", id: ""},
  {name: "Men's", id: "6439d5b90049ad0b52b90048"},
  {name: "Women's", id: "6439d58a0049ad0b52b9003f"},
  {name: "Electronics", id: "6439d2d167d9aa4ca970649f"}
]

export default function SpecialProducts() {
  const [selectedCatId, setSelectedCatId] = useState('');
  const {data, isLoading} = useProductsByCategoryQuery(
    selectedCatId === '' ? '6439d58a0049ad0b52b9003f' : selectedCatId
  )
  return (
    <section className="secial-products py-10 md:py-16">
      <div className="container">
        <MainTitle title='Products' description={<>Best Selling Product</>} />
        <ul className="flex gap-2 justify-center bg-[#eee] dark:bg-[#1e1e1e] w-fit my-5 mx-auto p-2 rounded-3xl">
          {categoriesName.map((cat, index) => (
            <li onClick={() => setSelectedCatId(cat.id)} key={index} className={`rounded-3xl py-[5px] px-3 md:px-5 text-sm md:text-base cursor-pointer dark:text-gray-100 ${cat.id == selectedCatId ? 'bg-primary text-white' : '' }`}>{cat.name}</li>
          ))}
        </ul>
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <span className="loader"></span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
              {data?.data.slice(0,4).map((product) => (
                <ProductItem key={product.id} {...product} />
              ))}
            </div>
            <Button />
          </>
        )}
      </div>
    </section>
  )
}
