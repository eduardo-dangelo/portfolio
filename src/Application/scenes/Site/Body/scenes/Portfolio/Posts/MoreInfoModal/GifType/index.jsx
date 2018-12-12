import React from 'react'
import weatherApp from './img/weather_app.gif'
import fightGameMenu from './img/fight_game_menu.gif'
import reduxPlayground from './img/redux_playground.gif'
import socialMediaDemo from './img/social_media_demo.gif'
import youtubeApiSearch from './img/youtube_api_search.gif'
import stylingComponentsViaProps from './img/styling_components_via_props.gif'

class GifType extends React.Component {
  render() {
    return (
      <div>
        {this.renderGif()}
      </div>
    );
  }

  renderGif = () => {
    switch (this.props.type) {
      case 'weather_app':
        return <img src={weatherApp} alt="redux"/>
      case 'fight_game_menu':
        return <img src={fightGameMenu} alt="redux"/>
      case 'social_media_demo':
        return <img src={socialMediaDemo} alt="redux"/>
      case 'redux_playground':
        return <img src={reduxPlayground} alt="redux"/>
      case 'youtube_api_serach':
        return <img src={youtubeApiSearch} alt="redux"/>
      case 'styling_via_props':
        return <img src={stylingComponentsViaProps} alt="redux"/>
      default:
        return null
    }
  }
}

export default GifType
