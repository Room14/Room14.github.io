import React from "react";
import PropTypes from "prop-types";
// import WebsiteAppResults from "./WebsiteAppResults";
// import WebsiteAppFileContent from "./WebsiteAppFileContent";
import moment from "moment"
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
const weatherIcon = (weather) => {
  if(weather == 'Rain'){
    return <i className="fas fa-cloud-rain text-primary mr-1"></i>
  }
  else if(weather == 'Clouds'){
    return <i className="fas fa-cloud text-info mr-1"></i>
  }
  else{
    return <i class="fas fa-sun text-warning mr-1"></i>
  }
}
const WeatherPresent = ({
  weatherData,
  dailyData,
}) => {
  return (
    <div className="mt-1 mb-5 pt-1 pb-5 pl-4 text-dark">
      <div className="text-secondary mb-3">
        <h2>
        <i class="fas fa-cloud-sun text-secondary mr-1"></i>
        Hamilton Weather
        </h2>
      </div>
 

    <div className='row'>
    
    {dailyData.map((item, index) => (
          <>
          
          <div className="col-md text-left border-bottom p-3" key={index}>
          <h6 className='text-success'>
    {moment(item.dt,'X').format('MMMM Do dddd')}</h6>                {" "}
              <h6 className="text-info">
              {weatherIcon(item.weather[0].main)}
                {capitalize(item.weather[0].description)}
              </h6>
              <h6 className="text-secondary">{"Highest: "+Math.round(item.temp.max)+'°C'}</h6>
              <h6 className="text-secondary">{"Lowest: "+Math.round(item.temp.min)+'°C'}</h6>
              {console.log(moment(item.dt,'X').format('Do'))}
              
              {/* {index < 2 && <embed src={item.url} className="embed-responsive" height="800px" />} */}
            </div>
            {(index+1) % 8 == 0 && <div className="w-100"></div>}
          </>
        ))}
        
      </div>


  <div className='row'>
    
    {weatherData.map((item, index) => {
      const isValidTime = moment(item.dt,'X').format('HH') < 17.1 && moment(item.dt,'X').format('HH') > 6.9;
      const badgeClass = index == 0 ? "badge badge-danger" 
      : moment(item.dt,'X').format('HH') > 12 && moment(item.dt,'X').format('HH') < 2 
      ? "badge badge-warning" 
      : isValidTime ? "badge badge-success" 
      : "badge badge-secondary"
      
      return (
          <>
          <div className="col-md text-left border-bottom p-3" key={index}>
            <span className={badgeClass}>{moment(item.dt,'X').format('MMMM Do dddd LT')}
            </span>
              {" "}
              <h6>
              {moment(item.dt,'X').format('HH') > 11.9 && moment(item.dt,'X').format('HH') < 14 && <i className="fas text-warning fa-utensils mr-1"></i>}
                {weatherIcon(item.weather[0].main)}
                {capitalize(item.weather[0].description)}
              </h6>
              <span className="badge badge-secondary">{Math.round(item.temp) + "°C"}</span>
              {console.log(moment(item.dt,'X').format('h'))}
              
              {/* {index < 2 && <embed src={item.url} className="embed-responsive" height="800px" />} */}
            </div>
            {(index+1) % 6 == 0 && <div className="w-100"></div>}
  
          </>
        )
        
      }
      )}
        
      </div>
    </div>
  );
};

WeatherPresent.propTypes = {
  weatherData: PropTypes.array
};

export default WeatherPresent;
