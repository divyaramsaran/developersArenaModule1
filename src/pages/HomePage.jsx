import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

function HomePage() {
  const featured = products.slice(0, 3)

  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for speed. Designed for everyday.
          </h1>
          <p className="max-w-xl text-sm text-slate-600">
            Explore our collection of performance footwear that blends cutting-edge cushioning,
            breathable materials, and bold Nike styling—perfect for training, commuting, or
            weekend adventures.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              Shop all products
            </Link>
            <a
              href="#featured"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 font-medium text-slate-800 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              View featured
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          {featured[0] && <ProductCard product={featured[0]} />}
        </div>
      </section>

      <section id="featured" aria-label="Featured products" className="space-y-4">
        <header className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Featured products</h2>
          <Link
            to="/products"
            className="text-xs font-medium text-slate-600 hover:text-slate-900"
          >
            View all
          </Link>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
