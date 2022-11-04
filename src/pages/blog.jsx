import React from 'react'
import { Link } from 'react-router-dom'

import list from '../blog/list.json'

export default function Blog() {
  return (
    <div className="content">
      {list.map(({ id, title }) => (
        <h2>
          <Link to={`/blog/${id}`} key={id}>
            {title}
          </Link>
        </h2>
      ))}
    </div>
  )
}
