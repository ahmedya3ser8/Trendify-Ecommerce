import useProducts from '@hooks/useProducts';
import ProductItem from '@components/trendify/product-item/ProductItem';
import { ChevronDown } from 'lucide-react';
import PageTitle from '@components/common/page-title/PageTitle';

export default function Products() {
  const {categories, selectedCatId, categoryName, productItems, isOpen, data, loading, selectedCategoryId, toggleMenu} = useProducts()
  return (
    <>
      <PageTitle title="Products" />
      <section className="products py-10 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[20%_minmax(0,1fr)] gap-5">
            <div className='sidebar md:block'>
              <h3 className="text-3xl font-medium text-text mb-4">Filter By</h3>
              <div className="mb-2">
                <button onClick={() => toggleMenu()} className='py-2 w-full flex items-center justify-between text-text font-semibold cursor-pointer'>
                  Category
                  <ChevronDown className='size-6 text-primary' />
                </button>
                <ul className={`p-2 flex flex-col gap-4 text-gray-400 transition-opacity duration-300 ${!isOpen ? 'block' : 'hidden'}`}>
                  <li onClick={() => selectedCategoryId('0', 'All Products')} className={`cursor-pointer ${selectedCatId === '0' ? 'text-text font-medium' : ''}`}>All Products</li>
                  {categories.map((item) => (
                    <li key={item._id} onClick={() => selectedCategoryId(item._id, item.name)} className={`cursor-pointer ${selectedCatId === item._id ? 'text-text font-medium' : ''} `}>{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <h2 className="text-3xl font-medium text-text mb-3">
                {categoryName} 
                <span className='text-primary text-sm'>({productItems})</span>
              </h2>
              {loading === 'pending' ? (
                <>
                  <div className="flex items-center justify-center h-screen">
                    <span className="loader"></span>
                  </div>
                </>
              ): <>
                {data.length > 0 ? <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {data.slice(0,12).map((product) => (
                      <ProductItem key={product.id} {...product} />
                    ))}
                  </div>
                </> : <>
                  <div className='flex justify-center items-center h-full'>No items available in this category yet! 🛒🚫</div>
                </>}
              </>}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
