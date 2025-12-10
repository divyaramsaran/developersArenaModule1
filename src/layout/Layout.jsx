import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

function Layout({ children }) {
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="rounded-full bg-indigo-500 px-2 py-1 text-xs font-bold uppercase tracking-tight text-white">
              NikeBiz
            </span>
            <span className="text-sm font-semibold text-slate-100">
              Performance Store
            </span>
          </Link>

          <nav className="flex items-center gap-5 text-sm font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-white'
                  : 'text-slate-300 hover:text-white transition-colors'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? 'text-white'
                  : 'text-slate-300 hover:text-white transition-colors'
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-white'
                  : 'text-slate-300 hover:text-white transition-colors'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-white'
                  : 'text-slate-300 hover:text-white transition-colors'
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${
                  isActive
                    ? 'border-indigo-500 bg-indigo-500 text-white'
                    : 'border-slate-600 bg-slate-900 text-slate-100 hover:border-indigo-400'
                }`
              }
              aria-label={`Cart with ${itemCount} item${itemCount === 1 ? '' : 's'}`}
            >
              <span>Cart</span>
              <span className="inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-slate-950 px-1 text-[0.65rem] text-white">
                {itemCount}
              </span>
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-10 sm:py-14">
        {children}
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} NikeBiz. All rights reserved.</p>
          <p className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
