import React from "react";

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      name: "TEDxUTD Salon",
      date: "February 18, 2026",
      time: "11:30 AM – 4:30 PM",
      location: "Artemis Hall, Student Union (SU)",
      flyer: "https://i.ytimg.com/vi/Ls3JtN6MisQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDg8MjZVIktYVl4D0FIPb7ZDYPA_w",
      description:
        "A curated TEDx-style salon featuring two live speakers, interactive sessions, and in-person engagement. This event serves as a lead-up to the main conference and emphasizes discussion, community, and idea exchange.",
    },
    {
      id: 2,
      name: "TEDxUTD 2026 Main Conference",
      date: "April 17, 2026",
      time: "TBD (Tentative: afternoon → evening)",
      location: "Jonsson (JO) Performance Hall",
      flyer: "https://static.unimy.com/public/cache/school-video-be-a-7-leaf-clover-business-strategies-for-life-dr-shawn-carraher-at-tedxutd-1553786098-500x300.webp",
      description:
        "Full-scale TEDxUTD conference featuring selected speakers, talks, and production-level programming centered on life beyond academics—careers, identity, impact, and growth.",
    },
  ];

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let upcomingGridColumns = 1;
  if (windowWidth >= 1024) upcomingGridColumns = 3;
  else if (windowWidth >= 640) upcomingGridColumns = 2;

  const containerStyle = {
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh",
    fontFamily: "sans-serif",
    padding: "48px 24px",
    overflowX: "auto",
    minWidth: "100vw",
    boxSizing: "border-box",
  };

  const titleStyle = {
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 48,
    userSelect: "none",
  };

  const upcomingTitleStyle = {
    ...titleStyle,
    fontSize: windowWidth >= 768 ? 40 : 32,
  };

  const pastTitleStyle = {
    ...titleStyle,
    fontSize: windowWidth >= 768 ? 32 : 24,
    marginBottom: 40,
  };

  const upcomingGridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${upcomingGridColumns}, 1fr)`,
    gap: 40,
    marginBottom: 64,
    boxSizing: "border-box",
  };

  const cardStyle = {
    backgroundColor: "#18181b",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
    boxSizing: "border-box",
    transition: "transform 0.3s",
    cursor: "default",
  };

  const flyerContainerStyle = {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
  };

  const flyerStyleUpcoming = {
    width: "100%",
    maxWidth: "100%",
    height: 224,
    objectFit: "cover",
    boxSizing: "border-box",
    display: "block",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 12,
  };

  const upcomingContentStyle = {
    padding: 24,
    boxSizing: "border-box",
  };

  const upcomingNameStyle = {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
  };

  const textGrayStyle = {
    color: "#d4d4d8",
    marginBottom: 4,
  };

  const upcomingLocationStyle = {
    ...textGrayStyle,
    marginBottom: 16,
  };

  const descriptionStyle = {
    color: "#a1a1aa",
    marginBottom: 16,
    fontSize: 14,
    lineHeight: 1.4,
  };

  const buttonStyle = {
    backgroundColor: "#e62b1e",
    color: "white",
    padding: "12px 24px",
    borderRadius: 6,
    border: "none",
    fontWeight: "700",
    cursor: "pointer",
    transition: "transform 0.3s, background-color 0.3s",
    userSelect: "none",
  };

  const [hoveredUpcoming, setHoveredUpcoming] = React.useState(null);
  const [hoveredButton, setHoveredButton] = React.useState(null);

  return (
    <div style={containerStyle}>
      {/* Upcoming Events */}
      <h1 style={upcomingTitleStyle}>Upcoming Events</h1>
      <div style={upcomingGridStyle}>
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            style={{
              ...cardStyle,
              transform:
                hoveredUpcoming === event.id ? "scale(1.05)" : "scale(1)",
            }}
            onMouseEnter={() => setHoveredUpcoming(event.id)}
            onMouseLeave={() => setHoveredUpcoming(null)}
          >
            <div style={flyerContainerStyle}>
              <img
                src={event.flyer}
                alt={event.name}
                style={flyerStyleUpcoming}
                draggable={false}
              />
              <div style={overlayStyle} />
            </div>
            <div style={upcomingContentStyle}>
              <h2 style={upcomingNameStyle}>{event.name}</h2>
              <p style={textGrayStyle}>{event.date}</p>
              <p style={textGrayStyle}>{event.time}</p>
              <p style={upcomingLocationStyle}>{event.location}</p>
              <p style={descriptionStyle}>{event.description}</p>
              <button
                style={{
                  ...buttonStyle,
                  transform:
                    hoveredButton === event.id ? "scale(1.05)" : "scale(1)",
                  backgroundColor:
                    hoveredButton === event.id ? "#b7211b" : "#e62b1e",
                }}
                onMouseEnter={() => setHoveredButton(event.id)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                RSVP
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Past Events Instagram Embed */}
      <h2 style={pastTitleStyle}>Past Events</h2>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/tedxutd/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: 3,
            boxShadow:
              "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            maxWidth: 540,
            minWidth: 326,
            padding: 0,
            width: "99.375%",
            boxSizing: "border-box",
          }}
        >
          <a
            href="https://www.instagram.com/tedxutd/?utm_source=ig_embed&utm_campaign=loading"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#000" }}
          >
            View TEDxUTD on Instagram
          </a>
        </blockquote>
      </div>
      <script async src="//www.instagram.com/embed.js"></script>
    </div>
  );
};

export default EventsPage;