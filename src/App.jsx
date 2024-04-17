import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navigation from "./components/Navigation";
import HomeScreen from "./pages/HomeScreen";
import MyBudget from "./pages/MyBudget";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/my-budget" element={<MyBudget />} />
      </Routes>
    </Router>
  );
}

export default App;
