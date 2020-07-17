import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
const DailyChallenges = ({
  challenges,
  handleFieldChange,
  handleAnswerSubmit,
  answer,
  submittedAnswer,
}) => {
  console.log(challenges);
  let isCorrectAnswer = false;
  let yourAnswer = "";
  console.log(submittedAnswer);
  return (
    <>
      {/* <div className="text-center">
        <h4 className="text-primary">{challenges && challenges[0].date}</h4>
        <h5 className="text-secondary">
          {challenges && challenges[0].question}
        </h5>
        <h5 className="text-success">
          Choices: {challenges && challenges[0].choices}
        </h5>
        {isCorrectAnswer ? (
          "correct  "
        ) : (
          <form onSubmit={handleAnswerSubmit} id="form">
            <div className="text-success">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Answer
                  </span>
                </div>
                <input
                  type="text"
                  name="answer"
                  className="form-control text-success"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  value={answer}
                  onChange={handleFieldChange}
                />
                <div className="input-group-append">
                  <button className="btn btn-success" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div> */}

      {challenges &&
        challenges.map((item, index) => (
          <>
            {item.date == moment().format("DD/MM/YYYY") && (
              <>
                {(isCorrectAnswer = submittedAnswer == item.answer)}
                <div className="text-center" key={index}>
                  <h4 className="text-primary">
                    Daily Challenge {item.date} | Difficulty: {item.difficulty}
                  </h4>
                  <h5 className="text-secondary">{item.question}</h5>
                  <h5 className="text-info">Choices: {item.choices}</h5>
                  {isCorrectAnswer ? (
                    <h4 class="text-success">
                      <i class="fas fa-check mr-1"></i>
                      Correct!
                    </h4>
                  ) : (
                    <form onSubmit={handleAnswerSubmit} id="form">
                      {submittedAnswer != "" && (
                        <h4 class="text-danger">
                          <i class="fas fa-times mr-1"></i>
                          Wrong answer!
                        </h4>
                      )}
                      <div className="text-success">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="inputGroup-sizing-default"
                            >
                              Answer
                            </span>
                          </div>
                          <input
                            type="text"
                            name="answer"
                            className="form-control text-success"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            value={answer}
                            onChange={handleFieldChange}
                            pattern="[a-eA-E]{1}"
                            placeholder="Enter Answer Letters A-E Only"
                            maxLength="1"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-success" type="submit">
                              Check
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </>
            )}
          </>
        ))}
      {/* {total > 0 && total > challenges.length && (
        <button
          className="btn btn-success m-2"
          name="displayAll"
          onClick={handleFieldChange}
          disabled={loading}
        >
          Display All Data
          {loading && <i className="fas fa-spinner fa-spin ml-1"></i>}
        </button>
      )} */}

      {/* Show additional information, pages, total */}
      {/* {total === 0 && <div className="text-danger">No result</div>}
      {total > 0 && challenges.length != total && (
        <div className="text-danger m-3">
          Found {challenges.length}{" "}
          {challenges.length == 1 ? "result" : "results"}
          in {total}
        </div>
      )} */}
    </>
  );
};

DailyChallenges.propTypes = {
  challenges: PropTypes.array,
  handleFieldChange: PropTypes.func,
  handleAnswerSubmit: PropTypes.func,
};

export default DailyChallenges;
