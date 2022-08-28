
import React, { Component } from 'react'
export default class Research extends Component {
  render() {
    return (
      <div>
        <div className="text">
          <h1>Current Research</h1>
          <h2>Human-Robot Collaboration</h2>
          <p>
            We often see robots with hands, legs, torsos, and heads. Although they are designed to look like a person, we rarely see them behave like one, especially when getting a task done. The cold metallic exterior of a robot does not feel the presence of a human and prohibits it from physical contact. At the Human Interaction and Robotics Group (HIRO) in the Computer Science Department at CU Boulder, I research novel hardware and software technologies used to maximize the utility of robot embodiment to enhance natural human-robot cooperation. For example, instead of a numb surface robots will be equipped with sensor units that mimic skin. With this technology, I can study how the sense of touch enriches a robot's perception and self-awareness, allowing it to be more versatile and collaborative. I want to see robots widely employed in professional, domestic, and medical settings working alongside human companions.
          </p>
          <h4 className='citation'>
            <a href="https://ras.papercept.net/conferences/conferences/IROS22/program/IROS22_ContentListWeb_2.html#tuc-8_05">
              Escobedo, C., Nechyporenko, N. (2022, October). A Framework for the Systematic Evaluation of Obstacle Avoidance and Object-Aware Controllers. In 2022 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE.
            </a>
          </h4>
        </div>

        <div className="text">
          <h2>Robot Social Intelligence</h2>
          <p>
            Human-human interaction has a deep and rich history of understanding psychological and cognitive patterns. But do these interactions pave the way to understanding human-robot collaboration? In my second line of research, I try to map the cognitive reality of social interactions between robots and humans. I investigate the concepts of trust, truth, and bias. By exploring different scenarios in which a robot and a human can interact on a social level, I can resurface new or established trends in human psychology and cognition. I then try to understand how to use these concepts to enrich everyday robot capabilities. For example, by understanding how people react to cheating, we can see how to engage a person in a game of rock, paper, and scissors. It is with socially intelligent robots that humans will cultivate relationships beyond the completion of dull, dirty, dangerous tasks.
          </p>
        </div>
        <div className="text">
          <h1>Past Research</h1>
          <h2>Grasp Planning</h2>
          <p>
            Humans possess a remarkable ability to grasp and recognize objects in the dynamic environments of everyday life. Inspired by this, the main goal of our research was to design robust and practical state-of-the-art solutions for robotic pick-and-place, a technology central to many applications: from picking packages in a logistics center to bin-picking in a manufacturing plant; from unloading groceries at home to clearing debris after a disaster.
          </p>
          <h4 className='citation'>
            <a href="https://www.mdpi.com/2076-3417/11/13/5805">
              Nechyporenko, N., Morales, A., Cervera, E., & del Pobil, A. P. (2021). A practical approach for picking items in an online shopping warehouse. Applied Sciences, 11(13), 5805.
            </a>
          </h4>
          <h4 className='citation'>
            <a href="https://ieeexplore.ieee.org/abstract/document/8170448">
              del Pobil, A. P., Kassawat, M., Duran, A. J., Arias, M. A., Nechyporenko, N., Mallick, A., ... & Recatalá, G. (2017, November). UJI RobInLab's approach to the Amazon Robotics Challenge 2017. In 2017 IEEE International Conference on Multisensor Fusion and Integration for Intelligent Systems (MFI) (pp. 318-323). IEEE.
            </a>
          </h4>
          <h2>Underwater Robot Perception</h2>
          <p>
            The aim of our work was to endow underwater robots with the capability to observe the environment using cameras, thus paving the way for the development of advanced systems for close-range underwater infrastructures inspection and maintenance as well as materials sampling.
          </p>
          <h4 className='citation'>
            <a href="https://link.springer.com/chapter/10.1007/978-3-319-59773-7_19">
              Perez, J., Attanasio, A. C., Nechyporenko, N., & Sanz, P. J. (2017, June). A deep learning approach for underwater image enhancement. In International work-conference on the interplay between natural and artificial computation (pp. 183-192). Springer, Cham.
            </a>
          </h4>
        </div>

      </div >
    )
  }
}