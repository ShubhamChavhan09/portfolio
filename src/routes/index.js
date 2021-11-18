import React from "react";
import { Routes, Route } from "react-router";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import NotFound from "../pages/404";
import Home from "../pages/Home";
import ProjectDetail from "../pages/ProjectDetail";

const Pages = () => {
  return (
    <div style={{ padding: "10px" }}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/skills" exact element={<Skills />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/projects/:id" exact element={<ProjectDetail />} />
        <Route component={NotFound} />
      </Routes>
    </div>
  );
};

export default Pages;
