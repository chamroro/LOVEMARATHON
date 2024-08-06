import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Page2024 from "./routes/Page2024";
import GallaryPage from "./routes/GallaryPage";
import ApplyPage from "./routes/ApplyPage";
import CommunityPage from "./routes/CommunityPage";
import NoticePage from "./routes/NoticePage";

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/2024" element={<Page2024 />}></Route>
        <Route path="/gallary" element={<GallaryPage />}></Route>
        <Route path="/apply" element={<ApplyPage />}></Route>
        <Route path="/community" element={<CommunityPage />}></Route>
        <Route path="/notice" element={<NoticePage />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
