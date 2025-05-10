import "./App.css";
import CampsitesList from "./features/campsites/CampsitesList.js";
import Header from "./app/components/Header.js";
import Footer from "./app/components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
