import React, { PureComponent } from 'react'
import FixedContainer from './components/FixedContainer'

class SocialMediaLinksController extends PureComponent {
  render() {
    const { onBlur, inputValue, onChange } = this.props
    return (
      <FixedContainer align="right">
        <input
          type="text"
          onBlur={onBlur}
          value={inputValue}
          placeholder={'paste link here...'}
          onChange={onChange}
        />
      </FixedContainer>
    );
  }
}

export default SocialMediaLinksController;