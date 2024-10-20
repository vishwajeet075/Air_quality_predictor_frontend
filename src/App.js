import GraphVisualizer from "./components/GraphVisualizer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import Monitor from "./components/Monitor";
import PredictComponent from "./components/PredictComponent";


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
         <PredictComponent/>
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
