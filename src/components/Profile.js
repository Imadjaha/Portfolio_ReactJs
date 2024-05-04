import React from "react";
import profilePicture from "../Assets/porfilePic.jpeg";


class Profile extends React.Component {
  constructor() {
    super();

    this.state = { displayBio: false };
    this.toggle = this.toggle.bind(this); //   to let toggle acces all objects
  }
  toggle() {
    // if (this.state.displayBio) {
    //   // this.state.displayBio = false;
    //   this.setState({ displayBio: false }); // with this methode render function will be automaticlly called
    // } else {
    //   // this.state.displayBio = true;
    //   this.setState({ displayBio: true });
    // }
    this.setState({ displayBio: !this.state.displayBio });
  }
  render() {
    return (
      <div>
        <img src={profilePicture} className="profile" alt="Profile" />
        <h1>Hello There</h1>
        <p>My Name is Aimad Bouchouaf</p>
        <p>Computer Science Student</p>
        {this.state.displayBio ? (
          <div>
            <p style={{ textAlign: "center" }}>
              As a versatile computer science student, I excel in database
              management, frontend development, and specification handling.
              Proficient in MySQL, C, C++, Python, PostgreSQL, and OOP. Practical
              experience at ZWILLING J.A. Henckels LLC enhanced my skills in
              SQL, frontend setup, and data maintenance. Strong in HTML, CSS, ,
              JavaScript and React. Committed to continual learning, I offer
              expertise and adaptability to drive innovation
            </p>

            <button onClick={this.toggle} className="btn1">
              Hide
            </button>
          </div>
        ) : (
          <button onClick={this.toggle} className="btn1">
            Show More
          </button>
        )}
      </div>
    );
  }
}

export default Profile;
