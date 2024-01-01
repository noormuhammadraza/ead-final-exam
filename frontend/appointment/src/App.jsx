import { useState } from "react";
import "./App.css";
import CreateTimeSlot from "./components/CreateTimeSlot";
import BookTimeSlot from "./components/BookAppointment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<BookTimeSlot />} />
      <Route path="/createtimeslot" element={<BookTimeSlot />} />
    </Routes>
  );
}

export default App;
