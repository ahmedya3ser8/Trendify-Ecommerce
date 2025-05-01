import Button from '@components/common/button/Button'
import MainTitle from '../main-title/MainTitle'
import ProductItem from '../product-item/ProductItem'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import actGetProductsByCategoryId from '@store/products/act/actGetProductsByCategoryId'
import { useEffect, useState } from 'react'

const categoriesName = [
  {name: "All", id: ""},
  {name: "Men's", id: "6439d5b90049ad0b52b90048"},
  {name: "Women's", id: "6439d58a0049ad0b52b9003f"},
  {name: "Electronics", id: "6439d2d167d9aa4ca970649f"}
]

export default function SpecialProducts() {
  const [selectedCatId, setSelectedCatId] = useState('');
  const dispatch = useAppDispatch();
  const {loading, data} = useAppSelector(state => state.products);
  function selectedCategoryId(id: string) {
    setSelectedCatId(id);
    if (id == '') {
      dispatch(actGetProductsByCategoryId('6439d58a0049ad0b52b9003f')).unwrap();
    } else {
      dispatch(actGetProductsByCategoryId(id)).unwrap();
    }
  }
  useEffect(() => {
    dispatch(actGetProductsByCategoryId('6439d58a0049ad0b52b9003f')).unwrap();
  }, [dispatch])
  return (
    <section className="secial-products py-10 md:py-16">
      <div className="container">
        <MainTitle title='Products' description={<>Best Selling Product</>} />
        <ul className="flex gap-2 justify-center bg-[#eee] w-fit my-5 mx-auto p-2 rounded-3xl">
          {categoriesName.map((cat, index) => (
            <li onClick={() => selectedCategoryId(cat.id)} key={index} className={`rounded-3xl py-[5px] px-3 md:px-5 text-sm md:text-base cursor-pointer ${cat.id == selectedCatId ? 'bg-primary text-white' : '' }`}>{cat.name}</li>
          ))}
        </ul>
        {loading === 'pending' ? (
          <div className="flex items-center justify-center h-screen">
            <span className="loader"></span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
              {data.slice(0,4).map((product) => (
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
