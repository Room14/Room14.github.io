/* eslint-disable no-undef */
import React, { Component } from "react";
import {
  getFisJson,
} from "../../constants/axiosApi";
import NewslettersPresent from "./NewslettersPresent";

export default class Newsletters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newslettersData: []
    };
  }

  componentDidMount() {
    this.getJson("/newsletter_sets/1-newsletters.json");
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
          newslettersData: results.data.NewsletterSetNewsletters,
        });
    }
    console.log(results);
    return results;
  }


  render() {
    return (
      <div className="text-center">
        <NewslettersPresent
          newslettersData={this.state.newslettersData}
        />
      </div>
    );
  }
}
