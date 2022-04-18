import React from "react";
import "./forecast-weather.scss";
class FivedayForecast extends React.Component {
 
  render() {
    
    const forecastItems = this.props.forecast.map((f, i) => {
      
      const key = `forecast-item_${i}`;
      const url = ` http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`;
      let hour = new Date(f.dt * 1000).getHours();
      let ampm = "AM";
      const month = new Date(f.dt*1000).getMonth()+1;
      const day = new Date(f.dt*1000).getDate();
      const selectDay=month*100+day;

      
      if (hour > 12) {
        hour -= 12;
        ampm = "PM";
      }
     
        if(this.props.time===selectDay){
            return (
                <div className="forecast-item" key={key}>
                  <p className="forecast-item-date">
                    {month}{"-"}{day}
                  </p>
                  <p className="forecast-item-hour">
                    {hour}:00 {ampm}{" "}
                  </p>
                  <p className="forecast-item-temp">{f.main.temp}°</p>
                  {/* <p  className="forecast-item-max"></p> */}
                  {/* <p className="forecast-item-max">Max:{f.main.temp_max}°</p>
                  <p className="forecast-item-min">Min:{f.main.temp_min}°</p> */}
                  <img
                    className="forecast-item-icon"
                    src={url}
                    alt={f.weather[0].description}
                  />
                  <p className="forecast-item-description">{f.weather[0].main}</p>
                </div>
              );
            }
    });
    return <div className="forecast">
        <h3 className="forecast-title">Weather Forecast Per Hour</h3>
        <div className="forecast-items">{forecastItems}</div>
        </div>;
  }
}

export default FivedayForecast;
