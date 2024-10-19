import GraphVisualizer from "./components/GraphVisualizer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PredictionForm from "./components/PredictionForm";
import Monitor from "./components/Monitor";


function App() {
  return (
 <>
<Router>
      <Routes>
        <Route path="/" element={
          <Home/>
        } />
        <Route path="/visualize" element={
          <GraphVisualizer/>
        } />
        <Route path="/predict" element={
          <PredictionForm/>
        } />
        <Route path="/monitor" element={
          <Monitor/>
        } />
      </Routes>
    </Router>
 </>
  );
}

export default App;
