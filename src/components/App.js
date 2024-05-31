import React from "react";
import Profile from "./Profile";
import Qualifications from "./Qualifications";
import "../index.css";
import "./LightDarkMode.css"; // Import the CSS for the toggle switch
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import LightDarkMode from "./LightDarkMode";
import { DarkModeProvider } from "./DarkModeContext";

// Class Component
class App extends React.Component {
  render() {
    return (
      <DarkModeProvider>
        <div>
          <LightDarkMode />
          <div className="row">
            <Title />
            <div className="column">
              <Profile />
            </div>
            <div className="column">
              <Qualifications />
            </div>
          </div>
          <hr />
          <Projects />
          <hr />
          <SocialProfiles />
        </div>
      </DarkModeProvider>
    );
  }
}

export default App;
