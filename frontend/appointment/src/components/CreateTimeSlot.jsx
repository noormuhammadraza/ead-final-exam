import React from "react";

const CreateTimeSlot = () => {
  return (
    <div>
      <label htmlFor="start-time">
        <h1>Start Time</h1>
      </label>
      <input id="start-time" type="text" />
      <label htmlFor="end-time">
        <h1>End Time</h1>
      </label>
      <input id="end-time" type="text" />
      <div>
        <button>Create Slot</button>
      </div>
    </div>
  );
};

export default CreateTimeSlot;
