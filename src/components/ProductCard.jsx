import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    })
  }

  return (
    <article
      className="group relative flex h-[380px] w-full max-w-xs flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 shadow-xl ring-1 ring-slate-800/60"
      aria-label={product.name}
    >
      <button
        type="button"
        aria-label="Add to wishlist"
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow hover:bg-rose-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
      >
        <span className="text-lg">♥</span>
      </button>

      <div className="pointer-events-none absolute -left-6 -top-12 h-44 w-72 rotate-12 select-none transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)]"
        />
      </div>

      <div className="mt-auto flex h-1/2 flex-col rounded-t-3xl bg-slate-900/95 p-4 pb-5">
        <header className="mb-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
            {product.brand}
          </p>
          <h2 className="text-lg font-bold text-slate-50">{product.name}</h2>
        </header>

        <div className="mb-3 flex flex-wrap gap-2 text-xs">
          {product.size && (
            <span className="rounded-full border border-slate-700/70 bg-slate-900/80 px-2 py-1 text-[0.7rem] font-medium text-slate-100">
              {product.size}
            </span>
          )}
          {product.color && (
            <span className="rounded-full border border-slate-700/70 bg-slate-900/80 px-2 py-1 text-[0.7rem] font-medium text-slate-100">
              {product.color}
            </span>
          )}
        </div>

        <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-slate-300/90">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3">
          <div>
            <span className="block text-[0.65rem] uppercase tracking-wide text-slate-400">
              Price
            </span>
            <span className="text-lg font-bold text-slate-50">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <div className="flex flex-1 justify-end gap-2">
            <Link
              to={`/products/${product.id}`}
              className="inline-flex items-center justify-center rounded-lg border border-slate-700/70 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-100 transition hover:border-indigo-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              View details
            </Link>
            <button
              type="button"
              onClick={handleAddToCart}
              className="inline-flex flex-1 items-center justify-center rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
