
import React, { Component, useCallback } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import '../css/menu.css';
export default class Menu extends Component {

  render() {
    return (
      <div className="gridMenuParent" >

        <div className="about menuOption">
          <Link to="/about">About </Link>
        </div>

        <div className="research menuOption">
          <Link to="/research">Research </Link>
        </div>

        <div className="outreach menuOption">
          <Link to="/outreach">Outreach </Link>
        </div>

        <div className="blog menuOption">
          <Link to="/blog">Blog </Link>
        </div>

        <div className="footer">
          <small>&copy; Copyright 2022. All Rights Reserved.</small>
        </div>

      </div>
    )
  }
}

