import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import NavbarComponent from "./NavbarComponent";
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
