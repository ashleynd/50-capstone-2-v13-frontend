import React from "react";
import "./LoadingSpinner.css";
import spinner from './spinner.gif';

/** Loading message used by components that fetch API data. */

function LoadingSpinner() {
  return (
      <div className="LoadingSpinner">
        {/* Loading ... */}
        <img src={spinner} alt="spinner" width="150px"></img>
      </div>
  );
}

export default LoadingSpinner;