import React, { Component } from "react";
import loading from "./../assets/images/loading.jpg";
import ServiceDepartamentos from "../services/ServiceDepartamentos";
import { NavLink } from "react-router-dom";
import DeleteComponent from "./DeleteComponent";
export default class HomeComponent extends Component {
  state = {
    dep: [],
    loaded: false,
    selectedDepartment: null,
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
      return result;
    });
  };
  unloadModal = () => {
    this.setState({ selectedDepartment: null });
  };
  render() {
    if (this.state.loaded === false) {
      return <img src={loading} alt="imagen carga"></img>;
    } else {
      return (
        <div>
          {this.state.selectedDepartment && (
            <DeleteComponent
              numero={this.state.selectedDepartment.numero}
              deleteDepart={this.deleteDepart}
              unloadModal={this.unloadModal}
            />
          )}
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
                      {/* Mostrar confirmacion de borrado
                        1. Cargar componente encima del otro 
                        2. Recuperar ID por props
                        3. Recuperar metodo de borrado del padre y llamarlo por el hijo
                        4. Si le doy a si eliminar y recargar
                        5. Si le doy a no dejar de mostrar el component y ya */}
                      <button
                        className="btn btn-danger"
                        //SIEMPRE HAY QUE LLAMAR CON LAMBDA LOS METODOS DE ACCION
                        onClick={() => {
                          this.setState({ selectedDepartment: dep });
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
        </div>
      );
    }
  }
}
