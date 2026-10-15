import React, { Component } from "react";
import loading from "./../assets/images/loading.jpg";
import ServiceDepartamentos from "../services/ServiceDepartamentos";
import { NavLink } from "react-router-dom";
export default class HomeComponent extends Component {
  state = {
    dep: [],
    loaded: false,
  };
  service = new ServiceDepartamentos();
  loadDepartmentDetails = () => {
    this.service.getDepartament().then((response) => {
      this.setState({
        dep: response,
        loaded: true,
      });
    });
  };
  componentDidMount = () => {
    this.loadDepartmentDetails();
  };
  deleteDepart = (id) => {
    this.service.deleteDepartament(id).then((result) => {
      //QUEREMOS RECARGAR LOS DATOS DEL DEPARTAMENTO
      this.loadDepartmentDetails();
    });
  };
  render() {
    if (this.state.loaded === false) {
      return <img src={loading} alt="imagen carga"></img>;
    } else {
      return (
        <table className="table table-info">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Localidad</th>
              <th>Accion</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dep.map((dep, index) => {
              return (
                <tr key={index}>
                  <td>{dep.numero}</td>
                  <td>{dep.nombre}</td>
                  <td>{dep.localidad}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      //SIEMPRE HAY QUE LLAMAR CON LAMBDA LOS METODOS DE ACCION
                      onClick={() => {
                        this.deleteDepart(dep.numero);
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                  <td>
                    <NavLink
                      className="btn btn-info"
                      to={
                        "/update/" +
                        dep.numero +
                        "/" +
                        encodeURIComponent(dep.nombre) +
                        "/" +
                        encodeURIComponent(dep.localidad)
                      }
                    >
                      Editar
                    </NavLink>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  }
}
