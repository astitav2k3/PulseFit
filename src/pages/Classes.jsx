import { useState } from "react"

export default function Classes() {
  const classes = [
    { name: "Yoga", time: "Mon, Wed, Fri • 7:00 AM", img: "photos/yoga.jpg" },
    { name: "Zumba", time: "Tue, Thu • 6:30 PM", img: "photos/zumba.jpg" },
    { name: "Strength Training", time: "Sat • 8:00 AM", img: "photos/strength.jpg" },
    { name: "Cardio", time: "Sun • 6:00 PM", img: "photos/cardio.jpg" },
  ]

  const [selectedClass, setSelectedClass] = useState(null)

  const classDetails = {
    "Yoga": "A calming yet strengthening practice combining breath control, flexibility, balance, and mindfulness. Perfect for reducing stress and enhancing overall well-being.",
    "Zumba": "A fun, dance-based workout blending Latin and international music with energetic moves. Great for burning calories, boosting mood, and improving coordination.",
    "Strength Training": "Targeted workouts with weights and resistance to build muscle, improve posture, and increase overall strength. Suitable for all fitness levels.",
    "Cardio": "Heart-pumping exercises such as running, cycling, or aerobic drills to boost stamina, burn fat, and strengthen cardiovascular health.",
  }


  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-black tracking-tight">Classes</h1>
      <p className="text-gray-400 mt-2">Scientifically designed sessions to build strength, endurance, and mobility.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {classes.map(c => (
          <div
            key={c.name}
            className="card overflow-hidden cursor-pointer hover:scale-[1.02] transition"
            onClick={() => setSelectedClass(c)}
          >
            <img src={c.img} alt={c.name} className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-sm text-gray-400">{c.time}</p>
              <div className="mt-4 flex gap-3">
                <a href="#" className="btn btn-primary">View Details</a>
                <a href="/contact" className="btn btn-ghost">Join</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedClass && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedClass(null)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl max-w-lg w-full shadow-xl"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <h2 className="text-2xl font-bold mb-4">{selectedClass.name}</h2>
            <p className="text-gray-300 mb-4">{classDetails[selectedClass.name]}</p>
            <p className="text-sm text-gray-400 mb-6">🕒 {selectedClass.time}</p>
            <button
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold"
              onClick={() => setSelectedClass(null)}
            >
              Close
            </button>
            <a
              href="/contact"
              className="btn btn-ghost px-4 py-2 text-sm font-semibold"
            >
              Join
            </a>

          </div>
        </div>
      )}
    </section>
  )
}
