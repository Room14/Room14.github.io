import React from "react";
import PropTypes from "prop-types";
// import WebsiteAppResults from "./WebsiteAppResults";
// import WebsiteAppFileContent from "./WebsiteAppFileContent";

const SchoolNewslettersPresent = ({ schoolnewslettersData }) => {
  return (
    <div className="mt-1 mb-5 pt-1 pb-5 pl-4 text-dark">
      <div className="text-secondary mb-3">
        <h2>
          <i className="fas fa-paper-plane mr-1"></i>
          Room 14 Newsletters
        </h2>
      </div>
      <div>
        {schoolnewslettersData.map((item, index) => (
          <div className="row text-left border-bottom p-3" key={index}>
            <div className="col-md">
              <span className="badge badge-secondary">{item.time}</span>{" "}
              <h6 className="text text-secondary" target="_blank">
                {item.description}
              </h6>
              <img src={item.url} height="800px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

SchoolNewslettersPresent.propTypes = {
  schoolnewslettersData: PropTypes.array,
};

export default SchoolNewslettersPresent;
