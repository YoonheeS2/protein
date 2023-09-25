import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProfileDetailPage01 from "./pages/ProfileDetailPage01";
import ProfileDetailPage02 from "./pages/ProfileDetailPage02";
import Nav from "./components/common/Nav";
import DietPage from "./pages/DietPage";
import CommunityPage from "./pages/CommunityPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/diet" element={<DietPage />}></Route>
        <Route path="/community" element={<CommunityPage />}></Route>
        <Route
          path="/signup"
          element={<ProfileDetailPage01></ProfileDetailPage01>}
        ></Route>
        <Route
          path="/signup2"
          element={<ProfileDetailPage02></ProfileDetailPage02>}
        ></Route>
      </Routes>
      <Nav></Nav>
    </BrowserRouter>
  );
}

export default App;
