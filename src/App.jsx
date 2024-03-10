import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Compete from "./pages/Compete";
import Problem from "./pages/Problem";
function App() {
  // console.log(import.meta.env.VITE_X_RAPID_API_HOST);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/compete' element={<Compete />} />
        <Route path='/problems/:id' element={<Problem />} />
      </Routes>
    </Router>
  );
}

export default App;
