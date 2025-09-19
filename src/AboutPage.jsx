import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const milestones = [
    { year: "2018", event: "TEDxUTD was founded and hosted its first event." },
    { year: "2019", event: "Expanded to larger venues with more speakers." },
    { year: "2021", event: "Hosted hybrid events with global online reach." },
    { year: "2023", event: "Introduced themed Salons and community events." },
    { year: "2024", event: "Biggest conference yet with 6 major talks." },
  ];

  const team = [
    { name: "Asmita Vadde", role: "President" },
    { name: "Salsabil Aziz", role: "Vice President" },
    { name: "Shriya Kalyan", role: "Director of Technology" },
    { name: "Mariyah Syed", role: "Director of Licensing" },
    { name: "Kaylyn Lau", role: "Director of Fundraising (Treasurer)" },
    { name: "Pranavi Yedluri", role: "Director of Logistics" },
    { name: "Madhuvanthi Magge", role: "Director of Logistics" },
    { name: "Ananya Karthik", role: "Director of Content" },
    { name: "Samantha Vuong", role: "Director of Outreach" },
    { name: "Isma Siddiqi", role: "Director of Design" },
    { name: "Saamya Gupta", role: "Director of Design" },
    { name: "Yusra Mohammed", role: "Director of Operations (Secretary)" },
    { name: "Preet Patel", role: "Director of Operations (Secretary)" },
    { name: "Khaylenn Cortez", role: "Director of Marketing" },
    { name: "Duaa Sarayi", role: "Outreach Assistant" },
    { name: "Nu Nguyen", role: "Design Assistant" },
    { name: "Fatma Ikibas", role: "Marketing Committee" },
    { name: "Nandini Patel", role: "Marketing Committee" },
    { name: "Raagavika Govindarajan", role: "Logistics Assistant" },
    { name: "Abhilash Kulkarni", role: "Logistics Committee" },
    { name: "Rohit Savant", role: "Photographer/Videographer" },
  ];

  // Inline style objects
  const mainStyle = {
    background: "#000",
    color: "#fff",
    fontFamily: "sans-serif",
    minHeight: "100vh",
    boxSizing: "border-box",
    overflowX: "hidden",
  };
  const heroSection = {
    padding: "80px 0 80px 0",
    textAlign: "center",
  };
  const heroTitle = {
    fontSize: "3rem",
    fontWeight: 800,
    letterSpacing: "-1px",
    margin: 0,
    lineHeight: 1.1,
  };
  const blurbSection = {
    padding: "48px 24px",
    maxWidth:  "700px",
    margin: "0 auto",
    textAlign: "center",
  };
  const blurbText = {
    fontSize: "1.125rem",
    color: "#d1d5db",
    lineHeight: 1.7,
    margin: 0,
    fontWeight: 400,
  };
  const timelineSection = {
    padding: "48px 24px",
    boxSizing: "border-box",
  };
  const timelineTitle = {
    fontSize: "2.25rem",
    fontWeight: 700,
    marginBottom: "40px",
    textAlign: "center",
  };
  const timelineContainer = {
    position: "relative",
    borderLeft: "2px solid #52525b",
    maxWidth: "700px",
    margin: "0 auto",
    boxSizing: "border-box",
  };
  const timelineItem = {
    marginBottom: "40px",
    marginLeft: "24px",
    position: "relative",
  };
  const timelineDot = {
    position: "absolute",
    width: "16px",
    height: "16px",
    background: "#e62b1e",
    borderRadius: "50%",
    left: "-34px",
    top: "4px",
    border: "2px solid #fff",
    boxSizing: "border-box",
    zIndex: 1,
  };
  const timelineYear = {
    fontSize: "1.25rem",
    fontWeight: 700,
    marginBottom: "4px",
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
  };
  const timelineEvent = {
    color: "#d1d5db",
    margin: 0,
    fontSize: "1rem",
  };
  const teamSection = {
    padding: "48px 24px",
    background: "#18181b",
    boxSizing: "border-box",
  };
  const teamTitle = {
    fontSize: "2.25rem",
    fontWeight: 700,
    marginBottom: "40px",
    textAlign: "center",
  };
  // Responsive grid via inline style and media queries
  const teamGrid = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "32px",
    maxWidth: "1200px",
    margin: "0 auto",
  };
  // Responsive breakpoints via media queries
  const teamGridMedia = `
    @media (min-width: 600px) {
      .tedx-team-grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
    @media (min-width: 900px) {
      .tedx-team-grid {
        grid-template-columns: repeat(4, 1fr) !important;
      }
    }
  `;
  const teamCard = {
    textAlign: "center",
    background: "#000",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
    transition: "transform 0.3s",
    cursor: "pointer",
    position: "relative",
    zIndex: 0,
  };
  const teamPhoto = {
    width: "128px",
    height: "128px",
    background: "#52525b",
    borderRadius: "50%",
    margin: "0 auto 16px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#a3a3a3",
    fontSize: "1.25rem",
    fontWeight: 600,
    userSelect: "none",
  };
  const teamName = {
    fontSize: "1.25rem",
    fontWeight: 700,
    marginBottom: "2px",
    marginTop: 0,
  };
  const teamRole = {
    color: "#e62b1e",
    fontWeight: 500,
    fontSize: "1rem",
    margin: 0,
  };
  const ctaSection = {
    padding: "80px 0",
    textAlign: "center",
  };
  const ctaButton = {
    background: "#e62b1e",
    color: "#fff",
    padding: "16px 32px",
    borderRadius: "8px",
    fontSize: "1.25rem",
    fontWeight: 700,
    border: "none",
    outline: "none",
    cursor: "pointer",
    transition: "transform 0.3s, background 0.3s",
    display: "inline-block",
    textDecoration: "none",
    marginTop: 0,
  };

  // For hover effects, use event handlers and CSS class for team card and CTA button
  // We'll use React state for hover if needed, or use a global style

  return (
    <div style={mainStyle}>
      {/* Responsive grid styles for team */}
      <style>
        {teamGridMedia}
        {`
          .tedx-team-card:hover {
            transform: scale(1.05);
            z-index: 2;
          }
          .tedx-cta-btn:hover {
            background: #b91c1c;
            transform: scale(1.05);
          }
        `}
      </style>
      {/* Hero */}
      <section style={heroSection}>
        <h1 style={heroTitle}>About TEDxUTD</h1>
      </section>

      {/* Blurb */}
      <section style={blurbSection}>
        <p style={blurbText}>
          TEDx is a grassroots initiative, created in the spirit of TED’s
          overall mission to research and discover “ideas worth spreading.” At
          TEDxUTD, we aim to amplify the voices of our diverse community,
          empowering students, faculty, and leaders to share groundbreaking
          ideas that inspire change. (Placeholder text)
        </p>
      </section>

      {/* Timeline */}
      <section style={timelineSection}>
        <h2 style={timelineTitle}>Our Journey</h2>
        <div style={timelineContainer}>
          {milestones.map((item, idx) => (
            <div key={idx} style={timelineItem}>
              <div style={timelineDot}></div>
              <h3 style={timelineYear}>{item.year}</h3>
              <p style={timelineEvent}>{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={teamSection}>
        <h2 style={teamTitle}>Meet the Team</h2>
        <div
          className="tedx-team-grid"
          style={teamGrid}
        >
          {team.map((member, idx) => (
            <div
              key={idx}
              className="tedx-team-card"
              style={teamCard}
            >
              <div style={teamPhoto}>
                {member.name === "Shriya Kalyan" ? (
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQHC_6N0Rqw0yA/profile-displayphoto-scale_400_400/B56ZlOA7npJwAg-/0/1757950491872?e=2147483647&v=beta&t=Kv2fPQDTejv1ICd-Dz-ySEm1t8PQZYdW48brIaMFIlI"
                    alt="Shriya Kalyan"
                    style={{ width: "128px", height: "128px", borderRadius: "50%", objectFit: "cover" }}
                  />
                ) : (
                  "Photo"
                )}
              </div>
              <h3 style={teamName}>{member.name}</h3>
              <p style={teamRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section style={ctaSection}>
        <Link
          to="/contact"
          className="tedx-cta-btn"
          style={ctaButton}
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;