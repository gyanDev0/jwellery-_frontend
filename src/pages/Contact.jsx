import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>📞 Contact Us</h1>
        <p className="subtitle">
          We'd love to help you create your dream jewelry.
        </p>

        <div className="contact-info">
          <div className="info-box">
            <h3>🏪 Store Address</h3>
            <p>
              123 Luxury Avenue<br />
              Bhubaneswar, Odisha<br />
              India - 751001
            </p>
          </div>

          <div className="info-box">
            <h3>📱 Phone</h3>
            <p>+91 7608831747</p>
          </div>

          <div className="info-box">
            <h3>✉️ Email</h3>
            <p>support@goldencraft.com</p>
          </div>

          <div className="info-box">
            <h3>🕒 Working Hours</h3>
            <p>
              Monday - Saturday<br />
              10:00 AM - 8:00 PM
            </p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>

          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea
            rows="5"
            placeholder="Write your message..."
          ></textarea>

          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;