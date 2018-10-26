import React from 'react'
import { Heading, Text } from '../../elements'
import { FaStar } from 'react-icons/fa'
import Flip from 'react-reveal/Flip'

class Skills extends React.PureComponent {
  render() {
    return (
      <div>
        <Heading>
          <FaStar/><Flip top cascade>Skills</Flip>
        </Heading>
        <Text>
          <strong>Creativity:</strong> No matter what I do, I allow myself to be innovative.
          I tend to commit to constant learning where I’m always looking to impress clients,
          learn new things and improve my passion for design.
        </Text>
        <Text>
          <strong>Attention to details:</strong> I have developed to achieve thoroughness and
          accuracy when accomplishing a task, this I have especially developed working as a
          graphic designer.
        </Text>
        <Text>
          <strong>Business awareness:</strong> After several years of working within different
          organisations and industries I have gained a high level of understanding of business
          processes and constraints.
        </Text>
        <Text>
          <strong>IT skills:</strong> I possess the ability to perfectly work with the
          following IT software’s: HTML5, CSS, SCSS, Sass, jQuery, JavaScript, typeScript,
          React, Redux, AngularJS, Node.js, Bootstrap, GraphQl, git, github.
        </Text>
      </div>
    )
  }
}

export default Skills