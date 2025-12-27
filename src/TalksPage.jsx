import React from "react";

const ConferencesPage = () => {
  const conferences = [
    {
      year: 2025,
      title: "TEDxUTD 2025 Conference",
      theme: "The Journey of Life",
      date: "2025 Conference (Register now)",
      description:
        "This year's conference is about recognizing our places in the journey of life and learning how to enrich it.",
      speakers: [
        {
          id: 1,
          name: "Jeanne Collins",
          image: "whatsapp_image_2025-03-24_at_08.45_edite",
          description: "Fired Over Zoom: Hit Pause, Listen, Design to find Life Balance",
        },
        {
          id: 2,
          name: "Abdulrahman Abou Dahesh",
          image: "whatsapp_image_2025-03-24_at_08.46_edite",
          description: "How to Create an Idea You Love—and Make People Fall in Love with It",
        },
        {
          id: 3,
          name: "Abigail Zeman",
          image: "whatsapp_image_2025-03-24_at_08.47_edite",
          description: "Intentionally Unplugged: I Haven’t Watched Television Since Childhood",
        },
        {
          id: 4,
          name: "Nelly Kaakaty",
          image: "whatsapp_image_2025-03-28_at_10.37_edite",
          description: "The Unanswered Prayer: The Power in not Getting What you Want",
        },
        {
          id: 5,
          name: "Ty Hoesgen",
          image: "whatsapp_image_2025-03-24_at_08.46_edite",
          description: "How Introverts Become Better Public Speakers",
        },
        {
          id: 6,
          name: "Lindsey Paoli",
          image: "whatsapp_image_2025-03-24_at_08.47_edite",
          description: "What to do BEFORE you see a therapist",
        },
      ],
      team: [
        { role: "President", name: "Asma Mohammed" },
        { role: "Vice President", name: "Maviya Yaseen" },
        { role: "Director of Logistics", name: "Erin Lauraine" },
        { role: "Director of Fundraising", name: "Asmita Vadde" },
        { role: "Director of Content", name: "Shikha Patra" },
        { role: "Director of Technology", name: "Shreyance Jain" },
        { role: "Director of Marketing", name: "Anaum Ahmed" },
        { role: "Director of Outreach", name: "Khaylenn Cortez" },
        { role: "Content Manager", name: "Ananya Karthik" },
        { role: "Graphic Designer", name: "Nadira Ullah" },
        { role: "Graphic Designer", name: "Aminah Shahid" },
        { role: "Treasurer", name: "Kaylyn Lau" },
        { role: "Secretary", name: "Shruti Panda" },
        { role: "Fundraising Committee", name: "Duaa Sarayi" },
        { role: "Fundraising Committee", name: "Salsabil Aziz" },
        { role: "Logistics Assistant", name: "Mariyah Syed" },
        { role: "Logistics Committee", name: "Yusra Mohammed" },
        { role: "Logistics Committee", name: "Pranavi Yedluri" },
        { role: "Logistics Committee", name: "Raagavika Govindarajan" },
      ],
    },
    {
      year: 2024,
      title: "TEDxUTD 2024 Conference",
      theme: "Redefinition",
      date: "Friday, April 19th, 2024",
      description:
        "This year's conference is about embracing the power of redefinition and paving the way for growth and lasting change",
      speakers: [
        { id: 1, name: "Sugata Biswas", image: "sugata_biswas.jpg" },
        { id: 2, name: "Terry Nguyen", image: "terry_nguyen.jpg" },
        { id: 3, name: "Justin Mann", image: "justin_mann.jpg" },
        { id: 4, name: "Erin Lauraine", image: "erin_lauraine.jpg" },
        { id: 5, name: "Grant Rose", image: "grant_rose.jpg" },
        { id: 6, name: "Kate Liu", image: "kate_liu.jpg" },
      ],
      team: [
        { role: "President", name: "Shriya Patel" },
        { role: "Vice President", name: "Alex Johnson" },
        { role: "Secretary", name: "Maya Chen" },
        { role: "Treasurer", name: "David Kim" },
        { role: "Marketing Chair", name: "Sara Lopez" },
        { role: "Logistics Chair", name: "James O'Neil" },
        { role: "Speaker Coordinator", name: "Emily Davis" },
        { role: "Volunteer Coordinator", name: "Michael Brown" },
      ],
    },
    {
      year: 2021,
      title: "TEDxUTD 2021 Conference",
      theme: "Resilience",
      date: "Saturday, April 17th, 2021, 2-5 PM",
      description:
        "This year's conference is about exploring the dynamic process of redefining one's own identity, values, and purpose.",
      speakers: [
        {
          id: 1,
          name: "Tricia Kagerer",
          image: "Kagerer_edited.jpg",
          description: "What Being the Only Female Construction Executive Taught Me About Diversity",
        },
        { id: 2, name: "Meena Chan", image: "Chan_edited.jpg", description: "What's Your Spark in Life?" },
        {
          id: 3,
          name: "Steven Haynes",
          image: "Haynes_edited.jpg",
          description: "Adaptive Performance in the Face of Adversity",
        },
        { id: 4, name: "Ning Wang", image: "Wang_edited.jpg", description: "Four Mindsets Foster Your True Uniqueness" },
        { id: 5, name: "Gaurav Shekhar", image: "Shekhar_edited.jpg", description: "EQ: The Wonders Your Mind Can Do" },
      ],
      team: [
        { role: "President", name: "AM" },
        { role: "Vice President", name: "Zuhair Zaidi" },
        { role: "Director of Design", name: "Adeeb Alomar" },
        { role: "Secretary", name: "Akshitha Sreerangapuri" },
        { role: "Director of Content", name: "Shaania Sakhia" },
        { role: "Director of Marketing", name: "Sanjana Venkat" },
        { role: "Director of Logistics", name: "Tiffany Bui" },
        { role: "Director of Sponsorship", name: "Amrutha Srinivasan" },
        { role: "Director of Technology", name: "Ameen Mohammed" },
      ],
    },
    {
      year: 2019,
      title: "TEDxUTD 2019 Conference",
      theme: "Thriving",
      date: "Monday, October 21st, 2019, 5-8 PM",
      description:
        "This year's conference is about understanding yourself and your surroundings, then taking action to thrive.",
      speakers: [
        {
          id: 1,
          name: "Samantha Skelly",
          image: "SamanthaSkelly Headshot.png",
          description: "Food - The Drug No One is Talking About",
        },
        { id: 2, name: "Brad Skiles", image: "Brad Skiles UTD Head 25(1).png", description: "Focus, Commit, and Never Quit" },
        {
          id: 3,
          name: "John Taden",
          image: "John Taden TEDxUTD Profile Picture.jpg",
          description: "Localizing Justice and Privatizing the Right to Punish",
        },
        {
          id: 4,
          name: "Dr. Daniel Krawczyk",
          image: "Krawczyk_2018.jpg",
          description: "Brain Science for Investment Decisions",
        },
        { id: 5, name: "Adam Howard", image: "Adam_Howard.jpg", description: "How to Foster Individual Dignity and Wellness" },
        {
          id: 6,
          name: "Dee O'Neill",
          image: "Dee O'Neill - jpeg pic 2018.JPG",
          description: "Harnessing Stress for Brain Performance",
        },
      ],
      team: [
        { role: "President", name: "Hamza Mallick" },
        { role: "Secretary", name: "Zuhair Zaidi" },
        { role: "Vice President", name: "Abdullah Mohammed" },
        { role: "Director of Outreach", name: "Ameen Mohammed" },
        { role: "Treasurer", name: "AM" },
        { role: "Director of Design", name: "Adeeb Alomar" },
        { role: "Director of Marketing", name: "Mahir Kaheri" },
        { role: "Director of Technology", name: "Muhammad Aishat" },
      ],
    },
    {
      year: 2017,
      title: "TEDxUTD 2017 Conference",
      theme: "Empowering Connections",
      date: "Friday, April 7th, 2017",
      description:
        "This year's conference is about being aware of the world around us and making connections that empower us.",
      speakers: [
        { id: 1, name: "Amber Soriano", image: "AMBERSORIANO", description: "Think Outside the Box" },
        {
          id: 2,
          name: "Steven Dunn",
          image: "STEVENDUNN",
          description: "To Kill the Monster- Empowered Treatment of Eating Disorders",
        },
        { id: 3, name: "Joshua Danielson", image: "JOSHUADANIELSON", description: "Why Do Cyber Attacks Continue to Happen?" },
        {
          id: 4,
          name: "Anwesha Bhattacharjee",
          image: "ANWESHABHATTARCHJEE",
          description: "The Case of the Disappearing Languages",
        },
        { id: 5, name: "Samuel Grayson", image: "SAMUELGRAYSON", description: "Creative Thinking in Math Class" },
        { id: 6, name: "Jenna Quinn", image: "JENNAQUINN", description: "Stopping the Silence as a Voice for the Voiceless" },
      ],
      sponsors: [
        { name: "UT Dallas", logo: "utdallas-logo.png", url: "https://www.utdallas.edu/" },
        { name: "1-800 Truck Wreck", logo: "1800truckwreck-logo.png", url: "https://www.1800truckwreck.com/" },
        { name: "Kiss PR", logo: "kisspr-logo.png", url: "https://www.kisspr.com/" },
      ],
    },
  ];

  const styles = {
    page: {
      width: "100%",
      padding: "48px 24px",
      boxSizing: "border-box",
      fontFamily: "sans-serif",
      color: "#222",
    },
    conferencesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 340px))",
      gap: "24px",
      justifyContent: "center",
      justifyItems: "stretch",
    },
    conferenceBox: {
      border: "2px solid #e62b1e",
      borderRadius: "8px",
      padding: "24px",
      cursor: "pointer",
      userSelect: "none",
      backgroundColor: "white",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      transition: "box-shadow 0.3s ease",
    },
    conferenceBoxHover: {
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    },
    conferenceTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      marginBottom: "8px",
      color: "#e62b1e",
    },
    conferenceTheme: {
      fontSize: "1.125rem",
      fontWeight: "600",
      marginBottom: "4px",
    },
    conferenceDate: {
      fontSize: "1rem",
      fontWeight: "500",
      marginBottom: "12px",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: "white",
      borderRadius: "8px",
      maxWidth: "800px",
      width: "90%",
      maxHeight: "90vh",
      overflowY: "auto",
      padding: "24px",
      boxSizing: "border-box",
      position: "relative",
    },
    modalCloseButton: {
      position: "absolute",
      top: "12px",
      right: "12px",
      background: "none",
      border: "none",
      fontSize: "1.5rem",
      fontWeight: "700",
      cursor: "pointer",
      color: "#e62b1e",
      userSelect: "none",
    },
    sectionTitle: {
      fontSize: "2rem",
      fontWeight: "700",
      borderBottom: "3px solid #e62b1e",
      paddingBottom: "8px",
      marginBottom: "32px",
      userSelect: "none",
    },
    speakersGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))",
      gap: "24px",
      justifyItems: "center",
      marginBottom: "48px",
    },
    speakerCard: {
      textAlign: "center",
    },
    speakerImage: {
      width: "160px",
      height: "160px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "12px",
      userSelect: "none",
    },
    speakerName: {
      fontSize: "1.125rem",
      fontWeight: "600",
    },
    teamList: {
      listStyle: "none",
      padding: 0,
      maxWidth: "400px",
      margin: "0 auto",
    },
    teamItem: {
      fontSize: "1.125rem",
      marginBottom: "12px",
      userSelect: "none",
    },
    teamRole: {
      fontWeight: "700",
      marginRight: "8px",
    },
    yearFilterContainer: {
      marginBottom: "24px",
      userSelect: "none",
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
    },
    yearChip: {
      padding: "8px 16px",
      borderRadius: "20px",
      border: "2px solid #e62b1e",
      backgroundColor: "white",
      color: "#e62b1e",
      fontWeight: "600",
      cursor: "pointer",
      userSelect: "none",
      transition: "background-color 0.3s, color 0.3s",
      outline: "none",
    },
    yearChipSelected: {
      backgroundColor: "#e62b1e",
      color: "white",
      border: "2px solid #e62b1e",
    },
  };

  const [hoveredConference, setHoveredConference] = React.useState(null);
  const [expandedConference, setExpandedConference] = React.useState(null);
  const [selectedYear, setSelectedYear] = React.useState("All");

  const handleConferenceClick = (conference) => {
    setExpandedConference(conference);
  };

  const handleCloseModal = () => {
    setExpandedConference(null);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const filteredConferences =
    selectedYear === "All" ? conferences : conferences.filter((conf) => String(conf.year) === selectedYear);

  const years = ["All", "2025", "2024", "2021", "2019", "2017"];

  return (
    <div style={styles.page}>
      <div style={styles.yearFilterContainer} role="group" aria-label="Filter conferences by year">
        {years.map((year) => (
          <button
            key={year}
            type="button"
            onClick={() => handleYearChange(year)}
            style={{
              ...styles.yearChip,
              ...(selectedYear === year ? styles.yearChipSelected : {}),
            }}
            aria-pressed={selectedYear === year}
          >
            {year}
          </button>
        ))}
      </div>

      <div style={styles.conferencesGrid}>
        {filteredConferences.map((conf) => (
          <div
            key={conf.year}
            style={{
              ...styles.conferenceBox,
              ...(hoveredConference === conf.year ? styles.conferenceBoxHover : {}),
            }}
            onMouseEnter={() => setHoveredConference(conf.year)}
            onMouseLeave={() => setHoveredConference(null)}
            onClick={() => handleConferenceClick(conf)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleConferenceClick(conf);
              }
            }}
            aria-expanded={expandedConference === conf}
            aria-controls={`conference-details-${conf.year}`}
          >
            <h2 style={styles.conferenceTitle}>{conf.title}</h2>
            <p style={styles.conferenceTheme}>{conf.theme}</p>
            <p style={styles.conferenceDate}>{conf.date}</p>
          </div>
        ))}
      </div>

      {expandedConference && (
        <div
          style={styles.modalOverlay}
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`conference-title-${expandedConference.year}`}
          aria-describedby={`conference-description-${expandedConference.year}`}
        >
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.modalCloseButton} onClick={handleCloseModal} aria-label="Close conference details">
              &times;
            </button>

            <h1 id={`conference-title-${expandedConference.year}`} style={styles.conferenceTitle}>
              {expandedConference.title}
            </h1>
            <h2 style={styles.conferenceTheme}>{expandedConference.theme}</h2>
            <p style={styles.conferenceDate}>{expandedConference.date}</p>
            <p
              id={`conference-description-${expandedConference.year}`}
              style={{ marginBottom: "32px", fontSize: "1.125rem", lineHeight: 1.5 }}
            >
              {expandedConference.description}
            </p>

            <section>
              <h3 style={styles.sectionTitle}>Speakers</h3>
              <div style={styles.speakersGrid}>
                {expandedConference.speakers.map((speaker) => (
                  <div key={speaker.id} style={styles.speakerCard}>
                    <img src={speaker.image} alt={speaker.name} style={styles.speakerImage} draggable={false} />
                    <p style={styles.speakerName}>{speaker.name}</p>
                  </div>
                ))}
              </div>
            </section>

            {expandedConference.team?.length > 0 && (
              <section>
                <h3 style={styles.sectionTitle}>Team</h3>
                <ul style={styles.teamList}>
                  {expandedConference.team.map(({ role, name }, index) => (
                    <li key={index} style={styles.teamItem}>
                      <span style={styles.teamRole}>{role}:</span> {name}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {expandedConference.sponsors?.length > 0 && (
              <section>
                <h3 style={styles.sectionTitle}>Sponsors</h3>
                <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
                  {expandedConference.sponsors.map((sponsor, index) => (
                    <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        style={{ width: "120px", height: "auto" }}
                        draggable={false}
                      />
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConferencesPage;