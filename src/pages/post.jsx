import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'

export default function BlogPost() {
  const { id } = useParams()
  const [post, setPost] = useState('')

  useEffect(() => {
    import(`../blog/${id}.md`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  })

  return (
    <div className="text">
      <Markdown>{post}</Markdown>
    </div>
  )
}
