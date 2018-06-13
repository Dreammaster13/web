import React from 'react'
import logoJunior from '../images/junior.svg'
import ClassImg1 from '../images/SDGJr/october2017.jpg'
import ClassImg2 from '../images/SDGJr/august2017.jpg'

const IntroText =
  'Suncoast Developers Guild believes strongly that programming must be accessible at all ages, and our kids classes are one way we inch toward making that belief a reality. Suncoast Deverlopers Guild Jr provides free coding classes to children ages 8-16 in the Tampa Bay area.  We strive to make learning fun and teach our students new skills.  We currently offer three classes, but we are working to provide more programs.'

const ScratchLink = (
  <a href="https://scratch.mit.edu/" target="_blank">
    Scratch
  </a>
)
const ScratchClass =
  'is a visual program language provided by Lifelong Kindergarten Group at the MIT Media Lab. We like to use Scratch to break down many barriers that prevent students from learning to code, while still teaching the basics and logic behind programming.  Parents: you might want some ear plugs after we teach them how to program sounds.'

const HTMLCSS = 
  'HTML and CSS are the building blocks of web development--every website has HTML and CSS in it!  In this class, we teach the basics of web programming and CSS animations, allowing the students plenty of time to experiment and personalize their pages.'

const JsClass = 
  'Javascript is a powerful programming language that is used in every web browser.  We utilize fun activities and animations to teach kids about functions, strings, arrays and more.  We offer both introductory and intermediate javascript classes.  Come prepared to look for every last quote, period and semi-colon!'

const KidsEmail = (
  <a href="mailto:kids@suncoast.io?Subject=Host%20a%20Kids%20Class" target="_top">
    contact us
  </a>
)
const OutsideHost = (
  <a href="https://gooee.com/" target="_blank">
    Gooee
  </a>
)
const MeetupLink = (
  <a href="https://www.meetup.com/suncoast-developers-guild/">
    MeetUp.com
  </a>
)
const ConsetForm = (
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScpmdobCYFKEmZsOdzS4To5kTs37zkchijZGh5oZAtKgnQMwg/viewform?embedded=true">
    our mailing list.
  </a>

)
const JuniorPage = () => (
  <div className="JuniorPage">
    <div className="row">
      <img className="logo"
        src={logoJunior}
        alt="Suncoast Developers Guild Jr Logo"
        height="280"
        width="auto"
      />
      <div className="intro">
        <h2>Kids Code Classes</h2>
        <p> {IntroText} </p>
      </div>
    </div>

    <div className="row">
      <div className="class">
        <h3>Scratch</h3>
        <p>
          {ScratchLink} {ScratchClass}
        </p>
      </div>
      <div className="class">
        <h3>HTML & CSS</h3>
        <p>{HTMLCSS}</p>
      </div>
      <div className="class">
        <h3>Javascript</h3>
        <p>{JsClass}</p>
      </div>
    </div>

    <div className="overviewRow">
      <div className="overview">
        <h3>Class Overview</h3>
        <p>
          Suncoast Deverlopers Guild Jr offers single and multi night classes throughout the year. Students are required to bring their own computer.  Both Mac and PCs are welcome, as long as it is in working shape and fully charged.  All software used is free online--no downloading required! We recommend using Chrome or Firefox in our classes, and we cannot guarantee that other web browsers will work. 
        </p>
        <p>
          Imagination and love for computers are the only requirements for our classes. Basic typing skills are helpful, but we will go at a slow enough pace for students that are not as familiar with typing. Our introductory classes are for beginners with no prerequisites and we recommend attending our intro class before any of our intermediate classes. 
        </p>
      </div>
      <div className="overview">
        <img className="classImages"
          src={ClassImg1}
          alt="Picture of the students from our October 2017 javascript class holding certificates."
        />
        <p className="caption">
            October 2017 javascript class at {OutsideHost}.
        </p>
      </div>
    </div>
    <div className="overviewRow2">
      <div className="overview">
        <p>
          Basic typing skills are helpful, but we will go at a slow enough pace for students that are not as familiar with typing. Our introductory classes are for beginners with no prerequisites and we recommend attending our intro class before any of our intermedia classes. Imagination and love for computers are the only requirements for our classes.
        </p>
        <p>
          Our goal is for students to have a great time learning and playing  with new tools and ideas. There are no tests, grades or homework. That said, we do expect students to be engaged in every class. We also require a parent or a guardian to remain with the student for the entirety of the course for students under the age of 16.
        </p>
        <p>
          Most classes are hosted on our St. Pete campus.  Our Tampa classes are hosted at local companies who volunteer their location. If your company is interested in hosting one of our classes please {KidsEmail}.
        </p>
      </div>
      <div className="overview">
        <img className="classImages"
          src={ClassImg2}
          alt="Picture of the students from our August 2017 scratch class holding certificates."
        />
        <p className="caption">
            Students after our August 2017 {ScratchLink} class.
        </p>
      </div>
    </div>
    <div className="row">
      <p>
        You can find our next class on {MeetupLink}.  In the mean time, you can join {ConsetForm}
      </p>
    </div>
  </div>
)
export default JuniorPage


// {/* <div className="wrap">   <iframe
// src="https://docs.google.com/forms/d/e/1FAIpQLScpmdobCYFKEmZsOdzS4To5kTs37zkch
// ijZGh5oZAtKgnQMwg/viewform?embedded=true">     Loading...   </iframe> </div>
// */}

// for bio cards https://codepen.io/tayloracox/pen/bKNwLV