import React from "react";
import PropTypes from "prop-types";
// import WebsiteAppResults from "./WebsiteAppResults";
// import WebsiteAppFileContent from "./WebsiteAppFileContent";
import moment from "moment";

const CalendarPresent = ({
  calendarData,
}) => {
  return (
    <div className="mt-1 mb-5 pt-1 pb-5 pl-4 text-dark">
      <div className="text-secondary mb-3">
        <h2>
        FIS Calendar
        </h2>
      </div>
  <div>
  {calendarData.length > 0 &&
        calendarData.map((item, index) => (
          <div className="row text-left border-bottom p-3" key={index}>
            <div className="col-md">
        <h3 className="badge badge-primary badge-lg">
          {moment(item.start).format('MMMM Do YYYY')}</h3>{" "}
              {/* <a
                className="btn btn-sm"
                // href={"https://fairfieldintermediate.school.nz" + item.url}
                target="_blank"
              >
                {item.title}
              </a> */}
             
              <span
                className="font-weight-bold"
                style={{color: item.color}}
              >
                
                {item.title}
              </span>
              {/* {index < 1 && <embed src={item.url} className="embed-responsive" height="800px" />} */}
              {moment().format('MMMM YYYY') == moment(item.start).format('MMMM YYYY')
               && <span className="badge badge-danger ml-2">{moment(item.start,"YYYY-MM-DD").fromNow()}</span>}
        {item.allDay == true 
        ? <span className="badge badge-success ml-2">All-Day</span> 
        : <span className="badge badge-secondary ml-2"> {moment(item.start).format('h:mm a') == moment(item.end).format('h:mm a') ?
        "on " + moment(item.end).format('h:mm a')
        : "from " + moment(item.start).format('h:mm a') + " to " +  moment(item.end).format('h:mm a')}</span>}
        {item.location != "" && <span className="badge badge-info ml-2">{"at "+item.location}</span>}
              {/* <embed src={item.url} className="embed-responsive" height="800px" /> */}
              
            </div>
          </div>
        ))}
  </div>
    </div>
  );
};

CalendarPresent.propTypes = {
  calendarData: PropTypes.array
};

export default CalendarPresent;
