import React from 'react'
import { /*Button,*/ FormControl } from 'react-bootstrap'
import styled from 'styled-components'
// import { FaTrash } from 'react-icons/fa'

const LinkRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const LinkCol = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const LinkLabel = styled.div`
  font-weight: bolder;
  margin-right: 15px;
`;

// const TrashBtn = styled.button`
//   display: flex;
//   align-items: center;
// `;

class Link extends React.Component {
  state = {
    linkTempValue: this.props.link
  }

  handleLinkChange = (target) => (e) => {
    this.setState({
      linkTempValue: { [target]: e.target.value }
    })
  }

  updateLinkProp = (linkIndex, prop) => (e) => {
    const { links, actions } = this.props

    links[linkIndex][prop] = e.target.value
    actions.updateLinks(links)
  }

  // handleRemoveLink = (linkIndex) => () => {
  //   const { links, actions, onRemove } = this.props
  //
  //   // delete links[linkIndex]
  //   links.splice(linkIndex, 1)
  //   actions.updateLinks(links)
  //   onRemove()
  // }

  render() {
    const { linkIndex } = this.props
    const { linkTempValue } = this.state
    return (
      <LinkRow>
        <LinkCol>
          <LinkLabel>
            label:
          </LinkLabel>
          <FormControl
            type="text"
            value={linkTempValue.label}
            onChange={this.handleLinkChange('label')}
            onBlur={this.updateLinkProp(linkIndex, 'label')}
          />
        </LinkCol>
        <LinkCol>
          <LinkLabel>
            href:
          </LinkLabel>
          <FormControl
            type="text"
            value={linkTempValue.href}
            onChange={this.handleLinkChange('href')}
            onBlur={this.updateLinkProp(linkIndex, 'href')}
          />
        </LinkCol>
        {/*<LinkCol>*/}
          {/*<TrashBtn onClick={this.handleRemoveLink(linkIndex)}>*/}
            {/*<FaTrash/>*/}
          {/*</TrashBtn>*/}
        {/*</LinkCol>*/}
      </LinkRow>
    )
  }
}

export default Link