
import React, { Component } from 'react'
import { Link } from "react-router-dom";

import list from "../blog/list.json"

export default function Blog() {

  return (
    <div className="content">
      <div className='text'>
        <h1>Table of Contents</h1>
      </div>
      {list.map(({ id, title }) => (
        <h2><Link to={`/blog/${id}`} key={id}> {id}: {title}</Link></h2>
      ))}

    </div>
  )
}