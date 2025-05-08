import Button from "@components/common/button/Button";
import MainTitle from "@components/trendify/main-title/MainTitle";
import ProductItem from "@components/trendify/product-item/ProductItem";
import useProductsQuery from "@hooks/useProductsQuery";

export default function TopProducts() {
  const {data, isLoading} = useProductsQuery();
  return (
    <section className="top-products py-10 md:py-16">
      <div className="container">
        <MainTitle title="Top Products" description={<>Top Picks for You!"</>} />
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <span className="loader"></span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
              {data?.data.slice(0,8).map((product) => (
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
