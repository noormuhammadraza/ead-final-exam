import React from "react";

const BookTimeSlot = () => {
  return (
    <div>
      <h1>Book Time Slot</h1>
      <label htmlFor="start-time">
        <h3>Name</h3>
      </label>
      <input id="start-time" type="text" />
      <label htmlFor="end-time">
        <h3>Email</h3>
      </label>
      <input id="end-time" type="text" />
      <div>
        <button>Create Slot</button>
      </div>
    </div>
  );
};

export default BookTimeSlot;
