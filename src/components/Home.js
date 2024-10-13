import React from 'react'

import { useNavigate } from "react-router-dom";

export default function Home() {
       const navigate = useNavigate();
  return (
   <>
    <div className="container mx-auto mt-10 text-center">
    <h1 className="text-4xl font-bold mb-4">Air Quality Predictor</h1>
    <p className="mb-4">Welcome to the Air Quality Predictor application.</p>

    <button onClick={()=>navigate('/predict')} style={{backgroundColor:'blue' , borderRadius : '10px' , color : 'white', padding : '10px 15px ' , border :'1px solid blue'}}>Predict the aqi</button>
    <button onClick={()=>navigate('/visualize')} style={{backgroundColor:'blue' , borderRadius : '10px' , color : 'white' , marginLeft:'30px' ,  padding : '10px 15px ' ,border : '1px solid blue'}}>Visualize the data</button>
  
  </div>
   </>
  )
}
