import React, { Component } from 'react'
import '../css/blockquote.css';

export default class About extends Component {
  render() {
    return (
      <div className="text">
        <h1> ABOUT </h1>
        <p>
          Nataliya Nechyporenko is a Ph.D. student at the University of Colorado Boulder (CU Boulder) at the <a href="https://hiro-group.ronc.one/"> Human-Interaction and Robotics (HIRO)</a> lab. She received her Bachelor's Degree in Mechanical Engineering from the University of Connecticut (UConn) and her Master's Degree in Robotics from the University of Nantes (ECN) and Jaume I University (UJI) through the <a href="https://master-emaro.ec-nantes.fr/">European Master on Advanced Robotics (EMARO)</a>. Her industrial experience spans established industries and small-scale startups. She is motivated to understand how robotic technology can be used as an elegant solution to life's simple problems. She explores the concepts of active robot capabilities and human-robot interaction. At CU Boulder, her research on tactile perception and social intelligence in robotics is funded by the <a href="https://www.nsfgrfp.org/">National Science Foundation Graduate Research Fellowship Program (NSF GRFP)</a>.
        </p>
        <blockquote>
          Human knowledge is never contained in one person. It grows from the relationships we create between each other and the world, and still, it is never complete.
          <span>― Paul Kalanithi, When Breath Becomes Air</span>
        </blockquote>
        <p>
          Nataliya is a collaborator and a creator. If you have an idea for a project or a prospect, then please write to her a few words over e-mail.
        </p>
      </div>
    )
  }
}
