import { products } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

function ProductsPage() {
  return (
    <div className="space-y-4">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">All products</h1>
          <p className="text-sm text-slate-600">Browse our latest performance footwear.</p>
        </div>
      </header>

      <section aria-label="Product grid" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  )
}

export default ProductsPage
