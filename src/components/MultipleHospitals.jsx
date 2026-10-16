import React, { Component } from "react";
import ServiceHospitales from "../services/ServiceHospitales";
import WorkersComponent from "./WorkersComponent";
export default class MultipleHospitals extends Component {
  selectH = React.createRef();
  service = new ServiceHospitales();
  state = { workers: [], selected: [] };
  loadHospitales = async () => {
    let datos = await this.service.getTrabajadores();
    this.setState({ workers: datos });
  };
  componentDidMount = async () => {
    await this.loadHospitales();
  };
  loadSelected = (event) => {
    event.preventDefault();
    //DE ESTA FORMA LLAMAMOS A LOS DIFERENTES OPTIONS DE UN SELECT MULTIPLE
    let valor = this.selectH.current.options;
    let aux = [];
    for (let option of valor) {
      if (option.selected) {
        aux.push(option.value);
      }
    }
    this.setState({ selected: aux });
  };
  render() {
    return (
      <div>
        <h1>Select multiple de hospitales</h1>
        <form>
          <select size="6" multiple ref={this.selectH} className="form-control">
            {this.state.workers.map((index, key) => {
              return (
                <option value={index.idHospital} key={key}>
                  {index.nombre}
                </option>
              );
            })}
          </select>
          <button onClick={this.loadSelected} className="btn btn-primary">
            Enviar
          </button>
        </form>
        {this.state.selected.length != 0 && (
          <WorkersComponent idhospital={this.state.selected} />
        )}
      </div>
    );
  }
}
