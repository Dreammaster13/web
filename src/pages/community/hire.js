import React from 'react'
import Img from 'gatsby-image'
import CommunityNavigation from '../../components/CommunityNavigation'


const Card = ({ id, name, title, children, imgData }) => (
  <div className="card">
    <Img
      sizes={{ ...imgData, aspectRatio: 1.6 }}
      alt={`A portrait of ${name}`}
    />
    <div>
      <h4>{name}</h4>
      <div className="tab-content">{children}</div>
    </div>
  </div>
)

const HireAlumniPage = props => (
  <div className="CommunityPage HireAlumniPage">
    <CommunityNavigation />
    <div className="wrap">
      <h2>Alumni</h2>
      <h3>Below is a list of graduates who are pursuing career opportunities and freelance work with their portfolios, areas of expertise, and contact information.</h3>

      <div className="bios">
        <Card
          id="julius"
          name="Julius Bzozowski"
          imgData={props.data.julius.sizes}
        >
          <p>Github: <a href="https://github.com/jbzozowski?tab=repositories" target="_blank">bzozowski</a></p>
          <p>Portfolio: <a href="http://jbzozowski.github.io/" target="_blank">jbzozowski.github.io</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/julius-bzozowski-m-ed-43b3012/" target="_blank">julius-bzozowski-m-ed-43b3012</a></p>
        </Card>
        <Card
          id="brian"
          name="Brian Bycynski"
          imgData={props.data.brian.sizes}
        >
          <p>Github: <a href="https://github.com/bdog72" target="_blank">bdog72</a></p>
          <p>Portfolio: <a href="http://brianbycynski.surge.sh/" target="_blank">brianbycynski.surge.sh</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/brian-bycynski-374260140/" target="_blank">brian-bycynski-374260140</a></p>
        </Card>
        <Card
          id="marianne"
          name="Marianne Kelly"
          imgData={props.data.marianne.sizes}
        >
          <p>Github: <a href="https://github.com/maresThere" target="_blank">maresThere</a></p>
          <p>Portfolio: <a href="http://mariannekelly.com/" target="_blank">mariannekelly.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/marekelly/" target="_blank">marekelly</a></p>
        </Card>
        <Card
          id="jasmine"
          name="Jasmine Frantz"
          imgData={props.data.jasmine.sizes}
        >
          <p>Github: <a href="https://github.com/dubistdu" target="_blank">dubistdu</a></p>
          <p>Portfolio: <a href="http://www.jasfrantz.com/" target="_blank">jasfrantz.com/</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/jasmine-frantz/" target="_blank">jasmine-frantz</a></p>
        </Card>
      </div>
    </div>
  </div>
)

export const pageQuery = graphql`
  query HireAlumniPageQuery {
    julius: imageSharp(id: { regex: "/people/julius/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    brian: imageSharp(id: { regex: "/people/brian/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    marianne: imageSharp(id: { regex: "/people/marianne/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    jasmine: imageSharp(id: { regex: "/people/jasmine/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default HireAlumniPage
