import React, { useState } from "react";

const TalksPage = () => {
  const talks = [
    {
      id: 1,
      title: "The Future of Innovation",
      speaker: "Jane Doe",
      thumbnail: "https://via.placeholder.com/400x225.png?text=Talk+1",
      videoId: "dQw4w9WgXcQ",
      description: "A thought-provoking talk on how innovation shapes our world.",
      year: "2024",
      topic: "Innovation",
    },
    {
      id: 2,
      title: "Redefining Leadership",
      speaker: "John Smith",
      thumbnail: "https://via.placeholder.com/400x225.png?text=Talk+2",
      videoId: "3JZ_D3ELwOQ",
      description: "Exploring leadership in the modern age.",
      year: "2023",
      topic: "Leadership",
    },
    {
      id: 3,
      title: "Designing for Impact",
      speaker: "Alice Johnson",
      thumbnail: "https://via.placeholder.com/400x225.png?text=Talk+3",
      videoId: "L_jWHffIx5E",
      description: "How design can create positive change.",
      year: "2024",
      topic: "Design",
    },
  ];

  const [yearFilter, setYearFilter] = useState("");
  const [topicFilter, setTopicFilter] = useState("");
  const [selectedTalk, setSelectedTalk] = useState(null);

  const filteredTalks = talks.filter(
    (talk) =>
      (yearFilter === "" || talk.year === yearFilter) &&
      (topicFilter === "" || talk.topic === topicFilter)
  );

  // Responsive grid columns based on window width
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let gridTemplateColumns = "1fr";
  if (windowWidth >= 1024) {
    gridTemplateColumns = "repeat(3, 1fr)";
  } else if (windowWidth >= 640) {
    gridTemplateColumns = "repeat(2, 1fr)";
  }

  const styles = {
    page: {
      backgroundColor: "black",
      color: "white",
      minHeight: "100vh",
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      padding: "48px 24px",
      boxSizing: "border-box",
      maxWidth: "1200px",
      margin: "0 auto",
      overflowX: "hidden",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "800",
      textAlign: "center",
      marginBottom: "40px",
      userSelect: "none",
    },
    filtersContainer: {
      display: "flex",
      flexDirection: windowWidth < 640 ? "column" : "row",
      justifyContent: "center",
      gap: "24px",
      marginBottom: "48px",
      alignItems: "center",
    },
    select: {
      backgroundColor: "black",
      border: "2px solid #e62b1e",
      color: "white",
      padding: "8px 16px",
      borderRadius: "6px",
      fontSize: "1rem",
      cursor: "pointer",
      outline: "none",
      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      userSelect: "none",
      minWidth: "140px",
    },
    selectHoverFocus: {
      borderColor: "#ff4b3e",
      boxShadow: "0 0 8px #ff4b3e",
    },
    grid: {
      display: "grid",
      gridTemplateColumns,
      gap: "32px",
    },
    card: {
      backgroundColor: "#181818",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0,0,0,0.7)",
      cursor: "pointer",
      transform: "scale(1)",
      transition: "transform 0.3s ease",
      userSelect: "none",
      display: "flex",
      flexDirection: "column",
    },
    cardHover: {
      transform: "scale(1.05)",
    },
    cardImage: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
      flexShrink: 0,
    },
    cardContent: {
      padding: "16px",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "700",
      marginBottom: "8px",
      color: "white",
    },
    cardSpeaker: {
      color: "#e62b1e",
      fontWeight: "600",
      fontSize: "1rem",
      userSelect: "none",
    },
    modalOverlay: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      padding: "24px",
      boxSizing: "border-box",
      overflowY: "auto",
    },
    modalContent: {
      backgroundColor: "#181818",
      borderRadius: "12px",
      maxWidth: "900px",
      width: "100%",
      padding: "24px",
      position: "relative",
      color: "white",
      boxSizing: "border-box",
      maxHeight: "90vh",
      overflowY: "auto",
      userSelect: "text",
    },
    closeButton: {
      position: "absolute",
      top: "16px",
      right: "16px",
      background: "none",
      border: "none",
      color: "white",
      fontSize: "2rem",
      fontWeight: "700",
      cursor: "pointer",
      lineHeight: 1,
      userSelect: "none",
      transition: "color 0.3s ease",
    },
    closeButtonHover: {
      color: "#e62b1e",
    },
    modalTitle: {
      fontSize: "1.75rem",
      fontWeight: "800",
      marginBottom: "16px",
    },
    modalSpeaker: {
      color: "#e62b1e",
      marginBottom: "24px",
      fontWeight: "600",
      fontSize: "1.125rem",
      userSelect: "none",
    },
    videoWrapper: {
      position: "relative",
      paddingBottom: "56.25%",
      height: 0,
      marginBottom: "24px",
    },
    iframe: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: "none",
    },
    modalDescription: {
      color: "#d0d0d0",
      fontSize: "1rem",
      lineHeight: 1.5,
      whiteSpace: "pre-wrap",
    },
  };

  // For select hover/focus styling
  const [yearSelectFocused, setYearSelectFocused] = useState(false);
  const [topicSelectFocused, setTopicSelectFocused] = useState(false);
  const [yearSelectHovered, setYearSelectHovered] = useState(false);
  const [topicSelectHovered, setTopicSelectHovered] = useState(false);

  // For card hover scaling
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <div style={styles.page}>
      {/* Title */}
      <h1 style={styles.title}>Explore TEDxUTD Talks</h1>

      {/* Filters */}
      <div style={styles.filtersContainer}>
        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          style={{
            ...styles.select,
            ...(yearSelectFocused || yearSelectHovered ? styles.selectHoverFocus : {}),
          }}
          onFocus={() => setYearSelectFocused(true)}
          onBlur={() => setYearSelectFocused(false)}
          onMouseEnter={() => setYearSelectHovered(true)}
          onMouseLeave={() => setYearSelectHovered(false)}
          aria-label="Filter by year"
        >
          <option value="">All Years</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2021">2021</option>
          <option value="2019">2019</option>
          <option value="2017">2017</option>
        </select>
        <select
          value={topicFilter}
          onChange={(e) => setTopicFilter(e.target.value)}
          style={{
            ...styles.select,
            ...(topicSelectFocused || topicSelectHovered ? styles.selectHoverFocus : {}),
          }}
          onFocus={() => setTopicSelectFocused(true)}
          onBlur={() => setTopicSelectFocused(false)}
          onMouseEnter={() => setTopicSelectHovered(true)}
          onMouseLeave={() => setTopicSelectHovered(false)}
          aria-label="Filter by topic"
        >
          <option value="">All Topics</option>
          <option value="Innovation">Innovation</option>
          <option value="Leadership">Leadership</option>
          <option value="Design">Design</option>
        </select>
      </div>

      {/* Grid */}
      <div style={styles.grid}>
        {filteredTalks.map((talk) => (
          <div
            key={talk.id}
            style={{
              ...styles.card,
              ...(hoveredCardId === talk.id ? styles.cardHover : {}),
            }}
            onClick={() => setSelectedTalk(talk)}
            onMouseEnter={() => setHoveredCardId(talk.id)}
            onMouseLeave={() => setHoveredCardId(null)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedTalk(talk);
              }
            }}
            aria-label={`Open talk: ${talk.title} by ${talk.speaker}`}
          >
            <img
              src={talk.thumbnail}
              alt={talk.title}
              style={styles.cardImage}
              draggable={false}
            />
            <div style={styles.cardContent}>
              <h2 style={styles.cardTitle}>{talk.title}</h2>
              <p style={styles.cardSpeaker}>{talk.speaker}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTalk && (
        <div
          style={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedTalk(null);
            }
          }}
        >
          <div style={styles.modalContent}>
            <button
              onClick={() => setSelectedTalk(null)}
              style={styles.closeButton}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e62b1e")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              aria-label="Close modal"
            >
              ×
            </button>
            <h2 id="modal-title" style={styles.modalTitle}>
              {selectedTalk.title}
            </h2>
            <p style={styles.modalSpeaker}>{selectedTalk.speaker}</p>
            <div style={styles.videoWrapper}>
              <iframe
                style={styles.iframe}
                src={`https://www.youtube.com/embed/${selectedTalk.videoId}`}
                title={selectedTalk.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p id="modal-description" style={styles.modalDescription}>
              {selectedTalk.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TalksPage;