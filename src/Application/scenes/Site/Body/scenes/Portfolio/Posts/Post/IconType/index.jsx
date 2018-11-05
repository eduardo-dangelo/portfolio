import React from 'react'
import { FaThumbsUp, FaSun, FaCogs, FaYoutube } from 'react-icons/fa'
import reduxLogo from './img/redux _logo_xs.png'
import graphQlLogo from './img/graphql_logo_xs.png'
import vsLogo from './img/logo_vs_xs.png'
import weatherLogo from './img/weather_icon_xs.png'
import youtubeLogo from './img/youtube_logo_xs.png'
import stylingLogo from './img/logo_styling.png'
import stylingLogo2 from './img/logo_styling_xs.png'
import Fade from 'react-reveal/Fade'

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