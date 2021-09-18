import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MainPage from '../page/MainPage/MainPage';
// import DetailPage from '../page/DetailPage/DetailPage';

const WeatherApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState('SYDNEY');
  const [data, setData] = useState({});
  const [searchField, setSearchField] = useState('');
  // const [showDetails, setShowDetails] = useState(false);

  // const handleShowDetail = () => {

  // };

  const handleSeachFieldChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    if (searchField) {
      setLocation(searchField);
    }
  };

  useEffect(() => {
    const getWeatherData = async () => {
      const { rawData } = await axios.get(`https://jr-weather-app-server.herokuapp.com/api/weather/${location}`);
      const weatherData = rawData;
      setData(weatherData);
    };

    getWeatherData(location);
    setIsLoading(false);
  }, [location]);

  return (
    isLoading
      ? (
        <div> Lodaing  </div>
      ) : (
        <div className="weather-app">
          {/* {!showDetails ? ( */}
          <MainPage
            // onDetailClick={handleShowDetail}
            handleSeachFieldChange={handleSeachFieldChange}
            handleSubmitClick={handleSubmitClick}
            props={data}
          />
          {/* ) : (
            <DetailPage onDetailClick={handleShowDetail} props={this.state} />
          )} */}
        </div>
      )
  );
};

export default WeatherApp;
