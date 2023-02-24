import React, { useState } from "react";
import "./pages.css";

const Home = () => {
  const [plantName, setPlantName] = useState("");
  const [conferenceRoom, setConferenceRoom] = useState("");

  const conferenceRooms = [
    { key: " --select-- ", value: " --Select-- " },
    {
      key: "dyaneshwari training room",
      value: "Dyaneshwari Training Room",
    },
    { key: "ganga vc", value: "Ganga VC" },
    { key: "indrayani", value: "Indrayani" },
    { key: "mula", value: "Mula" },
    { key: "mutha", value: "Mutha" },
  ];

  // const plants = [
  //   { key: " --select-- ", value: " --Select--  " },
  //   { key: "corporate", value: "Corporate" },
  //   { key: "mumbai (H.O.)", value: "Mumbai (H.O.)" },
  //   { key: "ador international", value: "Ador International" },
  //   {
  //     key: "biz strategy/ccc/technical support",
  //     value: "Biz Strategy/ CCC/Technical Support",
  //   },
  //   { key: "consumables manufacturing", value: "Consumables Manufacturing" },
  //   { key: "consumables tdc", value: "Consumables TDC" },
  // ];

  return (
    <>
      <article>
        <div className="details">
          <label htmlFor="plantName" className="label">
            Plant Name
          </label>
          <input
            type="text"
            className="inputField"
            id="plantName"
            name="plantName"
            placeholder="Chinchwad"
            disabled
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
          />
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
      </article>
    </>
  );
};

export default Home;
