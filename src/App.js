import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Homepage from "./asset/HomePage/Homepage";
import Layout from "./Layout/Layout"; // Import the Layout component
import PostCard from "./component/PostCard";
import ReelsIdeas from "./ReelsIdeas/ReelsIdeas";
import ReelSingleIdea from "./ReelSingleIdea/ReelSingleIdea";

function App() {
  return (
    <Router>
      {/* <PostCard /> */}
      <Routes>
        {/* <Route path='/' element={<PostCard />}></Route> */}

        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Reels" element={<ReelsIdeas />} />
        <Route path="/Reels/:id" element={<ReelSingleIdea />} />
      </Routes>
      {/* <Layout>
      </Layout> */}
    </Router>
  );
}

export default App;
