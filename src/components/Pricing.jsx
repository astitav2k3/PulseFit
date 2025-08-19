export default function Pricing({ cta=true }) {
  const plans = [
    { name: "Basic", price: 50, period: "/mo", features: ["Gym Access", "Locker", "1 PT Session"], highlight: false },
    { name: "Pro", price: 100, period: "/mo", features: ["All Classes", "Sauna", "4 PT Sessions"], highlight: true },
    { name: "Elite", price: 150, period: "/mo", features: ["Unlimited PT", "Nutrition Plan", "Priority Support"], highlight: false },
  ]
  return (
    <section className="py-16 md:py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">Memberships</h2>
        <p className="text-gray-400 mt-2">Flexible plans designed for every fitness level.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {plans.map(p => (
            <div key={p.name} className={`card p-6 ${p.highlight ? 'ring-1 ring-brand-500' : ''}`}>
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-black">${p.price}</div>
                <div className="text-gray-400">{p.period}</div>
              </div>
              <h3 className="mt-2 font-semibold">{p.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {p.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              {cta && <a href="/contact" className="btn btn-primary w-full mt-6">Choose {p.name}</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
