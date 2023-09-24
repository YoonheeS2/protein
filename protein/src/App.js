import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import GoalButton from "./components/signup/GoalButton";
import ModeSelection from "./components/Page/ModeSelection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mode" element={<ModeSelection></ModeSelection>}></Route>
        <Route path="/home" element={<Welcome></Welcome>}></Route>
        <Route path="/goal" element={<GoalButton></GoalButton>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
