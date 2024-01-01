import { useState } from "react";
import "./App.css";
import CreateTimeSlot from "./components/CreateTimeSlot";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CreateTimeSlot />
    </div>
  );
}

export default App;
