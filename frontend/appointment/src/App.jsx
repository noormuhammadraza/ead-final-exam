import { useState } from "react";
import "./App.css";
import CreateTimeSlot from "./components/CreateTimeSlot";
import BookTimeSlot from "./components/BookAppointment";
import AvailTimeSlots from "./components/AvailTimeSlots";
import BookAppointment from "./components/BookAppointment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<BookTimeSlot />} />
      <Route path="/createtimeslot" element={<CreateTimeSlot />} />
      <Route path="/availtimeslots" element={<AvailTimeSlots />} />
      <Route path="/bookedappointment" element={<BookAppointment />} />
    </Routes>
  );
}

export default App;
