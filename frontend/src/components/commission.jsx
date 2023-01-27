import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FirstNavbar from './navbar';
import Footer from './footerCheck';
function Commission() {
  return (
    <>
    <FirstNavbar/>
      <div className="mt-4">
        <h1 className="text-center comm-main ">
          How to request personal commission
        </h1>
        <div className="comm-container">
          <div class="comm-horizontal_line"></div>
          <div class="line"></div>
          <div className="comm-card">
            <p className="comm-h">Contact me</p>
            <p className="comm-p">
              You can contact me via Email: peach@humidpeach.com
            </p>
          </div>

          <div className="comm-card1">
            <p className="comm-h">
              {" "}
              <div className="comm-circle mt-1"></div>Quality photos
            </p>
            <p className="comm-p">
              The watercolour portrait based on your provided personal photos.
              The best reference photos are medium to high resolution, in clear
              focus. I will do my best to work with the photo of your choice,
              but I may reject reference photos that are too small or unclear.
            </p>
          </div>

          <div className="comm-card2">
            <h2 className="comm-h">
              {" "}
              <div className="comm-circle mt-2"></div>Any whim
            </h2>
            <p className="comm-p">
              I can also combine separate reference photos of different people
              or pets into one painting. Extraneous backgrounds can be replaced
              with an expressive wash in color(s) of your choice, or an
              interpretation of the existing environment can be included.
            </p>
          </div>

          <div className="comm-card3">
            <p className="comm-h">
              <div className="comm-circle mt-1"></div>Payment
            </p>
            <p className="comm-p">
              I work with 60% prepayment before pencil sketch and 40% after
              pencil sketch but before colouring. Payment can be made via
              PayPal. I won't start work in colours until you confirm the
              sketch.
            </p>
          </div>
          <div className="comm-circle"></div>
          <div className="comm-card4 ">
            <p className="comm-h">
              {" "}
              <div className="comm-circle mt-2"></div>Price details
            </p>
            <p className="comm-p">
              This prices list is only guideline and final price can be
              different because of background and details. Special requests also
              may be priced differently, to be discussed before a deposit is
              made. Custom sizes are also available.
            </p>
          </div>
        </div>
        <h1 className="text-center comm-main mt-5">
          Prices for watercolour portrait
        </h1>
        <div className="comm-second-container">
          <h3>A5</h3>
          <p>15x21 cm 300g watercolour paper</p>
          <h3 className="comm-heading1">
            70$
            <br />
            <p className="comm-from">from</p>
          </h3>
        </div>
        <div className="comm-second-container">
          <h3>A4</h3>
          <p>21x30 cm 300g watercolour paper</p>
          <h3 className="comm-heading1">
            100$
            <br />
            <p className="comm-from">from</p>
          </h3>
        </div>
        <div className="comm-second-container">
          <h3>A3</h3>
          <p>30x42 cm 300g watercolour paper</p>
          <h3 className="comm-heading1">
            150$
            <br />
            <p className="comm-from">from</p>
          </h3>
        </div>
        <div className="comm-second-container">
          <h3>A2</h3>
          <p>42x60 cm 300g watercolour paper</p>
          <h3 className="comm-heading1">
            220$
            <br />
            <p className="comm-from">from</p>
          </h3>
        </div>
        <div className="comm-second-container">
          <h3>
            BIGGER
            <br />
            FORMATS
          </h3>

          <h3 className="comm-heading1  comm-price-add">
            270$
            <br />
            <p className="comm-from">from</p>
          </h3>
        </div>
      </div>

      <div className="comm-image-container ">
 
<div className="comm-image1 Image1"></div>
  <div className="comm-image1 Image2"></div>
       
        <div className="comm-image1 Image3"></div>
        <div className="comm-image1 Image4"></div>
        <div className="comm-image1 Image5"></div>
        <div className="comm-image1 Image6"></div>
        <div className="comm-image1 Image7"></div>
        <div className="comm-image1 Image8"></div>
      </div> 
      <h1 className="text-center comm-main  comm-h-1">
        Request personal commission
      </h1>

      <div className="comm-container-2">
        <div className="comm-input ">
          <Form.Label className="comm-label">E-mail</Form.Label>
          <InputGroup className="mb-3 ">
            <Form.Control
              className="cmm-small-input"
              placeholder="Your E-mail"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Form.Label className="comm-label"> Choose size</Form.Label>

          <Form.Select
            aria-label="Default select example"
            className="cmm-small-input "
          >
            <option value="1">
              Something special (give information in comments)
            </option>
            <option value="2">Price: high to low</option>
            <option value="3">Title: A--Z</option>
            <option value="3">Title: Z--A</option>
            <option value="3">Sort: newest first</option>
            <option value="3">Sort: oldest first</option>
          </Form.Select>
          <Form.Label className="comm-label">
            {" "}
            For which date you need an artwork
          </Form.Label>
          <InputGroup>
            <input
              type="date"
              name="email"
              className="cmm-small-input comm-calender"
            />
          </InputGroup>
          <Form.Label className="comm-label">Your photos or ideas</Form.Label>

          <InputGroup>
            <input type="file" className="mb-4" />
          </InputGroup>

          <Form.Label className="comm-label">Your commets</Form.Label>

          <InputGroup>
            <Form.Control
              className="cmm-small-input comm-comment"
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>
          <Button className="comm-btn">Send</Button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Commission;
