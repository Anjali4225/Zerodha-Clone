import React from "react";

function Universe() {
  return (
    <div className="container  mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even furthure with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" />
          <p className="text-muted text-small">Thematic investing platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media\goldenpiLogo.png" />
          <p className="text-muted text-small">Algo & strategy platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/sensibullLogo.svg" />
          <p className="text-muted text-small">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\zerodhaFundhouse.png" />
          <p className="text-muted text-small">Asset management</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/goldenpiLogo.png" />
          <p className="text-muted text-small">Bonds trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media\smallcaseLogo.png" />
          <p className="text-muted text-small">Insurance</p>
        </div>
        <button
          className="btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Universe;
