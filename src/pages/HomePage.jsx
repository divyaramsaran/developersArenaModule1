import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

function HomePage() {
  const featured = products.slice(0, 3)

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="grid gap-10 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-slate-900 px-6 py-10 shadow-xl sm:px-10 sm:py-14 md:grid-cols-[3fr,2fr] md:items-center">
        <div className="space-y-5 text-slate-50">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100">
            New season drop
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built for speed.
            <br />
            Designed for everyday.
          </h1>
          <p className="max-w-xl text-sm text-indigo-100/90">
            Explore performance footwear that blends responsive cushioning, breathable materials,
            and bold Nike styling—perfect for training, commuting, or weekend adventures.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              Shop all products
            </Link>
            <a
              href="#featured"
              className="inline-flex items-center justify-center rounded-full border border-indigo-200/80 bg-indigo-500/20 px-6 py-2.5 font-medium text-indigo-50 backdrop-blur-sm transition hover:bg-indigo-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              View featured
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          {featured[0] && (
            <div className="scale-95 transform drop-shadow-2xl md:scale-100">
              <ProductCard product={featured[0]} />
            </div>
          )}
        </div>
      </section>

      {/* Featured grid */}
      <section
        id="featured"
        aria-label="Featured products"
        className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg sm:p-8"
      >
        <header className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-50">Featured products</h2>
            <p className="text-xs text-slate-400">
              Hand-picked styles to showcase your new Nike card design.
            </p>
          </div>
          <Link
            to="/products"
            className="text-xs font-medium text-indigo-300 hover:text-indigo-100"
          >
            View all products
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
