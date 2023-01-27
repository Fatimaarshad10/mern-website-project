import React, { useState , useEffect} from "react";
// import ProductsJson from "../js/data.json";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "../App.css";
import "../index.css";
import SearchIcon from "../images/search.png";
import Footer from './footerCheck';

import { Link } from "react-router-dom";
function ProductsData() {
  const [searchList, setSearchList] = useState("");
  const [post, setPost] = useState([]);

  const [like, setLike] = useState(false);
  const likeBtn = () => {
    setLike(!like);
  };

  const postAdd = async () => {
    const response = await fetch("/admin/post/", {
      method: "GET",
    });
    const data = await response.json();
  
    setPost(data);
    if (response.ok) {
      // setLoader(true);
  console.log(data)
    }
  
  };
  useEffect(() => {
    postAdd()
   
  }, []);

  
  return (
    <>
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-5 filter-style-change ">
          <div className="d-none d-md-block ">
            <select className="form-select-sm select  ">
              <option>Availability</option>
              <option value="2">Only in stock</option>
            </select>
            <select className=" form-select-sm select ">
              <option value="1">Price</option>
            </select>
            <select className="form-select-sm select  ">
              <option value="1">Tag</option>
              <option value="2">Old</option>
              <option value="3">Prints</option>
              <option value="4">Waterclour</option>
            </select>
          </div>
          <div className="ms-auto d-none d-md-block input">
            <InputGroup>
              <Form.Control
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearchList(e.target.value)}
                className="input"
              />
              <InputGroup.Text id="basic-addon2" className="select-Text">
                <img
                  src={SearchIcon}
                  alt="SearchIcon"
                  className="search-icon"
                />
              </InputGroup.Text>
            </InputGroup>
          </div>
          <Form.Select className="input2 ms-4 p-1  d-none d-md-block">
            <option>Sort: by default</option>
            <option value="1">Price: low to high</option>
            <option value="2">Price: high to low</option>
            <option value="3">Title: A--Z</option>
            <option value="3">Title: Z--A</option>
            <option value="3">Sort: newest first</option>
            <option value="3">Sort: oldest first</option>
          </Form.Select>
        </div>
      </div>
      <div className="product-card-container">
        {post.filter((val) => {
          if (searchList === " ") {
            return val;
          } else if (
            val.title.toLowerCase().includes(searchList.toLowerCase())
          ) {
            return val;
          }
        }).map((data) => (
          <div>
            <Card key={data.id} className="product-card text-center">
              <Card.Img
                variant="top"
                src={data.image}
                className="product-card-image"
              />
              <Card.Body class="product-card-body card1">
                <button onClick={likeBtn} class="product-card-heart">
                  {like ? (
                    <svg
                      class="heart-icon me-3 mt-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 43 37"
                    >
                      <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
                    </svg>
                  ) : (
                    <svg
                      class="heart-icon-red me-3 mt-3 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 43 37"
                    >
                      <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
                    </svg>
                  )}
                </button>
                <div className="product-card-detail">
                  <h6 className="product-card-title">{data.title}</h6>

                  <Card.Text className="product-card-text ">
                    {data.price} usd
                    <Link to={`/product/${data.id}`}>
                      <i class="fa fa-arrow-right"></i>
                    </Link>
                  </Card.Text>
                </div>
                
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="text-center mt-5 mb-3 ">
        <Button className="fw-bold center-button">Load more</Button>
      </div>
      <Footer/>
    </>
  );
}

export default ProductsData;
