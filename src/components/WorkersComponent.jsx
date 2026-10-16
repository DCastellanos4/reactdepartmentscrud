import React, { Component } from "react";
import ServiceHospitales from "../services/ServiceHospitales";

export default class WorkersComponent extends Component {
  service = new ServiceHospitales();
  state = { workers: [] };
  loadWorkers = async () => {
    //RECUPERAMOS EL ARRAY DE LOS HOSPITALES
    let idhospital = this.props.idhospital;
    let data = "";
    //idhospital=17&idhospital=22
    for (let id of idhospital) {
      data += "idhospital=" + id + "&";
    }
    data = data.substring(0, data.length - 1);
    //recuperamos los datos de los trabajadores
    //siempre que llamemos a metodos async hay que ponerle el await
    let datos = await this.service.getTrabajadoresByHospital(data);
    console.log(datos);
    this.setState({ workers: datos });
  };
  componentDidMount = async () => {
    await this.loadWorkers();
  };
  componentDidUpdate = async (oldProps) => {
    if (oldProps.idhospital != this.props.idhospital) {
      await this.loadWorkers();
    }
  };
  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>apellido</th>
              <th>oficio</th>
              <th>salario</th>
            </tr>
          </thead>
          <tbody>
            {this.state.workers.map((t, index) => {
              return (
                <tr key={index}>
                  <td>{t.apellido}</td>
                  <td>{t.oficio}</td>
                  <td>{t.salario}</td>
                  <td>{t.idHospital}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
