/* eslint-disable no-undef */
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  getFisJson,
  getWeatherJson,
} from "../../constants/axiosApi";
import NoticesPresent from "./NoticesPresent";

export default class Notices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noticesData: []
    };
  }

  componentDidMount() {
    this.getJson("/newsletter_sets/2-student-notices-sports-draws.json");
    this.getWeather("/onecall?lon=175.287689&lat=-37.787689");
    
    // this.listAllFiles();
    console.log("componentDidMount", this.state);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }
 
  async getJson(fileName) {
    const results = await getFisJson.get(fileName).catch((error) => {
      console.log(error, error.response);
    });

    if (results.data) {
        this.setState({
          noticesData: results.data.NewsletterSetNewsletters,
        });
    }
    console.log(results);
    return results;
  }
  async getWeather(fileName) {
    const results = await getWeatherJson.get(fileName).catch((error) => {
      console.log(error, error.response);
    });

    // if (results.data) {
        // this.setState({
        //   noticesData: results.data.NewsletterSetNewsletters,
        // });
    // }
    console.log("weather:",results);
    return results;
  }
  render() {
    return (
      <div className="text-center">
        <NoticesPresent
          noticesData={this.state.noticesData}
        />
      </div>
    );
  }
}
