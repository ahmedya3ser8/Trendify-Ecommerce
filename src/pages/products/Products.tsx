import PageTitle from '@components/common/page-title/PageTitle';
import ProductItem from '@components/trendify/product-item/ProductItem';
import useCategoriesQuery from '@hooks/useCategoriesQuery';
import useProductsByCategoryQuery from '@hooks/useProductsByCategoryQuery';
import useProductsQuery from '@hooks/useProductsQuery';
import { ChevronDown } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCatId, setSelectedCatId] = useState('0');
  const [categoryName, setCategoryName] = useState('All Products');
  const {data: categories} = useCategoriesQuery();
  const {data: allProducts} = useProductsQuery();
  const {data: categoryProducts, isLoading} = useProductsByCategoryQuery(selectedCatId, {
    enabled: selectedCatId !== '0',
  })
  const data = useMemo(() => {
    return selectedCatId === '0' ? allProducts?.data : categoryProducts?.data;
  }, [selectedCatId, allProducts, categoryProducts])
  const selectedCategory = (catId: string, catName: string) => {
    setSelectedCatId(catId);
    setCategoryName(catName)
  }
  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <>
      <PageTitle title="Products" />
      <section className="products py-10 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[20%_minmax(0,1fr)] gap-5">
            <div className='sidebar md:block'>
              <h3 className="text-3xl font-medium text-text dark:text-gray-100 mb-4">Filter By</h3>
              <div className="mb-2">
                <button onClick={() => toggleMenu()} className='py-2 w-full flex items-center justify-between text-text dark:text-gray-100 font-semibold cursor-pointer'>
                  Category
                  <ChevronDown className='size-6 text-primary dark:text-gray-100' />
                </button>
                <ul className={`p-2 flex flex-col gap-4 text-gray-400 dark:text-gray-100 transition-opacity duration-300 ${!isOpen ? 'block' : 'hidden'}`}>
                  <li onClick={() => selectedCategory('0', 'All Products')} className={`cursor-pointer ${selectedCatId === '0' ? 'text-text font-medium dark:text-primary' : ''}`}>All Products</li>
                  {categories?.map((item) => (
                    <li key={item._id} onClick={() => selectedCategory(item._id, item.name)} className={`cursor-pointer ${selectedCatId === item._id ? 'text-text dark:text-primary font-medium' : ''} `}>{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <h2 className="text-3xl font-medium text-text dark:text-gray-100 mb-3">
                {categoryName}
                <span className='text-primary  text-sm'>({data?.length})</span>
              </h2>
              {isLoading ? (
                <>
                  <div className="flex items-center justify-center h-screen">
                    <span className="loader"></span>
                  </div>
                </>
              ): <>
                {data?.length ?? 0 ? <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {data?.slice(0,12).map((product) => (
                      <ProductItem key={product.id} {...product} />
                    ))}
                  </div>
                </> : <>
                  <div className='flex justify-center items-center h-full dark:text-gray-100'>No items available in this category yet! 🛒🚫</div>
                </>}
              </>}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
