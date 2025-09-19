import React from "react";
import { Link } from "react-router-dom";

const Conference2024Page = () => {
  const videoIds = [
    "dQw4w9WgXcQ",
    "3JZ_D3ELwOQ",
    "L_jWHffIx5E",
    "9bZkp7q19f0",
    "eVTXPUF4Oz4",
    "2Vv-BfVoq4g",
  ];

  const speakers = [
    { name: "Jane Doe", description: "Innovator in AI and ethics." },
    { name: "John Smith", description: "Leadership and change expert." },
    { name: "Alice Johnson", description: "Designing for impact advocate." },
    { name: "Michael Lee", description: "Future of sustainability." },
  ];

  const testimonials = [
    { text: "One of the most inspiring events I've ever attended!", author: "Attendee A" },
    { text: "The talks changed my perspective completely.", author: "Attendee B" },
    { text: "Such amazing energy and people at TEDxUTD!", author: "Attendee C" },
  ];

  // Responsive grid column counts based on window width
  // We'll use CSS media queries in a style tag for responsiveness

  return (
    <>
      <style>{`
        .section {
          padding: 3rem 1.5rem;
          box-sizing: border-box;
          max-width: 100%;
          overflow-x: hidden;
          width: 100%;
        }
        .section.px-md {
          padding-left: 5rem;
          padding-right: 5rem;
        }
        .text-center {
          text-align: center;
        }
        h1 {
          font-weight: 800;
          margin-bottom: 1rem;
          font-size: 3rem;
        }
        @media (min-width: 768px) {
          h1 {
            font-size: 3.75rem;
          }
          .section.px-md {
            padding-left: 5rem;
            padding-right: 5rem;
          }
        }
        blockquote {
          border-left: 4px solid #e62b1e;
          padding-left: 1.5rem;
          font-style: italic;
          font-weight: 300;
          font-size: 1.5rem;
          color: #d1d5db;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 768px) {
          blockquote {
            font-size: 1.875rem;
          }
        }
        /* Video Grid */
        .video-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 1200px;
          width: 100%;
          box-sizing: border-box;
          overflow-x: hidden;
        }
        @media (min-width: 640px) {
          .video-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .video-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px rgba(0,0,0,0.5);
          box-sizing: border-box;
          max-width: 100%;
        }
        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
          box-sizing: border-box;
          max-width: 100%;
          overflow-x: hidden;
        }
        /* Speaker Highlights */
        .speakers-section {
          background-color: #18181b;
        }
        .speakers-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 1200px;
          width: 100%;
          box-sizing: border-box;
          overflow-x: hidden;
        }
        @media (min-width: 640px) {
          .speakers-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .speakers-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .speaker-card {
          background-color: #000000;
          border-radius: 0.5rem;
          padding: 1.5rem;
          box-shadow: 0 10px 15px rgba(0,0,0,0.5);
          box-sizing: border-box;
          overflow-x: hidden;
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .speaker-card:hover {
          transform: scale(1.05);
        }
        .speaker-photo {
          width: 100%;
          height: 10rem;
          background-color: #4b5563;
          border-radius: 0.375rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          font-size: 1.25rem;
          box-sizing: border-box;
          overflow-x: hidden;
        }
        .speaker-name {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .speaker-description {
          color: #d1d5db;
          font-size: 1rem;
        }
        /* Testimonials */
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 1200px;
          width: 100%;
          box-sizing: border-box;
          overflow-x: hidden;
        }
        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .testimonial-card {
          background-color: #27272a;
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px rgba(0,0,0,0.5);
          box-sizing: border-box;
          overflow-x: hidden;
          transition: transform 0.3s ease;
          cursor: pointer;
          position: relative;
        }
        .testimonial-card:hover {
          transform: scale(1.05);
        }
        .testimonial-text {
          font-size: 1.125rem;
          font-style: italic;
          color: #d1d5db;
          margin-bottom: 1rem;
        }
        .testimonial-author {
          color: #e62b1e;
          font-weight: 600;
          font-size: 1rem;
        }
        /* CTA */
        .cta-section {
          padding: 5rem 1.5rem;
          text-align: center;
          box-sizing: border-box;
          max-width: 100%;
          overflow-x: hidden;
          margin-top: auto;
        }
        .cta-button {
          background-color: #e62b1e;
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.375rem;
          font-size: 1.25rem;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.3s ease, background-color 0.3s ease;
          box-sizing: border-box;
          max-width: 100%;
          overflow-x: hidden;
          border: none;
        }
        .cta-button:hover {
          transform: scale(1.05);
          background-color: #b52316;
        }
      `}</style>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          fontFamily: "sans-serif",
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Hero Title */}
          <section className="section text-center">
            <h1>TEDxUTD 2024 Conference</h1>
          </section>

          {/* Theme Summary */}
          <section className="section px-md">
            <blockquote>
              "Exploring Boundaries, Igniting Ideas" – The 2024 TEDxUTD theme
              celebrated innovation, leadership, and the power of community.
            </blockquote>
          </section>

          {/* Video Grid */}
          <section className="section px-md">
            <h2 style={{ fontSize: "2.25rem", fontWeight: "700", marginBottom: "2.5rem", textAlign: "center" }}>
              Conference Talks
            </h2>
            <div className="video-grid">
              {videoIds.map((id, index) => (
                <div key={index} className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Conference Talk ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Speaker Highlights */}
          <section className="section px-md speakers-section">
            <h2 style={{ fontSize: "2.25rem", fontWeight: "700", marginBottom: "2.5rem", textAlign: "center" }}>
              Speaker Highlights
            </h2>
            <div className="speakers-grid">
              {speakers.map((speaker, idx) => (
                <div key={idx} className="speaker-card" tabIndex={0} aria-label={`Speaker ${speaker.name}`}>
                  <div className="speaker-photo">Photo</div>
                  <h3 className="speaker-name">{speaker.name}</h3>
                  <p className="speaker-description">{speaker.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="section px-md">
            <h2 style={{ fontSize: "2.25rem", fontWeight: "700", marginBottom: "2.5rem", textAlign: "center" }}>
              What People Said
            </h2>
            <div className="testimonials-grid">
              {testimonials.map((t, idx) => (
                <div key={idx} className="testimonial-card" tabIndex={0} aria-label={`Testimonial by ${t.author}`}>
                  <p className="testimonial-text">"{t.text}"</p>
                  <p className="testimonial-author">– {t.author}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="cta-section">
            <Link to="/events" className="cta-button" aria-label="Stay tuned for our next conference!">
              Stay tuned for our next conference!
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default Conference2024Page;