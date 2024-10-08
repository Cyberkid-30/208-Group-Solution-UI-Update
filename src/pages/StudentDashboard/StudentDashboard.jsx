/* eslint-disable no-unused-vars */
import React from "react";
import "./StudentDashboard.css";
import Timetable from "../../components/Timetable/Timetable";
import Footer from "../../components/Footer/Footer";
import NavbarStudent from "../../components/Navbar2/NavbarStudent";

const StudentDashboard = () => {
  return (
    <main className="main-content">
      <NavbarStudent />
      <div className="container-1">
        <h2 className="welcome-msg">WELCOME BACK, Quetzal Tech!</h2>
        <h2 className="sessions-text">Sessions</h2>
        <section className="wrapper-1">
          {/*  */}
          <article className="sessions">
            <h2>DRUM123</h2>
            <div>
              <p>Instructor</p>
              <h3>Ampofo</h3>
            </div>
            <div>
              <p>Day</p>
              <h3>MONDAY</h3>
            </div>
            <div>
              <p>Time</p>
              <h3>4:00 pm</h3>
            </div>
          </article>

          {/*  */}
          <article className="sessions">
            <h2>DRUM323</h2>
            <div>
              <p>Instructor</p>
              <h3>Ampofo</h3>
            </div>
            <div>
              <p>Day</p>
              <h3>WEDNESDAY</h3>
            </div>
            <div>
              <p>Time</p>
              <h3>2:00 pm</h3>
            </div>
          </article>
        </section>
        <section className="wrapper-2">
          <h3>Instructor feedback & Announcements </h3>
          <Timetable />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default StudentDashboard;
