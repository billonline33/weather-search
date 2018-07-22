import axios from "axios";

const WEBAPIURL = "https://www.metaweather.com/api";
const REQUEST_FAILED = "REQUEST_FAILED";
const SEARCH_CITY = "SEARCH_CITY";

const searchCityByName = cityName => {
  let apiUrl = `${WEBAPIURL}/location/search/?query=${cityName}`;
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

    case REQUEST_FAILED: {
      /* ToDo: BillH - handle failed request here*/
      return state;
    }

    default:
      return state;
  }
};

export const searchCity = cityName => {
  return dispatch => {
    searchCityByName(cityName)
      .then(response => {
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
