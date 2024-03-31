import ReactDOM from "react-dom";
import App from "./components/App";
import Quotes from "./components/Quotes";
import Header from "./components/Header";
import {BrowserRouter, Routes , Route} from "react-router-dom" ;


ReactDOM.render(
    <BrowserRouter>
    <Header/>
        <Routes>
       
            <Route exact path="/" element={<App/>}/>     
            <Route path="/Quotes" element={<Quotes/>}/> 
            
        </Routes>
    </BrowserRouter>
    , document.getElementById("root"));

