import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Pass the form object directly as the third argument
    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <div className="contact">
      <div className="about-title-div">
        <p className="text-header-main">Contact Me</p>

        <div className="about-title-line1"></div>
        <div className="about-title-line2"></div>
      </div>

      <div>
        <p className="contact-main-text">Have You Any Questions?</p>
        <p className="contact-sub-text"> am at your service</p>

        <div className="contact-card-div">
          <Card
            title="Call Me On"
            content="+94 779092516"
            svg_path={
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.432,20.714c9.427,6.476,18.779,12.989,26.673,21.375 C23.58,62.076,41.64,78.045,58.111,87.453c6.448,3.683,9.298,6.265,16.476,5.024l28.268,27.696 C49.657,138.039-10.045,63.084,1.432,20.714L1.432,20.714z M81.874,85.356l6.201-6.298c1.788-1.819,4.74-1.842,6.559-0.053 l22.862,22.509c1.818,1.789,1.841,4.741,0.053,6.559l-6.203,6.299c-1.789,1.818-4.741,1.841-6.56,0.052L81.924,91.915 C80.105,90.127,80.083,87.175,81.874,85.356L81.874,85.356z M7.004,7.467l4.5-5.464c1.929-2.342,5.425-2.68,7.767-0.751 l23.405,19.281c2.342,1.931,2.677,5.425,0.75,7.77l-4.502,5.461c-1.93,2.345-5.425,2.68-7.768,0.751L7.755,15.234 C5.413,13.305,5.073,9.809,7.004,7.467L7.004,7.467z"
              />
            }
          />
          <Card
            title="Location"
            content="Polonnaruwa, Srilanka"
            svg_path={
              <path
                class="st0"
                d="M68.51,106.28c-5.59,6.13-12.1,11.62-19.41,16.06c-0.9,0.66-2.12,0.74-3.12,0.1 c-10.8-6.87-19.87-15.12-27-24.09C9.14,86.01,2.95,72.33,0.83,59.15c-2.16-13.36-0.14-26.22,6.51-36.67 c2.62-4.13,5.97-7.89,10.05-11.14C26.77,3.87,37.48-0.08,48.16,0c10.28,0.08,20.43,3.91,29.2,11.92c3.08,2.8,5.67,6.01,7.79,9.49 c7.15,11.78,8.69,26.8,5.55,42.02c-3.1,15.04-10.8,30.32-22.19,42.82V106.28L68.51,106.28z M46.12,23.76 c12.68,0,22.95,10.28,22.95,22.95c0,12.68-10.28,22.95-22.95,22.95c-12.68,0-22.95-10.27-22.95-22.95 C23.16,34.03,33.44,23.76,46.12,23.76L46.12,23.76z"
              />
            }
          />
          <Card
            title="Email"
            content="duleepajayathissa@gmail.com"
            svg_path={
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M61.058,65.992l24.224-24.221l36.837,36.836H73.673h-25.23H0l36.836-36.836 L61.058,65.992L61.058,65.992z M1.401,0l59.656,59.654L120.714,0H1.401L1.401,0z M0,69.673l31.625-31.628L0,6.42V69.673L0,69.673z M122.88,72.698L88.227,38.045L122.88,3.393V72.698L122.88,72.698z"
              />
            }
          />
        </div>

        <p className="contact-main-text">Send Me An Email</p>
        <p className="contact-sub-text">I'm very responsive to messages</p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-message-container"
      >
        <div className="contact-message-upper-container">
          <input
            className="contact-input"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="contact-input"
            type="email"
            placeholder="Email"
            name="email"
          />
        </div>
        <input
          className="contact_input"
          type="text"
          placeholder="Subject"
          name="subject"
        />
        <textarea
          className="contact-input-text"
          placeholder="Message"
          name="message"
        />

        <div className="contact-message-btn-div">
          <button className="contact-message-btn" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

const Card = (props) => {
  return (
    <div className="contact-card">
      <svg
        className="card-svg"
        fill="currentColor"
        viewBox="0 0 125 125"
        xmlns="http://www.w3.org/2000/svg"
      >
        {props.svg_path}
      </svg>

      <p className="contact-card-p1">{props.title}</p>
      <p className="contact-card-p2">{props.content}</p>
    </div>
  );
};
