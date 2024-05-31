import React from "react";
import profilePicture from "../Assets/porfilePic.jpeg";
import "../index.css";


class Profile extends React.Component {
  constructor() {
    super();

    this.state = { displayBio: false };
    this.toggle = this.toggle.bind(this); //   to let toggle acces all objects
  }
  toggle() {
    // this.setState({ displayBio: !this.state.displayBio });

      this.setState((prevState) => ({
        displayBio: !prevState.displayBio,
      }));
  }
  render() {
    return (
      <div>
        <img src={profilePicture} className="profile" alt="Profile" />
        <h1>Hello There</h1>
        <p>My Name is Aimad Bouchouaf</p>
        <p>Computer Science Student</p>
      
          <div className={`text-container ${this.state.displayBio ? "show" : ""}`}>
            <p style={{ textAlign: "center" }}>
              As a versatile computer science student, I excel in database
              management, frontend development, and specification handling.
              Proficient in MySQL, C, C++, Python, PostgreSQL, and OOP. Practical
              experience at ZWILLING J.A. Henckels LLC enhanced my skills in
              SQL, frontend setup, and data maintenance. Strong in HTML, CSS,
              JavaScript and React. Committed to continual learning, I offer
              expertise and adaptability to drive innovation
            </p>
            </div>
            <button onClick={this.toggle} className="btn1">
          {this.state.displayBio ? "Hide" : "Show More"}
        </button>
      
      </div>
     
    );
  }

}
export default Profile;

