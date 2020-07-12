/* eslint-disable no-undef */
import React, { Component } from "react";
import {
  getFisJson,
} from "../../constants/axiosApi";
import CalendarPresent from "./CalendarPresent";
import moment from "moment"

export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarData: []
    };
  }

  componentDidMount() {
    this.getJson("/173/calendars/1-calendar.json?start="+moment().subtract(1,"month").format('YYYY-MM-DD')+"&end="+moment().add(1,"year").format('YYYY-MM-DD'));
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
          calendarData: results.data,
        });
    }
    console.log(results.data);
    return results;
  }


  render() {
    return (
      <div className="text-center">
        <CalendarPresent
          calendarData={this.state.calendarData}
        />
      </div>
    );
  }
}
