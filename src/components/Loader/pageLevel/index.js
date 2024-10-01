import React from "react";

const SpinLoading = ({ size = 60, className }) => {
  return (
    <span
      className={
        `flex border-2 border-[#BB9533] border-l-transparent border-b-[#BB9533] rounded-full animate-spin ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    ></span>
  );
};

export default SpinLoading;