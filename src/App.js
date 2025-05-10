import "./App.css";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage.js";
import Header from "./app/components/Header.js";
import Footer from "./app/components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
