
import React, { Component } from 'react'
import '../css/button.css';

export default class Involvement extends Component {
  render() {
    return (
      <div className="text">
        <h1> Involvement </h1>
        <h2>Organizing the "Close-Proximity HRC" Workshop at RSS 2022</h2>
        <p>
          Partnering with the <a href="https://roboticsconference.org/">Robotics Science and Systems (RSS) Conference 2022</a>, my colleagues and I organized a workshop to discuss the opportunities and challenges of close-proximity human-robot collaboration (HRC). We argue that close-proximity HRC is i) an under-explored area of research, ii) key to the emergence of complex, rich, and flexible human-robot collaboration, and iii) an enabling technology for robots to respond to the pressing societal needs of modern society. We had an amazing list of speakers and contributions. If you are interested in learning more, check out the following links:
        </p>

        <div className='button-parent'>
          <a href="https://sites.google.com/colorado.edu/rss-22-close-proximity-hrc/">
            <div className='button'>
              Website
            </div>
          </a>

          <a href="https://www.youtube.com/watch?v=N4gSwQWXgzU&list=PLyZfP0QZpxoBw1hfjAzGgD9-xojfEvnii">
            <div className='button'>
              Videos
            </div>
          </a>
        </div>

        <h2>Leading a Robotics Summer Camp For Middle Schoolers</h2>
        <p>
          As a researcher in the field of robotics and artificial intelligence, I like to spark curiosity and enthusiasm for science and technology in the community. To this end, I launched the Robotics Summer Camp for Middle School Students, funded by the <a href="https://www.colorado.edu/outreach/ooe/">Office for Outreach and Engagement (OOE)</a>. The camp took place in the Lafayette Public Library from June 6 to June 11 of 2022. Middle schoolers from the community attended the camp free of charge and learned about programming and robotics. They solved challenges such as having the robot avoid obstacles while navigating a maze, or having the robot exhibit a fear of heights when being picked up. Take a look at the the following pages for more info:
        </p>

        <div className='button-parent'>
          <a href="https://hiro-group.ronc.one/news/2022/06/20/Robotics-Summer-Camp/">
            <div className='button'>
              Photos
            </div>
          </a>

          <a href="/blog/1">
            <div className='button'>
              Blog Post
            </div>
          </a>
        </div>

      </div>
    )
  }
}