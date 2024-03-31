import ReactDOM from "react-dom";
import App from "./components/App";
import Quotes from "./components/Quotes";
// import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// ReactDOM.render(
    
// //   <BrowserRouter>
//      {/* <Header /> */}
//     {/* <Routes>
    
//       <Route  path="" element={<App/>}/>     
//             <Route path="/Quotes" element={<Quotes/>}/>  
//     </Routes> */}
   
 
// //   </BrowserRouter>,
//   document.getElementById("root")
// );


ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );