import React from "react";
import "./dailyforecast-weather.scss";
class DailyForecast extends React.Component {
  constructor(props){
    super(props);
    this.state={
      month:'',
      day:'',
    }
  }
  render() {
    const curr = this.props.curr;
    const forecastItems = this.props.forecast.map((f, i) => {
   
      const key = `forecast-item_${i}`;
      const url = ` http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`;
      const month = new Date(f.dt*1000).getMonth()+1;
      const day = new Date(f.dt*1000).getDate();
      const time=month*100+day;

      const week='2022-'+month+'-'+day;

      const datelist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    
      if(day>=curr.getDate()&&day<curr.getDate()+5){
        return (
          <div className="dailyforecast-item" key={key}>
            <p className="dailyforecast-item-date">
              {month}{"-"}{day}<br/>
              {datelist[new Date(week).getDay()]}
            </p>
            <p className="dailyforecast-item-temp">{f.temp.day}°</p>
            <img
              className="dailyforecast-item-icon"
              src={url}
              alt={f.weather[0].description}
            />
            <p className="dailyforecast-item-description">{f.weather[0].main}</p>
            <p className="dailyforecast-item-max">Max:{f.temp.max}°</p>
            <p className="dailyforecast-item-min">Min:{f.temp.min}°</p>
            <button className="button" onClick={()=>{
              this.props.giveTime(time)
              }}>detail</button>
              {/* <button className="button" onClick={()=>{
              this.props.giveTime(time)
              }}>detail</button> */}
          </div>
        );
      }
      return 0;

    });
    return <div className="dailyforecast">
        <h3 className="dailyforecast-title">Five Days' Weather Forecast</h3>
        <div className="dailyforecast-items">{forecastItems}</div>
        </div>;
  }
  componentDidMount(){
    this.setState({
      month:this.props.month,
      day:this.props.day
    })
  }
}



export default DailyForecast;
