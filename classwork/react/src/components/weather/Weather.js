/* eslint-disable no-undef */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { getWeatherJson, githubRepository } from "../../constants/axiosApi";
import WeatherPresent from "./WeatherPresent";
import moment from "moment";

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: [],
      dailyData: [],
    };
  }

  componentDidMount() {
    this.getWeather("/onecall?lon=175.287689&lat=-37.787689");

    // this.listAllFiles();
    console.log("componentDidMount", this.state);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }

  async getWeather(fileName) {
    const results = await getWeatherJson.get(fileName).catch((error) => {
      console.log(error, error.response);
    });

    if (results) {
      this.setState({
        weatherData: results.data.hourly,
        dailyData: results.data.daily,
      });
    }
    console.log("weather:", results);
    return results;
  }
  render() {
    return (
      <div className="text-center">
        <WeatherPresent
          weatherData={this.state.weatherData}
          dailyData={this.state.dailyData}
        />
      </div>
    );
  }
}
