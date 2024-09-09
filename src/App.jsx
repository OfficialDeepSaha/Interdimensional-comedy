import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login"; // Assuming you have a Login component
import Index from "./index";
import { Home } from "./Home";
import CreateComedy from "./CreateComedy";
import  Subscription from "./Subscription";
import MusicGenerator from "./MusicGenerator";
import Profile from "./Profile";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home"  element={<Home/>}/>
        <Route path="/create-comedy" element={<CreateComedy/>} />
        <Route path="/subscription" element={<Subscription/>} />
        <Route path="/create-music" element={<MusicGenerator/>} />
        <Route path="/profile" element={<Profile/>} />
        
        </Routes>
        <ToastContainer />
    </Router>
    
  );
}

export default App;
