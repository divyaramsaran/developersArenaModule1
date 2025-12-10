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
      className="relative flex h-[400px] max-w-xs flex-col overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-200 via-indigo-300 to-slate-700 shadow-lg"
      aria-label={product.name}
    >
      <button
        type="button"
        aria-label="Add to wishlist"
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow hover:bg-rose-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
      >
        <span className="text-lg">♥</span>
      </button>

      <div className="pointer-events-none absolute -left-4 -top-10 h-40 w-64 rotate-12 select-none">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-6"
        />
      </div>

      <div className="mt-auto flex h-1/2 flex-col rounded-t-2xl bg-white/95 p-4 pb-5">
        <header className="mb-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {product.brand}
          </p>
          <h2 className="text-lg font-bold text-slate-800">{product.name}</h2>
        </header>

        <div className="mb-3 flex flex-wrap gap-2 text-xs">
          {product.size && (
            <span className="rounded-full border border-slate-300 px-2 py-1 text-[0.7rem] font-medium text-slate-700">
              {product.size}
            </span>
          )}
          {product.color && (
            <span className="rounded-full border border-slate-300 px-2 py-1 text-[0.7rem] font-medium text-slate-700">
              {product.color}
            </span>
          )}
        </div>

        <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-slate-600">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3">
          <div>
            <span className="block text-[0.65rem] uppercase tracking-wide text-slate-500">
              Price
            </span>
            <span className="text-lg font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <div className="flex flex-1 justify-end gap-2">
            <Link
              to={`/products/${product.id}`}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-800 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              View details
            </Link>
            <button
              type="button"
              onClick={handleAddToCart}
              className="inline-flex flex-1 items-center justify-center rounded-lg bg-indigo-700 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
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
