import React from "react";
import offline from '../Assests/image/offline.jpeg'
import online from '../Assests/image/online.jpeg'

const DoctorConsultancy = () => {
  return (
    <div className="DoctorConsultancy">
      <h1>Doctor Consultancy</h1>
      <div className="DoctorConsultancy-types">
        <div className="Features-card">
          <h1>Offline</h1>
          <img src={offline} alt="" />
          <p>Availability of best doctors within 5km radius</p>
          <button>Book Slot</button>
        </div>
        <div className="Features-card">
          <h1>online</h1>
          <img src={online} alt="" />
          <p>Availability of best doctors around the clock</p>
          <button>Book Slot</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorConsultancy;
