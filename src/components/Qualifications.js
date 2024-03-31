import React from "react";
const Qualifications = () => {
  return (
    <div>
      <h1>My Qualifications</h1>
      <li>
        <h3>Bachelor of Science in Computer Science (Current)</h3>
        <p>
          <i>October 2022 – Present</i>{" "}
        </p>
        <a href="http://www.uni-wuppertal.de" target="_blank" rel="noreferrer">
          <span>Univerisity Wuppertal Germany</span>
        </a>
      </li>
      <hr />
      <li>
        <h3> Bachelor's Degree in Chemistry </h3>
        <i>September 2017 – June 2020</i>

        <p>
          <p>Univerisity Mohammed Premmier Oujda Morocco</p>
         
          Thesis Topic: Comparative Study of Perovskites: BaTiO3, Ba1-XSrXTiO3,
          BaTi1-XZrXO3 Graduation Grade: 2.2
        </p>
      </li>
      <hr />
      <li>
        <h3>Working student Laboratory at Zwilling J.A. Henckels, Solingen</h3>
        <p>
          <i>March 2023 – Present </i>
          <br />
          Responsibilities include administrative tasks in setting up the LIMS
          system (Laboratory Information Management System), integration of SQL
          queries into the frontend, troubleshooting and optimization of SQL
          queries, and creation of dashboards for data visualization.
        </p>
      </li>
      <hr />
    </div>
  );
};

export default Qualifications;
