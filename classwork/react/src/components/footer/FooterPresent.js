import React from "react";
import PropTypes from "prop-types";

const FooterPresent = () => {
  return (
    <div className="container-fluid top-container footer">
      <div className="mt-5 mb-3 p-4 bg-secondary text-light text-center">
        Page loaded at {new Date().toLocaleDateString()} -  
        {new Date().toLocaleTimeString()}
        <div className="mt-3">
          <a
            href="https://www.fairfieldintermediate.school.nz/"
            target="_blank"
            className="text-light"
            title="Fairfield Intermediate Offical Website"
          >
            <i className="fab fa-github mr-1"></i>FIS Offical
          </a>
        </div>
      </div>
    </div>
  );
};

FooterPresent.propTypes = {};
export default FooterPresent;
