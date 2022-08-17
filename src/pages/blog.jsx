
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Blog extends Component {
  render() {
    return (
      <div className="text">
        <Link to="post1">post1</Link>
      </div>
    )
  }
}