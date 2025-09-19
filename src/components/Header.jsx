import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const headerStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "1rem 2rem",
    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
    position: "sticky",
    top: 0,
    zIndex: 50,
    width: "100%",
    boxSizing: "border-box",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    flexWrap: "wrap",
  };

  const logoStyle = {
    fontWeight: "bold",
    fontSize: "1.75rem",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  };

  const tedStyle = {
    color: "#e62b1e",
  };

  const utdStyle = {
    color: "white",
    marginLeft: "0.2rem",
  };

  const navStyle = {
    display: "flex",
    gap: "1.5rem",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    position: "relative",
    transition: "color 0.3s",
  };

  const linkHoverStyle = {
    color: "#e62b1e",
  };

  const socialContainerStyle = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    marginTop: "0.5rem",
  };

  const socialLinkStyle = {
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    transition: "color 0.3s",
  };

  const socialIconStyle = {
    width: "20px",
    height: "20px",
    fill: "currentColor",
  };

  // Social SVG icons
  const InstagramIcon = () => (
    <svg aria-hidden="true" focusable="false" style={socialIconStyle} viewBox="0 0 24 24">
      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg aria-hidden="true" focusable="false" style={socialIconStyle} viewBox="0 0 24 24">
      <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 8.75h4v12h-4v-12zm7.5 0h3.75v1.64h.05a4.11 4.11 0 013.7-2.03c3.96 0 4.69 2.6 4.69 5.97v6.42h-4v-5.68c0-1.35-.02-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.78h-4v-12z" />
    </svg>
  );

  const XIcon = () => (
    <svg aria-hidden="true" focusable="false" style={socialIconStyle} viewBox="0 0 24 24">
      <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.724 9.865 9.865 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149 4.822 4.822 0 003.149 9.86a4.903 4.903 0 01-2.228-.616v.061a4.918 4.918 0 003.946 4.827 4.996 4.996 0 01-2.224.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.396 0-.787-.023-1.17-.067a13.945 13.945 0 007.548 2.209c9.142 0 14.307-7.721 14.307-14.414 0-.22-.005-.439-.015-.656a10.18 10.18 0 002.506-2.592l-.047-.02z" />
    </svg>
  );

  // Social links data
  const socialLinks = [
    { href: "https://instagram.com/tedxutd", label: "Instagram", icon: <InstagramIcon /> },
    { href: "https://linkedin.com/company/tedxutd", label: "LinkedIn", icon: <LinkedInIcon /> },
    { href: "https://twitter.com/tedxutd", label: "X", icon: <XIcon /> },
  ];

  // Handlers for nav link hover effects
  const handleMouseEnter = (e) => {
    e.target.style.color = linkHoverStyle.color;
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = linkStyle.color;
  };

  // Handlers for social link hover effects
  const handleSocialMouseEnter = (e) => {
    e.currentTarget.style.color = "#e62b1e";
  };

  const handleSocialMouseLeave = (e) => {
    e.currentTarget.style.color = "white";
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <Link to="/" style={logoStyle}>
          <img
            src="https://static.wixstatic.com/media/3a9766_022decf7e45b4dfc8f7316dcb679b474~mv2.png/v1/fill/w_366,h_122,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/tedx2.png"
            alt="TEDxUTD Logo"
            style={{ height: "50px", width: "auto" }}
          />
        </Link>

        {/* Nav Links */}
        <nav style={navStyle}>
          {[
            { to: "/", label: "Home" },
            { to: "/talks", label: "Talks" },
            { to: "/events", label: "Events" },
            { to: "/conference2024", label: "2024 Conference" },
            { to: "/about", label: "About Us" },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div style={socialContainerStyle}>
          {socialLinks.map(({ href, label, icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={socialLinkStyle}
              onMouseEnter={handleSocialMouseEnter}
              onMouseLeave={handleSocialMouseLeave}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
