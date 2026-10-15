import axios from "axios";
import Global from "../Global";
export default class ServiceDepartamentos {
  getDepartament() {
    return new Promise(function (resolve, reject) {
      let url = Global.urlApiDepartamentos;
      let request = "api/departamentos";
      axios
        .get(url + request)
        .then((response) => {
          console.log(response.data);
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }
  createDepartment(departamento) {
    return new Promise(function (resolve, reject) {
      let url = Global.urlApiDepartamentos;
      let request = "api/departamentos";
      axios
        .post(url + request, departamento)
        .then((response) => {
          console.log("INSERTADO");
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }
  modifyDepartment(departamento) {
    let url = Global.urlApiDepartamentos;
    let request = "api/departamentos";
    return axios.put(url + request, departamento);
  }
  deleteDepartament(idDepartment) {
    return new Promise(function (resolve, reject) {
      let url = Global.urlApiDepartamentos;
      axios
        .delete(url + "api/departamentos/" + idDepartment)
        .then((response) => {
          resolve(response);
        });
    });
  }
}
