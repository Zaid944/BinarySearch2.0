import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Compete from "./pages/Compete";
import Problem from "./pages/Problem";
function App() {
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
