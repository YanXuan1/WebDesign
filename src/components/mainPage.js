import React from "react";
import "../App.scss";

import SearchBar from "./searchBar";
import CurrentWeather from "./currentWeather";
import DailyForecast from "./dailyForecast";
import FivedayForecast from "./FivedayForecast";
import Clock from "./clock";
import { getCurrentWeather, getForecast,getDailyForecast} from "../apis/open-weather.api";
import {BrowserRoute as Router,Route,Switch} from "react-router";
import {Link,BrowserRouter} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Boston",
      temp: "",
      feelsLike: "",
      max_temp:"",
      min_temp:"",
      description: "",
      icon: "",
      curr_time: "",
      dailyForecast: [],
      forecast: [],
      selectTime:""
    };

  }

  componentDidMount() {
    this.onFormSubmit();
  }

  onInputChange(e) {
    this.setState({
      location: e.target.value,
    });
  }
  async onFormSubmit() {
    const weatherRes = await getCurrentWeather(this.state.location);
    const lat = weatherRes.data.coord.lat;
    const lon = weatherRes.data.coord.lon;
    const dailyForecastRes = await getDailyForecast(lat,lon);
    const forecastRes = await getForecast(lat, lon);
    const curr = new Date();
    this.setState({
      temp: weatherRes.data.main.temp,
      feelsLike:weatherRes.data.main.feels_like,
      max_temp:weatherRes.data.main.temp_max,
      min_temp:weatherRes.data.main.temp_min,
      description:weatherRes.data.weather[0].main,
      icon:weatherRes.data.weather[0].icon,
      forecast:forecastRes.data.list,
      dailyForecast:dailyForecastRes.data.daily,
      curr_time:curr,
 
    });
  }
  time=(giveTime)=>{
    this.setState({
      selectTime:giveTime
    });
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <SearchBar
            location={this.state.location}
            inputChange={(e) => this.onInputChange(e)}
            formSubmitted={() => this.onFormSubmit()}
          />
          <DailyForecast 
          forecast = {this.state.dailyForecast}
          curr = {this.state.curr_time} 
          giveTime={this.time}
         />
          <FivedayForecast 
          forecast = {this.state.forecast}
          curr = {this.state.curr_time}
          time={this.state.selectTime}
          />
        </header>
        

      </div>
    );
  }
}

// function Home() {
//   return (
//     <BrowserRouter>
//           <Link to='/home'>首页</Link>
//           <br/>
//           <Link to='/blog'>博客</Link>

//           <Route path='/home' component={Home}></Route>
//           <Route path='/blog' render={()=><h2>这是博客页</h2>}></Route>
//     </BrowserRouter>
//   );
// }


export default App;