import React from 'react';
import vsLogo from './img/logo_vs_xs.png';
import reduxLogo from './img/redux _logo_xs.png';
import graphQlLogo from './img/graphql_logo_xs.png';
import weatherLogo from './img/weather_icon_xs.png';
import youtubeLogo from './img/youtube_logo_xs.png';
import stylingLogo2 from './img/logo_styling_xs.png';

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
      case 'fight_game_menu':
        return <img src={vsLogo} alt="fight_game_menu"/>;
      case 'weather_app':
        return <img src={weatherLogo} alt="weather_app"/>;
      case 'redux_playground':
        return <img src={reduxLogo} alt="redux_playground"/>;
      case 'social_media_demo':
        return <img src={graphQlLogo} alt="social_media_demo"/>;
      case 'styling_via_props':
        return <img src={stylingLogo2} alt="styling_via_props"/>;
      case 'youtube_api_serach':
        return <img src={youtubeLogo} alt="youtube_api_serach"/>;
      default:
        return null
    }
  }
}

export default IconType;
