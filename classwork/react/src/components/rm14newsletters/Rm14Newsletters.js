/* eslint-disable no-undef */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { githubRepository, githubRawFile } from "../../constants/axiosApi";
import SchoolNewslettersPresent from "./Rm14NewslettersPresent";

export default class SchoolNewsletters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolnewslettersData: [],
    };
  }

  componentDidMount() {
    this.getRawFileContent(
      githubRepository.initDirectory + "/" + githubRepository.configFile
    );
    // this.listAllFiles();
    console.log("componentDidMount", this.state);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }
  async getRawFileContent(fileName) {
    const results = await githubRawFile.get("/" + fileName).catch((error) => {
      // console.log(error, error.response);
      this.setState({
        loading: false,
        fileContent:
          githubRepository.axiosErrorMsg +
          "<div className='text-danger'>" +
          error.response.data.message +
          "</div>",
      });
    });

    if (results.data.newsletter) {
      if (fileName.indexOf(githubRepository.configFile) != -1) {
        console.log(results);
        this.setState({
          schoolnewslettersData: results.data.newsletter,
        });
      }
    }
    console.log(results);
    console.log(this.state);
    return results;
  }
  render() {
    return (
      <div className="text-center">
        <SchoolNewslettersPresent
          schoolnewslettersData={this.state.schoolnewslettersData}
        />
      </div>
    );
  }
}
