import React from "react";
import FirstNavbar from './navbar';
import Footer from './footerCheck';
function Contact() {
  return (
    <>
    <FirstNavbar/>
    <div className="contact">
      <h1 className="contact-h comm-main">Feel free to contact me</h1>
      <img
        className="contact-image"
        src="https://thumb.tildacdn.com/tild3531-3661-4064-a530-316339613534/-/cover/320x320/center/center/-/format/webp/IMG_5889.jpg"
        alt="contact"
      />
      <h1 className="contact-h1 mt-3">Ksenia Kondyleva</h1>
      <p className="contact-name">Humid peach</p>
      <div className="contact-phone">
        <p>
          {" "}
          <strong className="contact-h-bold">Phone:</strong> +7 996 321 40 36
        </p>
        <p className="contact-p">
          <strong className="contact-h-bold">E-mail:</strong>{" "}
          <a href='/'className="contact-link">peach@humidpeach.com</a>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
