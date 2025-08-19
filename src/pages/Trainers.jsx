export default function Trainers() {
  const trainers = [
    { name: "ABC", role: "Strength & Conditioning", img: "/photos/trainer1.jpg" },
    { name: "VFR", role: "Performance Coach", img: "/photos/trainer2.jpg"  },
    { name: "ZXC", role: "Mobility & Yoga", img: "/photos/trainer3.jpg"  },
    { name: "POQ", role: "HIIT Specialist", img: "/photos/trainer4.jpg"  },
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-black tracking-tight">Meet the Trainers</h1>
      <p className="text-gray-400 mt-2">Certified experts to guide your transformation.</p>
      <div className="mt-8 grid md:grid-cols-4 gap-6">
        {trainers.map(t => (
          <div key={t.name} className="card overflow-hidden">
            <img src={t.img} alt={t.name} className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-400">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
