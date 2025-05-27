import "./App.css";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage.js";
import Header from "./app/components/Header.js";
import Footer from "./app/components/Footer.js";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import ContactPage from "./pages/ContactPage.js";
import CampsiteDetailPage from "./pages/CampsiteDetailPage.js";
import AboutPage from "./pages/AboutPage.js";

function App() {
  return (
    <div className="App">
      <Header />
      {/*<CampsitesDirectoryPage />*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="directory" element={<CampsitesDirectoryPage />} />
        <Route path="directory/:campsiteId" element={<CampsiteDetailPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
