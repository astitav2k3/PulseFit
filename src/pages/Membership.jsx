import Pricing from '../components/Pricing'

export default function Membership() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">Membership Plans</h1>
        <p className="text-gray-400 mt-2">Pick a plan and start your journey today.</p>
      </section>
      <Pricing />
    </div>
  )
}
