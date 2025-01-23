import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfilePage from "./pages/profile/[...profile]";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/posts" element={<ProfilePage />} />
        <Route path="/profile/about" element={<ProfilePage />} />
        <Route path="/profile/friends" element={<ProfilePage />} />
        <Route path="/profile/photos" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
