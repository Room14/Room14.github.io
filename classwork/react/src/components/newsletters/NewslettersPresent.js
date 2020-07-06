import React from "react";
import PropTypes from "prop-types";
// import WebsiteAppResults from "./WebsiteAppResults";
// import WebsiteAppFileContent from "./WebsiteAppFileContent";

const NewslettersPresent = ({
  newslettersData,
}) => {
  return (
    <div className="mt-1 mb-5 pt-1 pb-5 pl-4 text-dark">
      <div className="text-secondary mb-3">
        <h2>
        FIS Newsletters
        </h2>
      </div>
  <div>

  {newslettersData.length > 0 &&
        newslettersData.map((item, index) => (
          <div className="row text-left border-bottom p-3" key={index}>
            <div className="col-md">
              <span className="badge badge-secondary">{index + 1}</span>{" "}
              <a
                className="btn btn-sm"
                href={item.url}
                target="_blank"
              >
                {item.name}
              </a>
              {index < 1 && <embed src={item.url} className="embed-responsive" height="800px" />}
              {/* <embed src={item.url} className="embed-responsive" height="800px" /> */}
            </div>
          </div>
        ))}
  </div>
    </div>
  );
};

NewslettersPresent.propTypes = {
  newslettersData: PropTypes.array
};

export default NewslettersPresent;
