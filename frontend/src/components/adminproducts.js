import React, { useState, useEffect } from "react";
import "../App.css";
import "../index.css";
import "../new.css";
import Table from "react-bootstrap/Table";
import { PencilSimple, Backspace } from "phosphor-react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Sidebar from "./sidebar";
function Adminproducts() {
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [data, setData] = useState({
    title: "",
    description: "",
    _id: "",
    image: "",
    price: ",",
  });
  const [image1, setImage] = useState(null);

  const postAdd = async () => {
    const response = await fetch("/admin/post/", {
      method: "GET",
    });
    const data = await response.json();
    setPost(data);
  };
  useEffect(() => {
    postAdd();
  }, []);
  const [show, setShow] = useState(false);

  const deleteUser = async (_id) => {
    const res = await fetch(`/admin/post/${_id}`, {
      method: "DELETE",
    });
    const p = await res.json();
    console.log(p);
    setUser(user.filter((i) => i.id !== _id));
    if (res.ok) {
      postAdd();
      alert("User is delete ");
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const checkProducts = async (_id) => {
    handleShow();
    const response = await fetch(`/admin/post/${_id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    console.log(json.image);
    setData({
      json,
      title: json.title,
      description: json.description,
      price: json.price,
      _id: json._id,
      id: json.id,
    });
    setImage(json.image);
    console.log(image1);
  };

  //update the products
  const UpdateProducts = async (_id) => {
    const data1 = new FormData();
    data1.append("image", image1);
    data1.append("title", data.title);
    data1.append("description", data.description);
    data1.append("price", data.price);
    const response = await fetch(`/admin/post/${_id}`, {
      method: "PUT",
      body: data1,
    });
    const json = await response.json();
    setImage(json);
    console.log(image1);
    if (response.ok) {
      alert("Product is updated");
      handleClose();
      postAdd();
    }
  };

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <Sidebar />
      <div className="admin-product ">
        <h1 className="comm-main text-center ">All Post</h1>

        <Table striped>
          <thead>
            <tr>
              <th>id</th>

              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {post.map((data) => (
              <>
                <tr key={data.id}>
                  <td>{data.id}</td>

                  <td>
                    {" "}
                    <img
                      src={data.image}
                      alt={data.title}
                      width="100"
                      height="60"
                    />
                  </td>

                  <td>{data.title}</td>
                  <td>{data.price}</td>
                  <td>
                    <button onClick={() => checkProducts(data._id)} className='post-table-btn'>
                      <PencilSimple size={28} />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => deleteUser(data._id)} className='post-table-btn'>
                      <Backspace size={28} />
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>

        <Offcanvas show={show} onHide={handleClose} backdrop="static" >
          <Offcanvas.Header >
            <div className=" post-add-container2">
              <h3 className=" text-center ">UPDATE PRODUCT</h3>
              <div>
                <label className="comm-label">Title
                <input
                  name="title"
                  type="text"
                  value={data.title}
                  onChange={handleInputs}
                  className="form-control cmm-small-input post-add-input1 "
                />
                </label>
                <label className="comm-label">Price
                <input
                  name="price"
                  type="number"
                  className="form-control cmm-small-input post-add-input1"
                  value={data.price}
                  onChange={handleInputs}
                />
                </label>
                <label class="custom-file-upload comm-label">
                  <input
                    type="file"
                    name="file"
                    files={data.image}
                    defaultValue={data.image}
                    title={image1}
                    onChange={(e) => setImage(e.target.files[0])}
                    className="form-control post-add-input1 add-new "
                  />
                  Drop image here
                </label>
                <label className="comm-label ">Id
                <input
                  name="id"
                  type="number"
                  className="form-control cmm-small-input post-add-input1 "
                  value={data.id}
                  onChange={handleInputs}
                /></label>
                <label className="comm-label">Description
                <input
                  name="description"
                  type="textarea"
                  className="form-control cmm-small-input post-add-input1"
                  value={data.description}
                  onChange={handleInputs}
                />
</label>
<br/>
                <Button
                  className=" add-new-btn"
                  color="success"
                  onClick={() => UpdateProducts(data._id)}
                >
                  Update
                </Button>
                <Button color="secondary" onClick={handleClose} className=" add-new-btn">
                  Cancel
                </Button>
              </div>
            </div>
          </Offcanvas.Header>
        </Offcanvas>
      </div>
    </>
  );
}

export default Adminproducts;
