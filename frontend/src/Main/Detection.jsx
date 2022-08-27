import React from "react";
import { FiSearch } from "react-icons/fi";
import "./Detection.css";

const Detection = () => {
  return (
    <div className="features">
      <div className="Features-top">
        <input placeholder="Available Features" />
        <FiSearch />
      </div>
      <div className="Features-bottom">
        <div className="Features-card">
          <h1>Disease name</h1>
          <input />
          <h1>Type</h1>
          <input />
          <h1>Symptoms of Disease</h1>
          <input />
        </div>
        <div className="Features-card">
          <h1>Disease name</h1>
          <input />
          <h1>Type</h1>
          <input />
          <h1>Symptoms of Disease</h1>
          <input />
        </div>
        <div className="Features-card">
          <h1>Disease name</h1>
          <input />
          <h1>Type</h1>
          <input />
          <h1>Symptoms of Disease</h1>
          <input />
        </div>
      </div>
    </div>
  );
};

export default Detection;
