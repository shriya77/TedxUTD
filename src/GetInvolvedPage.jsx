import React from "react";

const GetInvolvedPage = () => {
  const volunteerRoles = [
    { title: "Event Volunteer", description: "Help with event setup, logistics, and guest support." },
    { title: "Marketing Team", description: "Spread the word through social media and campaigns." },
    { title: "Tech Crew", description: "Assist with audio, video, and stage production." },
  ];

  const containerStyle = {
    backgroundColor: "black",
    color: "white",
    fontFamily: "sans-serif",
    boxSizing: "border-box",
    maxWidth: "100%",
    overflowX: "hidden",
  };

  const sectionTitleStyle = {
    fontWeight: "800",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: "800",
    margin: 0,
  };

  const subtitleStyle = {
    marginTop: "1rem",
    color: "#d1d5db",
    fontSize: "1.125rem",
    maxWidth: "32rem",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const volunteerSectionStyle = {
    padding: "3rem 1.5rem",
    maxWidth: "1280px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const volunteerGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2rem",
  };

  const volunteerCardStyle = {
    backgroundColor: "#18181b",
    borderRadius: "0.5rem",
    padding: "2rem",
    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
    transform: "scale(1)",
    transition: "transform 0.3s ease, background-color 0.3s ease",
    cursor: "pointer",
  };

  const volunteerCardHoverStyle = {
    transform: "scale(1.05)",
    backgroundColor: "#27272a",
  };

  const volunteerCardTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "1rem",
  };

  const volunteerCardDescStyle = {
    color: "#d1d5db",
    margin: 0,
  };

  const partnerSectionStyle = {
    padding: "3rem 1.5rem",
    backgroundColor: "#18181b",
    textAlign: "center",
    maxWidth: "1280px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const partnerTitleStyle = {
    fontSize: "2.25rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
  };

  const partnerDescStyle = {
    color: "#d1d5db",
    marginBottom: "2rem",
  };

  const logosContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.5rem",
    marginBottom: "2rem",
  };

  const logoStyle = {
    width: "8rem",
    height: "5rem",
    backgroundColor: "#4b5563",
    borderRadius: "0.375rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#9ca3af",
    fontWeight: "500",
    userSelect: "none",
  };

  const buttonStyle = {
    backgroundColor: "#e62b1e",
    color: "white",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.375rem",
    fontWeight: "700",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.3s ease, background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#b92217",
    transform: "scale(1.05)",
  };

  const applicationSectionStyle = {
    padding: "5rem 1.5rem",
    textAlign: "center",
  };

  const applicationButtonStyle = {
    backgroundColor: "#e62b1e",
    color: "white",
    padding: "1.25rem 2.5rem",
    borderRadius: "0.375rem",
    fontWeight: "700",
    fontSize: "1.5rem",
    border: "none",
    cursor: "pointer",
    display: "inline-block",
    transition: "transform 0.3s ease, background-color 0.3s ease",
    textDecoration: "none",
  };

  // Responsive grid columns for volunteer opportunities
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (windowWidth >= 768) {
    volunteerGridStyle.gridTemplateColumns = "repeat(3, 1fr)";
  } else {
    volunteerGridStyle.gridTemplateColumns = "1fr";
  }

  // Hover state for volunteer cards
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  // Hover state for partner button
  const [partnerBtnHover, setPartnerBtnHover] = React.useState(false);
  // Hover state for application button
  const [appBtnHover, setAppBtnHover] = React.useState(false);

  return (
    <div style={containerStyle}>
      {/* Title */}
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem", textAlign: "center" }}>
        <h1 style={titleStyle}>Get Involved at TEDxUTD</h1>
        <p style={subtitleStyle}>
          Join the movement and help us bring ideas worth spreading to life.
        </p>
      </section>

      {/* Volunteer Opportunities */}
      <section style={volunteerSectionStyle}>
        <h2 style={{ ...sectionTitleStyle, fontSize: "2.25rem", marginBottom: "2.5rem" }}>Volunteer Opportunities</h2>
        <div style={volunteerGridStyle}>
          {volunteerRoles.map((role, idx) => (
            <div
              key={idx}
              style={{
                ...volunteerCardStyle,
                ...(hoveredIndex === idx ? volunteerCardHoverStyle : {}),
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 style={volunteerCardTitleStyle}>{role.title}</h3>
              <p style={volunteerCardDescStyle}>{role.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner/Sponsor */}
      <section style={partnerSectionStyle}>
        <h2 style={partnerTitleStyle}>Partners & Sponsors</h2>
        <p style={partnerDescStyle}>We are grateful for the support of our amazing partners.</p>
        <div style={logosContainerStyle}>
          <div style={logoStyle}>Logo 1</div>
          <div style={logoStyle}>Logo 2</div>
          <div style={logoStyle}>Logo 3</div>
        </div>
        <button
          style={partnerBtnHover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
          onMouseEnter={() => setPartnerBtnHover(true)}
          onMouseLeave={() => setPartnerBtnHover(false)}
          type="button"
        >
          Become a Sponsor
        </button>
      </section>

      {/* Application CTA */}
      <section style={applicationSectionStyle}>
        <a
          href="https://forms.gle/placeholder"
          target="_blank"
          rel="noopener noreferrer"
          style={appBtnHover ? { ...applicationButtonStyle, ...buttonHoverStyle } : applicationButtonStyle}
          onMouseEnter={() => setAppBtnHover(true)}
          onMouseLeave={() => setAppBtnHover(false)}
        >
          Apply Now to Join Our Team!
        </a>
      </section>
    </div>
  );
};

export default GetInvolvedPage;