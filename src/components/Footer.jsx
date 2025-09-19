import React from "react";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "black",
    color: "#b0b0b0",
    marginTop: "3rem",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    fontFamily: "sans-serif",
    width: "100%",
    overflowX: "hidden",
    boxSizing: "border-box",
  };

  const containerStyle = {
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2rem",
    textAlign: "center",
    boxSizing: "border-box",
  };

  const sectionStyle = {
    textAlign: "center",
    marginBottom: "1rem",
  };

  const headingStyle = {
    color: "white",
    fontWeight: "600",
    fontSize: "1.125rem",
    marginBottom: "0.75rem",
  };

  const linkStyle = {
    color: "#b0b0b0",
    textDecoration: "none",
    display: "block",
    marginBottom: "0.5rem",
    transition: "color 0.3s",
  };

  const linkHoverColor = "#e62b1e";

  const socialLinkStyle = {
    color: "#b0b0b0",
    marginRight: "1rem",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  const bottomBarStyle = {
    borderTop: "1px solid #4a4a4a",
    marginTop: "2rem",
    paddingTop: "1rem",
    textAlign: "center",
    fontSize: "0.875rem",
    color: "#888",
  };

  return (
    <footer style={footerStyle}>
      <div style={{ ...containerStyle, gridTemplateColumns: window.innerWidth >= 768 ? "repeat(3, 1fr)" : "1fr", textAlign: window.innerWidth >= 768 ? "left" : "center" }}>
        {/* About */}
        <div style={sectionStyle}>
          <h3 style={headingStyle}>TEDxUTD</h3>
          <p style={{ fontSize: "0.875rem" }}>
            Ideas worth spreading at The University of Texas at Dallas.  
            Join us for talks, events, and community.
          </p>
        </div>

        {/* Quick Links */}
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Quick Links</h3>
          {["Talks", "Events", "About"].map((text, idx) => (
            <a
              key={idx}
              href={`/${text.toLowerCase()}`}
              style={linkStyle}
              onMouseEnter={e => (e.target.style.color = linkHoverColor)}
              onMouseLeave={e => (e.target.style.color = linkStyle.color)}
            >
              {text}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Follow Us</h3>
          {[
            { platform: "Instagram", url: "https://www.instagram.com/tedxutd", logo: "https://lh6.googleusercontent.com/proxy/X9C0cBoqjH8rSbCG2iDlSCETTVUMrpgo1H8ILQ-qyiClnjzIEp6cCCv1rw-NCjxC4qX-CmJeCmksm2s7BOQslowxEux_aRoibNDiV-o_k-5GHhAbfXTTIdyVO8FBkWu3KNm85ZG6NhTR" },
            { platform: "LinkedIn", url: "https://www.linkedin.com/company/tedxutd", logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png" },
            { platform: "X", url: "https://x.com/tedxutd", logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...socialLinkStyle, display: "inline-block" }}
              onMouseEnter={e => (e.target.firstChild.style.filter = "brightness(0.7)")}
              onMouseLeave={e => (e.target.firstChild.style.filter = "brightness(1)")}
            >
              <img src={item.logo} alt={item.platform} style={{ width: "32px", height: "32px" }} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={bottomBarStyle}>
        © {new Date().getFullYear()} TEDxUTD. All rights reserved.
      </div>
    </footer>
  );
}
