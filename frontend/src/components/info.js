import React from "react";
import Card from "react-bootstrap/Card";
import "../index.css";
import SecoundNavbar from "./navbar2";
import FirstNavbar from './navbar';
function Pencil() {
  return (
    <>
    <FirstNavbar/>
    <SecoundNavbar/>

      <div class="container">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-4 p-4 info-card-main">
          <Card className="info-card-img">
            <Card.Img
             
              className="ms-5 d-none d-md-block rounded-0  info-image"
              variant="top"
              src="https://thumb.tildacdn.com/tild6233-3763-4233-a165-333931646566/-/resize/800x/-/format/webp/___3.png"
            />
          </Card>
          <Card className="info-card-text p-2">
            <Card.Text className="ms-3">
              Hi! My name is Ksu, but you know me as Humid Peach
              <img
                src="https://thumb.tildacdn.com/tild3530-3931-4164-b363-346336636634/-/resize/60x/-/format/webp/___4.png"
                alt="icon"
              />
              <br />
              <br />
              Sorry, but I don't have any available payments method for <br />
              you now, only way is to use  <a className="text-dark" href="https://humidpeach.gumroad.com/l/pencil-portrait-e-guide">
                GUMROAD </a>
               ⬅️Click <br />
              <br />
              In this section you can buy my original artworks, old and <br />
              new. Some of items are available in printed version.
              <br />
              All my artworks are created with love! <br />
              I hope they will be able to please you and decorate your
              <br /> interior <br />
              <br />
              Enjoy watching and shopping!
            </Card.Text>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Pencil;
