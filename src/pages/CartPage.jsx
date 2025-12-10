import { useCart } from '../context/CartContext.jsx'

function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart()

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (items.length === 0) {
    return <p className="text-sm text-slate-600">Your cart is empty.</p>
  }

  return (
    <div className="grid gap-8 md:grid-cols-[3fr,2fr]">
      <section aria-label="Cart items" className="space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Shopping cart</h1>

        <ul className="divide-y divide-slate-200 rounded-lg bg-white shadow-sm">
          {items.map((item) => (
            <li key={item.id} className="flex gap-4 p-4">
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="h-20 w-20 flex-none rounded-md bg-slate-100 object-contain"
                />
              )}
              <div className="flex flex-1 flex-col justify-between gap-2 text-sm">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h2 className="font-semibold text-slate-900">{item.name}</h2>
                    <p className="text-xs text-slate-600">Performance footwear</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs font-medium text-slate-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-2 text-xs">
                    <label htmlFor={`qty-${item.id}`} className="text-slate-600">
                      Qty
                    </label>
                    <input
                      id={`qty-${item.id}`}
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Math.max(1, Number(e.target.value) || 1))
                      }
                      className="w-16 rounded border border-slate-300 px-2 py-1 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                    />
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={clearCart}
          className="text-xs font-medium text-slate-500 hover:text-red-600"
        >
          Clear cart
        </button>
      </section>

      <aside
        aria-label="Order summary"
        className="space-y-4 rounded-lg bg-white p-4 shadow-sm text-sm text-slate-700"
      >
        <h2 className="text-base font-semibold text-slate-900">Order summary</h2>
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <p className="text-xs text-slate-500">
          Taxes and shipping are calculated at checkout. This is a demo checkout for your
          business website.
        </p>
        <button
          type="button"
          className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
        >
          Proceed to checkout
        </button>
      </aside>
    </div>
  )
}

export default CartPage
