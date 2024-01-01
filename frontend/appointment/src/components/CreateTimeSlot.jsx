import React from "react";

const CreateTimeSlot = () => {
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
