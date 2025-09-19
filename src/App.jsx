import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import TalksPage from "./TalksPage";
import EventsPage from "./EventsPage";
import Conference2024Page from "./Conference2024Page";
import AboutPage from "./AboutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/talks" element={<TalksPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/conference2024" element={<Conference2024Page />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
