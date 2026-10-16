import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import NavbarComponent from "./NavbarComponent";
import CreateDepartamento from "./CreateDepartamento";
import UpdateComponent from "./UpdateComponent";
import MultipleHospitals from "./MultipleHospitals";
export default class Router extends Component {
  render() {
    function UpdateDepartmentElement() {
      let { numero, nombre, localidad } = useParams();
      return (
        <UpdateComponent
          numero={numero}
          nombre={nombre}
          localidad={localidad}
        />
      );
    }
    return (
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />}></Route>
          <Route path="create" element={<CreateDepartamento />}></Route>
          <Route
            path="/update/:numero/:nombre/:localidad"
            element={<UpdateDepartmentElement />}
          ></Route>
          <Route path="/hospital" element={<MultipleHospitals />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
