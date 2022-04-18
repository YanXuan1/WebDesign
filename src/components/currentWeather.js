import React from "react";
import "./current-weather.scss";

class currentWeather extends React.Component {
  render() {
    let img;
    if (this.props.icon) {
      const url = ` http://openweathermap.org/img/wn/${this.props.icon}@4x.png`;
      img = (
        <img className="curr-weather-icon" src={url} alt={this.props.icon} />
      );
    }
    return (
      <div className="curr-weather">
        <h3 className="curr-weather-title">Current Weather Detials</h3>
        <div className="curr-weather-content">
          <div className="curr-weather-text">
            <p className="curr-weather-temp">
              {this.props.currentTemperature}°
            </p>
            <p className="curr-weather-description">{this.props.description}</p>
          </div>
          {img}
        </div>
        <div>
          <p className="curr-weather-max">Max: {this.props.max_temp}°</p>
          <p className="curr-weather-min">Min: {this.props.min_temp}°</p>
          <p className="curr-weather_feels-like">
            {" "}
            Feels like: {this.props.feelsLike}°
          </p>
          <p className="curr-weather-humidity">Humidity: {this.props.humidity}%</p>
          <p className="curr-weather-humidity">Clouds: {this.props.clouds}%</p>
          <p className="curr-weather-humidity">Wind: {this.props.wind}m/s</p>
          
        </div>
      </div>
    );
  }
}
export default currentWeather;

