import axios from "axios";

const WEBAPIURL = "https://www.metaweather.com/api";
const REQUEST_FAILED = "REQUEST_FAILED";
const SEARCH_CITY = "SEARCH_CITY";
const LOAD_WEATHER = "LOAD_WEATHER";

const searchCityByName = cityName => {
  let apiUrl = `${WEBAPIURL}/location/search/?query=${cityName}`;
  console.log("apiURL=", apiUrl);
  return axios.get(apiUrl);
};

const loadWeatherAPI = woeid => {
  let apiUrl = `${WEBAPIURL}/location/${woeid}`;
  console.log("apiURL=", apiUrl);
  return axios.get(apiUrl);
};

const initialState = {
  searchValue: "",
  cities: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CITY:
      return {
        ...state,
        cities: action.cities
      };

    case LOAD_WEATHER:
      return {
        ...state,
        weather: action.weather,
        city: action.city
      };

    case REQUEST_FAILED: {
      /* ToDo: BillH - handle failed request here*/
      return state;
    }

    default:
      return state;
  }
};

export const loadWeather = woeid => {
  return dispatch => {
    loadWeatherAPI(woeid)
      .then(response => {
        console.log("response data:", response.data);
        dispatch({
          type: LOAD_WEATHER,
          weather: response.data.consolidated_weather,
          city: response.data.title
        });
      })
      .catch(error => {
        dispatch({
          type: REQUEST_FAILED,
          error
        });
      });
  };
};

export const searchCity = cityName => {
  return dispatch => {
    searchCityByName(cityName)
      .then(response => {
        console.log("response data:", response.data);
        dispatch({
          type: SEARCH_CITY,
          cities: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: REQUEST_FAILED,
          error
        });
      });
  };
};
