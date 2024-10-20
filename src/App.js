import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import GraphVisualizer from "./components/GraphVisualizer";
import PredictionForm from "./components/PredictionForm";
import Monitor from "./components/Monitor";
import FAQ from "./components/faq"; // Import the FAQ component

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visualize" element={<GraphVisualizer />} />
          <Route path="/predict" element={<PredictionForm />} />
          <Route path="/monitor" element={<Monitor />} />
          <Route path="/faq" element={<FAQ />} /> {/* Added FAQ Route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
