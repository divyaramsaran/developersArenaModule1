function ContactPage() {
  return (
    <section className="max-w-md space-y-4 text-sm text-slate-700">
      <h1 className="text-2xl font-bold text-slate-900">Contact us</h1>
      <p>
        Have a question about sizing, shipping, or bulk orders? Send us a message and our
        team will get back to you.
      </p>

      <form className="space-y-3" aria-label="Contact form">
        <div className="space-y-1">
          <label htmlFor="name" className="text-xs font-semibold text-slate-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-xs font-semibold text-slate-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="message" className="text-xs font-semibold text-slate-700">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
        >
          Send message
        </button>
      </form>
    </section>
  )
}

export default ContactPage
