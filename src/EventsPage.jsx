import React from "react";

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      name: "Salon 1 TEDXUTD",
      date: "October 7",
      time: "5:00 PM - 7:00 PM",
      location: "SCI 2.210",
      flyer: "https://via.placeholder.com/400x250.png?text=Salon+1+TEDXUTD",
    },
    {
      id: 2,
      name: "Salon 2 TEDX",
      date: "November 19",
      time: "5:30 PM - 7:00 PM",
      location: "SCI 2.210",
      flyer: "https://via.placeholder.com/400x250.png?text=Salon+2+TEDX",
    },
  ];

  const pastEvents = [
    {
      id: 1,
      name: "TEDxUTD 2024 Conference",
      flyer: "https://via.placeholder.com/300x180.png?text=Past+Event+1",
      recap: "A day full of inspiring talks and networking opportunities.",
      highlights: "#",
    },
    {
      id: 2,
      name: "TEDxUTD Salon 2023",
      flyer: "https://via.placeholder.com/300x180.png?text=Past+Event+2",
      recap: "Smaller, intimate session exploring leadership and design.",
      highlights: "#",
    },
  ];

  // Responsive grid styles using media queries require CSS or styled-components.
  // Since only inline styles allowed, we use React state and window resize listener to determine columns.

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let upcomingGridColumns = 1;
  if (windowWidth >= 1024) {
    upcomingGridColumns = 3;
  } else if (windowWidth >= 640) {
    upcomingGridColumns = 2;
  }

  let pastGridColumns = 1;
  if (windowWidth >= 1024) {
    pastGridColumns = 3;
  } else if (windowWidth >= 640) {
    pastGridColumns = 2;
  }

  const containerStyle = {
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh",
    fontFamily: "sans-serif",
    padding: "48px 24px",
    overflowX: "hidden",
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

  const pastGridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${pastGridColumns}, 1fr)`,
    gap: 32,
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

  const pastCardStyle = {
    backgroundColor: "#27272a",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 3px 8px rgba(0,0,0,0.4)",
    boxSizing: "border-box",
    transition: "transform 0.3s",
    cursor: "default",
  };

  const flyerStyleUpcoming = {
    width: "100%",
    maxWidth: "100%",
    height: 224,
    objectFit: "cover",
    boxSizing: "border-box",
    display: "block",
  };

  const flyerStylePast = {
    width: "100%",
    maxWidth: "100%",
    height: 160,
    objectFit: "cover",
    boxSizing: "border-box",
    display: "block",
  };

  const upcomingContentStyle = {
    padding: 24,
    boxSizing: "border-box",
  };

  const pastContentStyle = {
    padding: 16,
    boxSizing: "border-box",
  };

  const upcomingNameStyle = {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
  };

  const pastNameStyle = {
    fontSize: 20,
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

  const linkStyle = {
    color: "#e62b1e",
    fontWeight: "600",
    textDecoration: "none",
    cursor: "pointer",
    userSelect: "none",
    transition: "color 0.3s",
  };

  // Hover states managed with React useState for each card/button.

  const [hoveredUpcoming, setHoveredUpcoming] = React.useState(null);
  const [hoveredPast, setHoveredPast] = React.useState(null);
  const [hoveredButton, setHoveredButton] = React.useState(null);
  const [hoveredLink, setHoveredLink] = React.useState(null);

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
            <img
              src={event.flyer}
              alt={event.name}
              style={flyerStyleUpcoming}
              draggable={false}
            />
            <div style={upcomingContentStyle}>
              <h2 style={upcomingNameStyle}>{event.name}</h2>
              <p style={textGrayStyle}>{event.date}</p>
              <p style={textGrayStyle}>{event.time}</p>
              <p style={upcomingLocationStyle}>{event.location}</p>
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

      {/* Past Events */}
      <h2 style={pastTitleStyle}>Past Events</h2>
      <div style={pastGridStyle}>
        {pastEvents.map((event) => (
          <div
            key={event.id}
            style={{
              ...pastCardStyle,
              transform: hoveredPast === event.id ? "scale(1.05)" : "scale(1)",
            }}
            onMouseEnter={() => setHoveredPast(event.id)}
            onMouseLeave={() => setHoveredPast(null)}
          >
            <img
              src={event.flyer}
              alt={event.name}
              style={flyerStylePast}
              draggable={false}
            />
            <div style={pastContentStyle}>
              <h3 style={pastNameStyle}>{event.name}</h3>
              <p style={{ ...textGrayStyle, marginBottom: 12 }}>{event.recap}</p>
              {event.highlights && (
                <a
                  href={event.highlights}
                  style={{
                    ...linkStyle,
                    color:
                      hoveredLink === event.id ? "#b7211b" : "#e62b1e",
                    textDecoration: hoveredLink === event.id ? "underline" : "none",
                  }}
                  onMouseEnter={() => setHoveredLink(event.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  View Highlights →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;