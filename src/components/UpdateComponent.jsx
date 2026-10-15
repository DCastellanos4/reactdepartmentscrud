import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import ServiceDepartamentos from "../services/ServiceDepartamentos";
export default class UpdateComponent extends Component {
  state = {
    mensaje: null,
    status: false,
  };
  service = new ServiceDepartamentos();
  cajaLocalidad = React.createRef();
  cajaNombre = React.createRef();
  editDepart = (event) => {
    event.preventDefault();
    let dep = {
      numero: parseInt(this.props.numero),
      nombre: this.cajaNombre.current.value,
      localidad: this.cajaLocalidad.current.value,
    };
    this.service
      .modifyDepartment(dep)
      .then(() => {
        this.setState({ status: true });
      })
      .catch((error) => {
        this.setState({
          mensaje: error.message,
        });
      });
  };
  render() {
    if (this.state.status) {
      return <Navigate to="/" />;
    }
    return (
      <div>
        {this.state.mensaje && (
          <p style={{ color: "red", fontWeight: "bold" }}>
            {this.state.mensaje}
          </p>
        )}
        <table className="table table-info">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Localidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.numero}</td>
              <td>{this.props.nombre}</td>
              <td>{this.props.localidad}</td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <form className="form" onSubmit={this.editDepart}>
          <label className="form-label">Nuevo nombre</label>
          <input
            className="input-group"
            type="text"
            defaultValue={this.props.nombre}
            ref={this.cajaNombre}
          ></input>
          <br></br>
          <label className="form-label">Nueva localidad</label>
          <input
            className="input-group"
            type="text"
            defaultValue={this.props.localidad}
            ref={this.cajaLocalidad}
          ></input>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    );
  }
}
