/* eslint-disable no-sequences */
import {Routes, Route } from "react-router-dom";

// Banner
import Banner from "./components/Banner/Banner";
// Page d'accueil
import Home from './pages/Home/Home';
// Page Apropos
import Apropos from "./pages/Apropos/Apropos";
// Page Contact
import Contact from "./pages/Contact/Contact";
// Footer
import Footer from './components/Footer/Footer';

function App() {
  return (
<div className="App">
  <Banner/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Apropos" element={<Apropos />} />
    <Route path="/Contact" element={<Contact />} />
  </Routes>
<Footer/>
</div>
  );
}
export default App;
