import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./components/Contacts/AddContact";
import Contacts from "./components/Contacts/Contacts";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/add-contact" element={<AddContact />} />
        {/* <Route path="/add-contact" element={<Contacts />} /> */}
      </Routes>
    </div>
  );
}

export default App;
