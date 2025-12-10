import { useParams } from 'react-router-dom'
import { products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

function ProductDetailPage() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return <p className="text-sm text-slate-600">Product not found.</p>
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    })
  }

  return (
    <article className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-start">
      <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-200 via-indigo-300 to-slate-700 p-8 shadow-lg">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-64 w-full max-w-md object-contain drop-shadow-xl"
        />
      </div>

      <div className="space-y-4">
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {product.brand}
          </p>
          <h1 className="text-2xl font-bold text-slate-900">{product.name}</h1>
          <p className="text-sm text-slate-600">{product.category}</p>
        </header>

        <p className="text-sm leading-relaxed text-slate-700">{product.longDescription}</p>

        <dl className="grid grid-cols-2 gap-3 text-xs text-slate-600">
          {product.size && (
            <div>
              <dt className="font-semibold text-slate-700">Size</dt>
              <dd>{product.size}</dd>
            </div>
          )}
          {product.color && (
            <div>
              <dt className="font-semibold text-slate-700">Color</dt>
              <dd>{product.color}</dd>
            </div>
          )}
          {product.rating && (
            <div>
              <dt className="font-semibold text-slate-700">Rating</dt>
              <dd>{product.rating.toFixed(1)} / 5</dd>
            </div>
          )}
        </dl>

        <div className="flex items-end justify-between">
          <div>
            <span className="block text-[0.65rem] uppercase tracking-wide text-slate-500">
              Price
            </span>
            <span className="text-2xl font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductDetailPage
