import { Link } from 'react-router-dom'

import '../css/menu.css'

export default function Home() {
  return (
    <div className="gridMenu">
      <Link to="/about">About</Link>
      <Link to="/research">Research</Link>
      <Link to="/involvement">Involvement</Link>
      <Link to="/blog">Blog</Link>
    </div>
  )
}
