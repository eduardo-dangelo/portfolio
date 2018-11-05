import React from 'react'
import { FaThumbsUp, FaSun, FaCogs, FaYoutube } from 'react-icons/fa'
import reduxLogo from './img/redux _logo.png'
import graphQlLogo from './img/GraphQL_Logo.png'
import vsLogo from './img/vs_logo.png'
import weatherLogo from './img/weather_icon.png'
import youtubeLogo from './img/youtube_logo.png'
import stylingLogo from './img/logo_styling.png'
import stylingLogo2 from './img/logo_styling_2.png'

class IconType extends React.Component {
  render() {
    return (
      <div>
        {this.renderIcons()}
      </div>
    );
  }

  renderIcons = () => {
    switch (this.props.type) {
      case 'social-media-app':
        return <img src={graphQlLogo} alt="redux"/>
      case 'weather_app':
        return <img src={weatherLogo} alt="redux"/>
        // return <FaSun/>
      case 'redux_playground':
        return <img src={reduxLogo} alt="redux"/>
      case 'styling_via_props':
        return <img src={stylingLogo2} alt="redux"/>
      case 'youtube_api_serach':
        return <img src={youtubeLogo} alt="redux"/>
      case 'fight_game_menu':
        return <img src={vsLogo} alt="redux"/>
      default:
        return null
    }
  }
}

export default IconType