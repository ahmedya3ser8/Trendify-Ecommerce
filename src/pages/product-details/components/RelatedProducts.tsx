import ProductItem from "@components/trendify/product-item/ProductItem";
import useRelatedProducts from "@hooks/useRelatedProducts";

export default function RelatedProducts({categoryId}: {categoryId: string}) {
  const { data: relatedProducts, isLoading: isRelatedLoading } = useRelatedProducts(categoryId);
  return (
    <section className="simlar-products py-10 md:py-16">
      <div className="container">
        <h2 className="text-text text-4xl font-semibold mb-4">Similar products</h2>
        {isRelatedLoading ? (
          <div className="flex items-center justify-center h-screen">
              <span className="loader"></span>
            </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {relatedProducts?.data.slice(0,4).map((product) => (
              <ProductItem key={product.id} {...product} />
            ))}
          </div>
        ) }
      </div>
    </section>
  )
}
