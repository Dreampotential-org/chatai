import React from "react";

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="200px"
      height="200px"
      style={{
        height: "24px",
        width: "24px",
        // background: "rgb(255, 255, 255)",
      }}
    >
      <g
        className="ldl-scale"
        style={{
          transformOrigin: "50% 50%",
          transform: "rotate(0deg) scale(0.8, 0.8)",
        }}
      >
        <g className="ldl-ani">
          <g className="ldl-layer">
            <g
              className="ldl-ani"
              style={{
                transform: "scale(0.91)",
                transformOrigin: "50px 50px",
                animation:
                  "1.11111s linear -0.833333s infinite normal forwards running breath-b327ec66-e9b3-4331-815a-2337b5ed09cc",
              }}
            >
              <circle
                strokeMiterlimit="10"
                strokeWidth="8"
                stroke="#333"
                fill="none"
                r="40"
                cy="50"
                cx="50"
                style={{ stroke: "rgb(225, 91, 100)" }}
              ></circle>
            </g>
          </g>
          <g
            className="ldl-layer"
            style={{
              transform: "scale(0.91)",
              transformOrigin: "50px 50px",
              animation:
                "1.11111s linear -1.11111s infinite normal forwards running breath-b327ec66-e9b3-4331-815a-2337b5ed09cc",
            }}
          >
            <path
              fill="#e15b64"
              d="M63.9 29L50 42.9 36.1 29c-2-2-5.2-2-7.1 0s-2 5.2 0 7.1L42.9 50 29 63.9c-2 2-2 5.2 0 7.1 2 2 5.2 2 7.1 0L50 57.1 63.9 71c2 2 5.2 2 7.1 0 2-2 2-5.2 0-7.1L57.1 50 71 36.1c2-2 2-5.2 0-7.1-1.9-2-5.1-2-7.1 0z"
              style={{ fill: "rgb(225, 91, 100)" }}
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default CloseIcon;
