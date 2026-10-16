import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";
export default class NavbarComponent extends Component {
  state = {
    dep: [],
  };
  loadDepartments = () => {
    let url = Global.urlApiDepartamentos;
    axios.get(url + "api/departamentos").then((response) => {
      console.log(response.data);
      this.setState({ dep: response.data });
    });
  };
  componentDidMount = () => {
    this.loadDepartments();
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink className="nav-link" to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhddvzkL8QugCtRugGj6Gs3tETMcxuHqN15q0QL3KvuckNILeDCBBxDtA&s=10"
                alt="imagen marca"
                style={{ width: "64px", height: "64px" }}
              ></img>
            </NavLink>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/create">
                    Dar de alta
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Departamentos
                  </a>
                  <ul className="dropdown-menu">
                    {this.state.dep.map((dep, key) => {
                      return (
                        <li key={key} value={dep.numero}>
                          <NavLink
                            className="nav-link"
                            to={"/departamento/" + dep.numero}
                          >
                            {dep.nombre}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/hospital">
                    Hospitales
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
