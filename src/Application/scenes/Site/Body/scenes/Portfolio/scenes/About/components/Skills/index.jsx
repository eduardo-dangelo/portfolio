import React from 'react'
import { Heading, Text, TextArea } from '../../elements'
import { FaStar } from 'react-icons/fa'
import Flip from 'react-reveal/Flip'

class Skills extends React.PureComponent {
  state = {
    value: ''
  }

  handleInputBlur = (target, prop) => (e) => {
    const { actions } = this.props
    actions.updateAboutProps(target, prop, e.target.value)
  }

  handleChangeText = () => (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Heading>
          <FaStar/><Flip top cascade>Skills</Flip>
        </Heading>
        <Text>
          <strong>Business awareness:</strong> After several years of working within different
          organisations and industries I have gained a high level of understanding of business
          processes and constraints.
        </Text>
        <Text>
          <strong>Communication skills:</strong> I have developed excellent communication skills,
          both verbally and written. Including the ability to convey information to non-technical
          colleagues in a concise and clear way.
        </Text>
        <Text>
          <strong>Attention to detail:</strong> I have developed to achieve thoroughness and
          accuracy when accomplishing a task, this I have especially developed with my paintings.
        </Text>
        <Text>
          <strong>Creativity:</strong> No matter what I do, I allow myself to be innovative.
          I tend to commit to constant learning where I’m always looking to impress clients,
          learn new things and improve my passion for design.
        </Text>
        <Text>
          <strong>Excellent IT skills:</strong> I possess the ability to perfectly work with the
          following IT software’s: HTML, CSS, JavaScript, jQuery, AngularJS, Backbone.js,
          Node.js, Bootstrap, ASP.NET, PHP, C#, Python, Ruby and SQL, Java, C, C++, .NET, C#,
          Visual Basic, SQL Server, ASP, Oracle, PHP, JavaScript.
        </Text>
        <Text>
          <strong>Interpersonal skills:</strong> At work I have the ability to form effective
          relationships with people at all levels. I’m able to listen to clients
          and I’m attentive to their needs.
        </Text>
      </div>
    )
  }
}

export default Skills