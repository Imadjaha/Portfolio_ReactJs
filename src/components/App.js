
import React from "react";
import Profile from "./Profile";
import Qualifications from "./Qualifications"
import "../index.css";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
// import LightDarkMode from "./light-dark-mode";

// Functional Component
// -------------------
// function App(){
//     const myStyle = {textAlign: "center" , backgroundColor: "yellow"};
//     return(
//         <div style={myStyle}>
//             <p> Hello React</p>
//             <p> Hello World</p>
//         </div>
//     ); 
// }

// Class Component
// -------


class App extends React.Component{

    
    render(){
        
        return(
        <div >
        
        <div className="row">
        
        <Title/>
       <div className="column"> <Profile/></div>
         <div className="column"><Qualifications/></div>
        </div>
        <hr />
        <Projects/>
        <hr />
        <SocialProfiles/>
       
       </div>
        );
    }
}

export default App;
