import React from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/detail";
import Main from './components/material';
import About from "./components/About";
import Contact from "./components/contact";
import Commission from "./components/commission";
import Create from "./components/create";
import Shop from "./components/shop";
import AdminLogin from './components/adminLogin'
import Admin from "./components/admin";
import Post from "./components/adminproducts";
import Add from "./components/adminAddPost";

import "./App.css";
function App() {
  return (
    <>
      <div>
        <Routes>
        <Route path="/watercolour" element={<Main/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/commission" element={<Commission/>} />
        <Route path="/delivery" element={<Create/>}/>
        <Route path="/contacts" element={<Contact/>} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/post" element={<Post/>} />
        <Route path="/admin/add" element={<Add/>} />

        </Routes>
       
        
       

      </div>
      

    </>
  );
}

export default App;
