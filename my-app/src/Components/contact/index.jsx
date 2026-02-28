import React, { useRef, useState } from "react";
import "./style.css";

export default function Contactconpo() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(""); 

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage(""); 

    const formData = new FormData(form.current);

    try {
      const response = await fetch("https://formspree.io/f/mnngygoe", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatusMessage("✅ Message sent successfully!");
        form.current.reset();
      } else {
        const data = await response.json();
        setStatusMessage(
          data?.errors?.[0]?.message || "❌ Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Formspree Error:", error);
      setStatusMessage("❌ Failed to send message. Please check your setup.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">

        {/* === Left: Contact Info === */}
        <div className="contact-info">
          <h2 className="contact-heading">Contact Me</h2>

          <div className="contact-item">
            <i className="fas fa-phone-alt contact-icon"></i>
            <span>+91 8280140085</span>
            <a href="tel:+918280140085" className="click-button">
              <i className="fas fa-link"></i> Click Me
            </a>
          </div>

          <div className="contact-item">
            <i className="fas fa-envelope contact-icon"></i>
            <span>myselfadi009@gmail.com</span>
            <a href="mailto:myselfadi009@gmail.com" className="click-button">
              <i className="fas fa-link"></i> Click Me
            </a>
          </div>

          <div className="contact-item">
            <i className="fab fa-linkedin contact-icon"></i>
            <span>linkedin.com/in/myselfadi</span>
            <a
              href="https://www.linkedin.com/in/myselfadi"
              target="_blank"
              rel="noopener noreferrer"
              className="click-button"
            >
              <i className="fas fa-link"></i> Click Me
            </a>
          </div>

          <div className="contact-item">
            <i className="fab fa-github contact-icon"></i>
            <span>github.com/Adi-ADI2005</span>
            <a
              href="https://github.com/Adi-ADI2005"
              target="_blank"
              rel="noopener noreferrer"
              className="click-button"
            >
              <i className="fas fa-link"></i> Click Me
            </a>
          </div>

          <div className="contact-item">
            <i className="fas fa-map-marker-alt contact-icon"></i>
            <span>Jagatsinghpur, Odisha, India</span>
          </div>
        </div>

        {/* === Right: Contact Form === */}
        <div className="contact-form-wrapper">
          <h2 className="contact-heading">Get in Touch</h2>
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message"
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={isSending}>
              {isSending ? "Sending..." : "Submit"}
            </button>

            {}
            {statusMessage && (
              <p className="status-message">{statusMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
