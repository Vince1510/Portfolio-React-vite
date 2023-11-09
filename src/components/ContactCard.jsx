import React from "react";
import gmailImg from "../assets/Gmail_icon.png";
import githubImg from "../assets/25231.png";
import linkedinImg from "../assets/174857.png";

const ContactCard = ({ name, email, github, linkedin }) => {
  return (
    <div className="contact-card">
      <div className="contact-info">
        <h2>{name}</h2>

        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=vincevanapeldoorn@gmail.com"
          target="_blank"
        >
          <img className="contact-img" src={gmailImg} alt="" />
          <p>{email}</p>
        </a>

        <a href="https://github.com/Vince1510" target="_blank">
          <img className="contact-img" src={githubImg} alt="" />
          <p>{github}</p>
        </a>
        <a
          href="https://www.linkedin.com/in/vince-van-apeldoorn-52997a248/"
          target="_blank"
        >
          <img className="contact-img" src={linkedinImg} alt="" />
          <p>{linkedin}</p>
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
