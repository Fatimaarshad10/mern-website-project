import React, { useState } from "react";
import Sidebar from "./sidebar";
import "../new.css";
import { Upload } from "phosphor-react";
import 'react-quill/dist/quill.snow.css';
function AdminAddPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");

  const [image, setImage] = useState([]);

  async function AddPost() {
    console.warn(title, price, description, image , id);
    const data = new FormData();
    data.append("image", image);
    data.append("title", title);
    data.append("description", description);
    data.append("id", id);

    data.append("price", price);
    const response = await fetch(`/admin/post`, {
      method: "POST",
      body: data,
    });

    const Alldata = await response.json();
    if (!response.ok) {
      console.log(Alldata);
    } else {
      setTitle("");
      setDescription("");
      setPrice("");
      setId("")
      console.log("New Post added:", Alldata);
      alert("New Post added");
    }
  }
  return (
    <>
      <Sidebar />
      <div className="comm-container-2 post-add-container">
        <h1 className=" comm-main text-center ">Add Post</h1>
        <div className="comm-input ">
          <label className="comm-label">Title</label>
          <input
            className="form-control cmm-small-input post-add-input"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="comm-label">Price</label>
          <input
            type="number"
            className="form-control cmm-small-input post-add-input"
            onChange={(e) => setPrice(e.target.value)}
          />
           <div className="post-table-id">
          <label class="custom-file-upload comm-label">
            <input
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="form-control mb-3 post-add-input"
              style={{ marginTop: "15px" }}
            />
            <Upload size={32} className="post-add-icon" />
            Drop image here
          </label>
          <label className="comm-label post-table-label">Id</label>
                <input
                  name="id"
                  type="number"
            onChange={(e) => setId(e.target.value)}

                  className="form-control cmm-small-input post-add-input post-table-id-input"
                />
         </div>

          <br />
          <label className="comm-label">Description</label>
          <input
            type="textarea"
            className="form-control cmm-small-input comm-comment post-add-input"
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="post-add-btn" onClick={AddPost}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminAddPost;
