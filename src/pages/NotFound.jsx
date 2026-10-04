import { Link } from 'react-router-dom'
export default function NotFound() {
  return <div className="sec text-center"><h1 className="text-5xl font-bold">404</h1><p className="mt-3 text-mute">That page doesn't exist.</p><Link to="/" className="btn btn-p mt-6">Back home</Link></div>
}
