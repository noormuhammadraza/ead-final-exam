import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
im;

const CreateTimeSlot = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleCreateTimeSlot = () => {
    const data = {
      startTime,
      endTime,
    };
    axios.post("http://localhost:5000/createtimeslot", data);
  };

  return (
    <div>
      <h1>Create Time Slot</h1>
      <label htmlFor="start-time">
        <h3>Start Time</h3>
      </label>
      <input id="start-time" type="text" />
      <label htmlFor="end-time">
        <h3>End Time</h3>
      </label>
      <input id="end-time" type="text" />
      <div>
        <button>Create Slot</button>
      </div>
    </div>
  );
};

export default CreateTimeSlot;
