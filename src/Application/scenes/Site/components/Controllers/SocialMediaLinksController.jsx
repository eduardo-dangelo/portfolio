import React from 'react'
import FixedContainer from './components/FixedContainer'

class SocialMediaLinksController extends React.PureComponent {
  render() {
    const { onBlur, inputValue, onChange } = this.props
    return (
      <FixedContainer align="right">
        <input
          type="text"
          onBlur={onBlur}
          value={inputValue}
          onChange={onChange}
          placeholder={'paste link here...'}
        />
      </FixedContainer>
    );
  }
}

export default SocialMediaLinksController;