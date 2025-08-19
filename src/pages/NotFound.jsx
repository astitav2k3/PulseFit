import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-black">404</h1>
      <p className="text-gray-400 mt-2">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary mt-6">Go Home</Link>
    </section>
  )
}
