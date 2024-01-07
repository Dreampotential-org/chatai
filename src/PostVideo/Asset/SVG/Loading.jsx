import React from "react";

const Loading = () => {
  return (
    <svg
      style={{
        // margin: "auto",
        background: "transparent",
        display: "block",
      }}
      width="24px"
      height="24px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#0a69aa"
        strokeWidth="10"
        r="38"
        strokeDasharray="179.0707812546182 61.690260418206066"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="0.970873786407767s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  );
};

export default Loading;
