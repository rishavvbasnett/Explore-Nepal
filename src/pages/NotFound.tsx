import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-nepal-cream px-4">
      <div className="text-center max-w-sm">
        <p className="eyebrow mb-4">Lost on the trail?</p>
        <h1 className="font-display text-[7rem] sm:text-[9rem] font-bold text-navy-800 leading-none tracking-tighter mb-2">
          404
        </h1>
        <p className="font-display text-xl font-semibold text-navy-800 mb-3">Page Not Found</p>
        <p className="font-body text-[15px] text-gray-500 leading-relaxed mb-8">
          This path doesn't exist on our map. Head back to basecamp and try again.
        </p>
        <Link to="/" className="btn-primary inline-flex">
          <ArrowLeft size={15} /> Back to Home
        </Link>
      </div>
    </div>
  )
}
