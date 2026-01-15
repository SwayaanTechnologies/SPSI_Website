import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./ContactUs.module.css";

const contactDetails = [
  {
    title: "Address",
    lines: ["3427 E Trinity Mills Road,", "Dallas, Texas, 75287"],
    icon: faLocationDot,
  },
  {
    title: "Phone",
    lines: ["Office (214) 613-2588", "Dispatch (972) 200-2955"],
    icon: faPhoneVolume,
  },
  {
    title: "E-mail",
    lines: ["info@shadow-protective.com", "hr@shadow-protective.com"],
    icon: faEnvelope,
  },
];

const initialState = {
  fullName: "",
  email: "",
  message: "",
};

export default function ContactUs() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = "Full Name is required";
    }
    if (!form.email.trim()) {
      nextErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = "Enter a valid email address";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Message is required";
    }
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Contact Us</h2>
          <p>
            Get in touch with us for any inquiries or to request a security
            consultation
          </p>
        </div>
        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <label className={styles.srOnly} htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
            />
            {errors.fullName && (
              <span id="fullName-error" className={styles.error}>
                {errors.fullName}
              </span>
            )}

            <label className={styles.srOnly} htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span id="email-error" className={styles.error}>
                {errors.email}
              </span>
            )}

            <label className={styles.srOnly} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <span id="message-error" className={styles.error}>
                {errors.message}
              </span>
            )}

            <button type="submit">Send Message</button>
            {submitted && (
              <p className={styles.success} role="status">
                Message sent successfully.
              </p>
            )}
          </form>
        </div>
        <div className={styles.detailsGrid}>
          {contactDetails.map((detail) => (
            <div className={styles.detailsCard} key={detail.title}>
              <div className={styles.detailsIcon}>
                <FontAwesomeIcon icon={detail.icon} />
              </div>
              <h3>{detail.title}</h3>
              {detail.title === "E-mail"
                ? detail.lines.map((line) => (
                    <p key={line}>
                      <a
                        href={`mailto:${line}`}
                        className={styles.emailLink}
                      >
                        {line}
                      </a>
                    </p>
                  ))
                : detail.lines.map((line) => <p key={line}>{line}</p>)}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottomNavRow}>
        <button
          className={styles.topImageBtn}
          aria-label="Back to top of homepage"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="/spsi8.png"
            alt="Back to top logo"
            className={styles.topImage}
            style={{ opacity: 0.65 }}
          />
        </button>
      </div>
    </section>
  );
}
