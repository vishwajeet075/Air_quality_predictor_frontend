import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import GraphVisualizer from "./components/GraphVisualizer";
import PredictComponent from './components/PredictComponent';

import Monitor from "./components/Monitor";
import FAQ from "./components/faq"; // Import the FAQ componentimport PredictComponent from "./components/PredictComponent";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visualize" element={<GraphVisualizer />} />
          <Route path="/predict" element={<PredictComponent />} />
          <Route path="/monitor" element={<Monitor />} />
          <Route path="/faq" element={<FAQ />} /> {/* Added FAQ Route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
