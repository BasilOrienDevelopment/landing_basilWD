import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import CoursesPage from "./pages/CoursesPage";
import AboutPage from "./pages/AboutPage";
import RegistrationForm from "./pages/Register";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/request" element={<RegistrationForm />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
