This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


### Main features:

* This app contain a home page, where the user can search by location name (e.g "San") via a search box. The search results is displayed as list. Each search result contains the title, location type, latt and long. Clicking on a location should open the details page described below.
* A detaiils page (location page) displays the lcoation name, and weather information, e.g. Max and Minimum temperature, Humidity, visibility etc


## Important:

You can run the app on https://weather-search-demo.herokuapp.com/

The app makes API calls for weather information through https://www.metaweather.com/api/#locationsearch. Because on server side, CORS (Cross-Origin Resource Sharing) is not enabled, to make the web service call successful, I had to manipulate the browser. Please use Chrome, and install Allow-Control-Allow-Origin:* chrome extension,

https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en

reference https://stackoverflow.com/questions/49058042/no-access-control-allow-origin-header-is-present-on-the-requested-resource-d

## Development tools:

the app uses the tools below

React for main development
Redux for state managemnt
Redux-Thunk
axios for web service call


To run the app from your local computer, going to the project folder

1. npm install

   this will install all required modules
   
2. npm start

   This will run the app in the development mode.
   Open http://localhost:3000 to view it in the browser.
