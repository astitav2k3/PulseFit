import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    pauseOnHover: false,
  }

  const images = [
    "photos/gym1.jpg",
    "/photos/gym2.jpg",
    "/photos/gym3.jpg",
    "/photos/gym4.jpg"
 ]

  return (
    <section className="container-hero">
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Train Smarter. Get Stronger.
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Join PulseFit for elite coaching, small-group classes, and tailored programs
            that help you build muscle, burn fat, and feel amazing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/membership" className="btn btn-primary text-base px-6 py-3">View Memberships</Link>
            <Link to="/classes" className="btn btn-ghost text-base px-6 py-3">Explore Classes</Link>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div className="card p-4">
              <div className="text-3xl font-black">50+</div>
              <div className="text-xs text-gray-400">Weekly Classes</div>
            </div>
            <div className="card p-4">
              <div className="text-3xl font-black">12</div>
              <div className="text-xs text-gray-400">Expert Trainers</div>
            </div>
            <div className="card p-4">
              <div className="text-3xl font-black">4.9★</div>
              <div className="text-xs text-gray-400">Member Rating</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE SLIDESHOW */}
        <div className="card overflow-hidden h-[400px] md:h-[500px]">
          <Slider {...settings}>
            {images.map((src, idx) => (
              <div key={idx}>
                <img
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
