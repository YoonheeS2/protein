import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StyledComponent from "./components/StyledComponent";
import ProfileDetailPage01 from "./pages/ProfileDetailPage01";
import ProfileDetailPage02 from "./pages/ProfileDetailPage02";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StyledComponent></StyledComponent>}></Route>
        <Route
          path="/signup"
          element={<ProfileDetailPage01></ProfileDetailPage01>}
        ></Route>
        <Route
          path="/signup2"
          element={<ProfileDetailPage02></ProfileDetailPage02>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
