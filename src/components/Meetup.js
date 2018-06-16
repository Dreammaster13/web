import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const UPTO = 20

const ESTIMATES = [
  'bordering on',
  'close to',
  'generally about',
  'in the ballpark of',
  'just about',
  'more or less',
  'approximately',
  'roughtimating around',
  'upwards of',
  'in the vicinity of',
  'nearly',
  'nigh',
  'not far from',
  'not quite',
  'on the brink of',
  'on the edge of',
  'on the point of',
  'on the verge of',
  'practically',
  'pretty near',
  'relatively',
  'virtually',
  'within sight of',
]

const photo = group => {
  let url = ''
  if (group.group_photo) {
    url = group.group_photo.thumb_link
  } else if (group.key_photo) {
    url = group.key_photo.thumb_link
  } else if (group.photos) {
    url = group.photos[0].thumb_link
  }
  return url.replace(/^http:/i, 'https:')
}

const population = group => {
  const count = Math.ceil(group.members / UPTO) * UPTO
  const prefix = ESTIMATES[Math.floor(Math.random() * ESTIMATES.length)]
  return `${prefix} ${count} ${group.who}`
}

const Meetup = ({ group }) => (
  <li className="org">
    <img src={photo(group)} alt={`${group.name} Logo`} />
    <div className="info">
      <h3>
        <OutboundLink href={group.link}>{group.name}</OutboundLink>
      </h3>
      <p>{population(group)}</p>
    </div>
  </li>
)

export default Meetup
