import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import homepagePoster from "./assets/homepageposter.png";

const HomePage = () => {
  const videoIds = [
    "H5crR0xM9Sk",
    "TSuoSdPVm9k",
    "0UNsqgkO7xk",
    "7CVJXd44Hek",
    "_4UrEpTi9gY",
    "15qJ6iDrLM0",
    "cEuSC2wtxxU",
    "8lUaf78DFAQ"
  ];

  const heroStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "1200px",
    boxSizing: "border-box",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // align content from top
    textAlign: "center",
    padding: "3rem 1rem 0 1rem", // added 3rem padding-top
    margin: "0 auto",
    marginBottom: "10rem", // increased spacing between hero buttons and videos section
    // Removed backgroundColor
  };

  const flyerStyle = {
    width: "100%",
    maxWidth: "1200px",
    maxHeight: "70vh",
    objectFit: "contain",
    borderRadius: "0.5rem",
    boxShadow: "0 8px 16px rgba(0,0,0,0.6)",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    marginTop: "2rem",
    backgroundColor: "#e62b1e",
    color: "white",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "0.375rem",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s",
    textDecoration: "none",
    display: "inline-block",
  };

  const hoverButtonStyle = {
    backgroundColor: "#b8261a",
    transform: "scale(1.05)",
  };

  const videosSectionStyle = {
    padding: "5rem 1.5rem",
    backgroundColor: "black",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    boxSizing: "border-box",
  };

  const videosGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
    boxSizing: "border-box",
    maxWidth: "100%",
  };

  const iframeWrapperStyle = {
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
    overflow: "hidden",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    boxSizing: "border-box",
    maxWidth: "100%",
    width: "100%",
  };

  const iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "0",
    boxSizing: "border-box",
  };

  const eventDate = new Date("January 9, 2026 23:59:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdownStyle = {
    color: "white",
    fontSize: "2.5rem",
    fontWeight: "900",
    marginTop: "2rem",
    textAlign: "center",
    padding: "1rem 2rem",
    borderRadius: "1rem",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    letterSpacing: "0.1em",
    textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        fontFamily: "sans-serif",
        overflowX: "hidden",
        overflowY: "auto",
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        width: "100%",
        minWidth: "100vw",
        minHeight: "100vh",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Hero Section */}
      <section style={heroStyle}>
        <a href="https://bit.ly/tedxutd26" target="_blank" rel="noopener noreferrer">
          <img
            src={homepagePoster}
            alt="TEDxUTD Upcoming Event"
            style={flyerStyle}
          />
        </a>
        <div style={countdownStyle}>
          {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        </div>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1.5rem", flexWrap: "wrap" }}>
          <a
            href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=TEDxUTD+2025&dates=20251215T180000Z/20251215T200000Z&details=Join+us+at+TEDxUTD+2025&sf=true&output=xml`}
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, hoverButtonStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Add to Google Calendar
          </a>
          <a
            href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ASUMMARY:TEDxUTD 2025%0ADTSTART:20251215T180000Z%0ADTEND:20251215T200000Z%0ALOCATION:UT Dallas%0ADESCRIPTION:Join us at TEDxUTD 2025%0AEND:VEVENT%0AEND:VCALENDAR"
            download="TEDxUTD2025.ics"
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, hoverButtonStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Add to iCal/Outlook
          </a>
        </div>
        <Link
          to="/events"
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverButtonStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
        >
          Check out our other upcoming events!
        </Link>
      </section>

      {/* Featured Videos */}
      <section style={videosSectionStyle}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "800" }}>Highlight Videos</h2>
        <div style={videosGridStyle}>
          {videoIds.map((id, index) => (
            <div key={index} style={iframeWrapperStyle}>
              <iframe
                style={iframeStyle}
                src={`https://www.youtube.com/embed/${id}`}
                title={`TEDxUTD Talk ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2rem",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <Link
            to="/talks"
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, hoverButtonStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Check out other TEDxUTD talks!
          </Link>
          <Link
            to="/conference2024"
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, hoverButtonStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Learn more about the 2024 Conference!
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <section
        style={{
          padding: "5rem 1.5rem",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          marginTop: "4rem",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "2rem" }}>
          Contact Us
        </h2>
        <form
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! (This is a demo)");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "1px solid #333",
              backgroundColor: "black",
              color: "white",
              fontSize: "1rem",
              outline: "none",
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "1px solid #333",
              backgroundColor: "black",
              color: "white",
              fontSize: "1rem",
              outline: "none",
            }}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "1px solid #333",
              backgroundColor: "black",
              color: "white",
              fontSize: "1rem",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, hoverButtonStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;