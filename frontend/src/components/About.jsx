import React from "react";
import { Card } from "react-bootstrap";
import FirstNavbar from './navbar';
import Footer from './footerCheck';
import "../index.css";
function About() {
  return (

    <>
<FirstNavbar/>

      <div class="container">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-4 ">
          <Card  className="about-text">
            <Card.Text>
            <div >
                <h3 className="about-h">Ksenia Kondyleva</h3>
                <p className="about-pp">young artist from Russia</p>
                <p className="about-p1">
                  Selft taught creator. One of the most popular russian
                  portraitist. Improves her skills every day for the third year.
                </p>
              </div>
            </Card.Text>
          </Card>
          <Card >
            <Card.Img
              className=" rounded-0 about "
              variant="top"
              src="https://thumb.tildacdn.com/tild3932-3135-4439-b135-633831653362/-/format/webp/AfterlightImage_13.jpg"
            />
          </Card>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
