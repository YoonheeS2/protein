import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProfileDetailPage01 from "./pages/ProfileDetailPage01";
import ProfileDetailPage02 from "./pages/ProfileDetailPage02";
import Nav from "./components/common/Nav";
import DietPage from "./pages/DietPage";
import CommunityPage from "./pages/CommunityPage";
import ModeSelection from "./pages/ModeSelection";
import LoginPage from "./pages/LoginPage";
import DietDetailPage from "./pages/DietDetailPage";
import ProfilePage from "./pages/ProfilePage";

import MainPage from "./pages/MainPage";
import SearchPopup from "./components/main/SearchPopup";
import PostCreatePage from "./pages/PostCreatePage";
import Sample from "./pages/Sample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/diet" element={<DietPage />}></Route>
        <Route path="/diet/detail" element={<DietDetailPage />}></Route>
        <Route path="/postCreate" element={<PostCreatePage />}></Route>
        <Route path="/community" element={<CommunityPage />}></Route>
        <Route path="/sample" element={<Sample />}></Route>
        <Route
          path="/signup"
          element={<ProfileDetailPage01></ProfileDetailPage01>}
        ></Route>
        <Route
          path="/signup2"
          element={<ProfileDetailPage02></ProfileDetailPage02>}
        ></Route>
        <Route
          path="/modeSelect"
          element={<ModeSelection></ModeSelection>}
        ></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route path="/popup" element={<SearchPopup />}></Route>
      </Routes>
      <Nav></Nav>
    </BrowserRouter>
  );
}

export default App;
