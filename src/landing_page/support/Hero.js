import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "rgb(56,126,209)" }}
    >
      <div className="row text-center mt-5">
        <div className="col mt-5 ">
          <h4 style={{ color: "white" }}>Support Portal</h4>
        </div>
        <div className="col mt-5 " style={{ color: "white" }}>
          <a href="" style={{ color: "white" }}>
            Track Tickets
          </a>
        </div>
      </div>

      <div className="row mt-5 ">
        <div className="col   mb-5 p-3 " style={{ marginLeft: "175px" }}>
          <h2 className="fs-5" style={{ color: "white" }}>
            Search for an answer or browser help topics to create a ticket
          </h2>
          <input
            className="mt-3 mb-3 p-3"
            style={{
              width: "100%",
              height: "50px",
              border: "none",
              outline: "none",
              borderRadius: "5px",
            }}
            type="search"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
          />{" "}
          <br />
          <a href="" style={{ color: "white" }}>
            Track account opening
          </a>{" "}
          <a href="" style={{ marginLeft: "15px", color: "white" }}>
            Track segment activation
          </a>{" "}
          <a href="" style={{ marginLeft: "10px", color: "white" }}>
            Intraday.
          </a>{" "}
          <br />
          <a href="" style={{ color: "white" }}>
            margins
          </a>{" "}
          <a href="" style={{ marginLeft: "15px", color: "white" }}>
            Kite user manual
          </a>
        </div>

        <div className="col   mb-5 p-3" style={{ marginLeft: "40px" }}>
          <h2 className="fs-5" style={{ color: "white" }}>
            Featured
          </h2>
          <ol style={{ color: "white" }}>
            <li>
              <a href="" style={{ color: "white" }}>
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <br />
            <li>
              <a href="" style={{ color: "white" }}>
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
