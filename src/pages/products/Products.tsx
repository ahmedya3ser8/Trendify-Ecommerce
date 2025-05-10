import PageTitle from '@components/common/page-title/PageTitle';
import ProductItem from '@components/trendify/product-item/ProductItem';
import useCategoriesQuery from '@hooks/useCategoriesQuery';
import useProductsByCategoryQuery from '@hooks/useProductsByCategoryQuery';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCatId, setSelectedCatId] = useState('0');
  const [categoryName, setCategoryName] = useState('All Products');
  const {data: categories} = useCategoriesQuery();
  const {data: allProducts, isLoading} = useProductsByCategoryQuery(currentPage, selectedCatId)
  const selectedCategory = (catId: string, catName: string) => {
    setSelectedCatId(catId);
    setCategoryName(catName);
    setCurrentPage(1);
  }
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const totalPages = allProducts?.metadata.numberOfPages ?? 1;
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
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
                <span className='text-primary  text-sm'>({allProducts?.results})</span>
              </h2>
              {isLoading ? (
                <>
                  <div className="flex items-center justify-center h-screen">
                    <span className="loader"></span>
                  </div>
                </>
              ): <>
                {allProducts?.data?.length ?? 0 ? <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {allProducts?.data?.slice(0,12).map((product) => (
                      <ProductItem key={product.id} {...product} />
                    ))}
                  </div>
                  {/* pagination */}
                    <div className="flex justify-center items-center mt-6 space-x-2">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="px-3 py-1 border rounded text-text bg-gray-200 hover:bg-gray-300"
                        disabled={currentPage === 1}
                      >
                        Prev
                      </button>
                      {[...Array(totalPages)].map((_, index) => {
                        const pageNum = index + 1;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`px-3 py-1 border rounded ${
                              pageNum === currentPage ? 'bg-primary text-white' : ''
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="px-3 py-1 border rounded bg-gray-200 text-text hover:bg-gray-300"
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </button>
                    </div>
                  {/* pagination */}
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
