export default function Features() {
  const items = [
    { title: "Personal Coaching", text: "1:1 guidance and form correction from certified trainers." },
    { title: "Small Group Classes", text: "Strength, HIIT, Mobility, and Conditioning sessions daily." },
    { title: "Goal Tracking", text: "Regular assessments and progress reports to keep you on track." },
    { title: "Modern Equipment", text: "Clean, spacious floor with premium, well-maintained machines." },
  ]
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">Why PulseFit</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f) => (
            <div key={f.title} className="card p-6">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
