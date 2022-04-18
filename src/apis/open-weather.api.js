import axios from "axios";

const API_Key = "bbfc530877ff60d84cbbc10b1177a554";
axios.defaults.baseURL =  `https://api.openweathermap.org/data/2.5`;

function getCurrentWeather(location) {
  return axios.get(
    `/weather?q=${location}&units=imperial&appid=${API_Key}`
  );
}
function getDailyForecast(lat,lon) {
  return axios.get(
    `/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_Key}`
    )
}

function getForecast(lat,lon) {
  return axios.get(
    `forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_Key}`
    )
}
export {getCurrentWeather,getForecast,getDailyForecast };
