import React, { useState } from "react";
import "./pages.css";

const Remote = () => {
  const [plantName, setPlantName] = useState("--select--");
  const [conferenceRoom, setConferenceRoom] = useState("");

  const plants = [
    { key: " --select-- ", value: " --Select--  " },
    { key: "ador fontech", value: "Ador Fontech" },
    { key: "chinchwad", value: "Chinchwad" },
    { key: "mumbai (H.O.)", value: "Mumbai (H.O.)" },
    { key: "raipur", value: "Raipur" },
    { key: "silvassa", value: "Silvassa" },
  ];

  const conferenceRooms = [
    { key: " --select-- ", value: " --Select--  " },
    { key: "dyaneshwari training room", value: "Dyaneshwari Training Room" },
    { key: "ganga vc", value: "Ganga VC" },
    { key: "indrayani", value: "Indrayani" },
    { key: "mula", value: "Mula" },
    { key: "mutha", value: "Mutha" },
  ];

  return (
    <>
      <article>
        <div className="remote-col">
          <div className="details">
            <label htmlFor="plantName" className="label">
              Plant Name
            </label>
            <select
              className="dropDown"
              id="plantName"
              name="plantName"
              value={plantName}
              onChange={(e) => setPlantName(e.target.value)}
            >
              {plants.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>

          <div className="details">
            <label htmlFor="conferenceRoom" className="label">
              Select Conference Room
            </label>
            <select
              className="dropDown"
              id="conferenceRoom"
              name="conferenceRoom"
              value={conferenceRoom}
              onChange={(e) => setConferenceRoom(e.target.value)}
            >
              {conferenceRooms.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
          <br />
        </div>
      </article>
    </>
  );
};

export default Remote;
