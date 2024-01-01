import React from "react";

const BookAppointment = () => {
  return (
    <div>
      <h1>Book Time Slot</h1>
      <label>
        <h3>Name</h3>
      </label>
      <input type="text" />
      <label>
        <h3>Email</h3>
      </label>
      <input type="email" />
      <div>
        <button>Create Appointment</button>
      </div>
    </div>
  );
};

export default BookAppointment;
