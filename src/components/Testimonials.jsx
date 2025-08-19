export default function Testimonials() {
  const items = [
    { name: "Aarav", text: "Lost 8kg in 12 weeks. Trainers are super supportive!" },
    { name: "Isha", text: "Love the small-group classes and the energy here." },
    { name: "Rohan", text: "Top-notch equipment and clean space. Highly recommend." },
  ]
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">Member Love</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="card p-6">
              <p className="text-gray-300">“{t.text}”</p>
              <div className="mt-3 text-sm text-gray-400">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
