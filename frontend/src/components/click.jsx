import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import SearchIcon from "../images/search.png";
import "../new.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button type="button" className="filter-button" onClick={decoratedOnClick}>
      {children}
    </button>
  );
}

function Example() {
  return (
    <section className="filter-search ">
      <Accordion defaultActiveKey="0" alwaysOpen className="d-xl-none   ">
        <Card.Header className="accordion-card  filter-button  ">
          <CustomToggle eventKey="2" className="filter-button ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              className=" filter-space "
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-wid
              th="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
            <span className="filter-p">Filters</span>
          </CustomToggle>
          <CustomToggle eventKey="1">
            <img src={SearchIcon} alt="SearchIcon" className="search-icon" />
          </CustomToggle>
        </Card.Header>

        <Accordion.Item eventKey="2" className="filter-input ">
          <Accordion.Body>
            <Form.Select
              className="form-select  filter-input-main  filter-sort"
              aria-label="Default select example"
            >
              <option>Sort</option>
              <option value="1">Price: low to high</option>
              <option value="2">Price: high to low</option>
              <option value="3">Title: A--Z</option>
              <option value="3">Title: Z--A</option>
              <option value="3">Sort: newest first</option>
              <option value="3">Sort: oldest first</option>
            </Form.Select>
          </Accordion.Body>
          <Accordion.Body>
            <Form.Select
              className="form-select filter-input "
              aria-label="Default select example"
            >
              <option>Availability</option>
              <option value="1">Only in stock</option>
            </Form.Select>
          </Accordion.Body>
          <Accordion.Body>
            <Form.Select
              className="form-select filter-input "
              aria-label="Default select example"
            >
              <option>Price</option>
            </Form.Select>
          </Accordion.Body>

          <Accordion.Body>
            <Form.Select
              className="form-select filter-input"
              aria-label="Default select example"
            >
              <option value="1">Tag</option>
              <option value="2">Old</option>
              <option value="3">Prints</option>
              <option value="4">Waterclour</option>
            </Form.Select>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="filter-input">
          <Accordion.Body>
            <InputGroup>
              <Form.Control
                placeholder="Search"
                aria-label="Search"
                className="search-value"
              />
              <InputGroup.Text id="basic-addon2 ">
                <img
                  src={SearchIcon}
                  alt="SearchIcon"
                  className="search-icon"
                />
              </InputGroup.Text>
            </InputGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default Example;
