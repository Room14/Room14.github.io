import React from "react";
import PropTypes from "prop-types";
// import WebsiteAppResults from "./WebsiteAppResults";
// import WebsiteAppFileContent from "./WebsiteAppFileContent";
import moment from "moment"
const WeatherPresent = ({
  weatherData,
}) => {
  return (
    <div className="mt-1 mb-5 pt-1 pb-5 pl-4 text-dark">
      <div className="text-secondary mb-3">
        <h2>
        FIS Weather
        </h2>
      </div>
  <div className='row'>

  {weatherData.length > 0 &&
        weatherData.map((item, index) => (
          <>
          <div className="col-md text-left border-bottom p-3" key={index}>
            {index == 0 ? <span className="badge badge-danger">{moment(item.dt,'X').format('MMMM Do dddd LT')}</span> : <span className="badge badge-primary">{moment(item.dt,'X').format('MMMM Do dddd LT')}</span>}
              {" "}
              <h6>
                {item.weather[0].description}
              </h6>
              <span className="badge badge-secondary">{item.temp + " Celcius"}</span>
              {console.log(moment(item.dt,'X').format('h'))}
              
              {/* {index < 2 && <embed src={item.url} className="embed-responsive" height="800px" />} */}
            </div>
            {(index+1) % 6 == 0 && <div class="w-100"></div>}
</>
        ))}
        
  </div>
    </div>
  );
};

WeatherPresent.propTypes = {
  weatherData: PropTypes.array
};

export default WeatherPresent;
