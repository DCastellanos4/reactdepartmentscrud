import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import loading from "./../assets/images/loading.jpg";
export default class HomeComponent extends Component {
  state = {
    dep: [],
    loaded: false,
  };
  loadDepartmentDetails = () => {
    let url = Global.urlApiDepartamentos;
    axios.get(url + "api/departamentos").then((response) => {
      console.log(response.data);
      this.setState({
        dep: response.data,
        loaded: true,
      });
    });
  };
  componentDidMount = () => {
    this.loadDepartmentDetails();
  };
  render() {
    if (this.state.loaded == false) {
      return <img src={loading} alt="imagen carga"></img>;
    } else {
      return (
        <ul>
          {this.state.dep.map((dep, index) => {
            return <li key={index}>{dep.nombre}</li>;
          })}
        </ul>
      );
    }
  }
}
