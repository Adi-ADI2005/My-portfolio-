import React, { useRef, useState } from "react";
import "./style.css";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const contactLinks = [
  { icon: <FaPhone />,     href: "tel:+918280140085",                    label: "Phone",     title: "+91 8280140085"         },
  { icon: <FaEnvelope />,  href: "mailto:aadityamishra.0085@gmail.com",  label: "Email",     title: "myselfadi009@gmail.com" },
  { icon: <FaLinkedin />,  href: "https://www.linkedin.com/in/myselfadi",label: "LinkedIn",  title: "linkedin.com/in/myselfadi", newTab: true },
  { icon: <FaGithub />,    href: "https://github.com/Adi-ADI2005",       label: "GitHub",    title: "github.com/Adi-ADI2005",    newTab: true },
  { icon: <FaInstagram />, href: "https://instagram.com/my_self_____adi",label: "Instagram", title: "@my_self_____adi",           newTab: true },
  { icon: <FaXTwitter />,  href: "https://x.com/my_self__adi",           label: "X",         title: "@my_self__adi",             newTab: true },
];

const locationInfo = {
  icon: "bi bi-geo-alt-fill",
  label: "Location",
  text: "Jagatsinghpur, Odisha, India",
};

export default function Contactconpo() {
  const form = useRef();
  const [isSending,     setIsSending]     = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");
    const formData = new FormData(form.current);
    try {
      const response = await fetch("https://formspree.io/f/mnngygoe", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (response.ok) {
        setStatusMessage("✅ Message sent successfully!");
        form.current.reset();
      } else {
        const data = await response.json();
        setStatusMessage(data?.errors?.[0]?.message || "❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("❌ Failed to send message. Please check your connection.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">

        {/* === Left: Contact Info — icons only === */}
        <div className="contact-info">
          <h2 className="contact-heading">Contact Me</h2>

          <div className="contact-icons-grid">
            {contactLinks.map(({ icon, href, label, title, newTab }) => (
              <a
                key={label}
                href={href}
                className="contact-icon-btn"
                title={title}
                {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="contact-icon-symbol">{icon}</span>
                <span className="contact-icon-label">{label}</span>
              </a>
            ))}
          </div>

          <div className="contact-location">
            <i className={`${locationInfo.icon} contact-loc-icon`}></i>
            <span className="contact-loc-text">{locationInfo.text}</span>
          </div>
        </div>

        {/* === Right: Contact Form === */}
        <div className="contact-form-wrapper">
          <h2 className="contact-heading">Get in Touch</h2>
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text"  id="name"    name="name"    placeholder="Enter your name"  required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email"   name="email"   placeholder="Enter your email" required />
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Write your message" required />
              </div>
            </div>
            <button type="submit" className="submit-btn" disabled={isSending}>
              {isSending ? "Sending…" : "Submit"}
            </button>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </form>
        </div>

      </div>
    </section>
  );
}
