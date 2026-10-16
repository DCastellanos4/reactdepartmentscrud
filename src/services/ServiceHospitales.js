import Global from "../Global";
import axios from "axios";
export default class ServiceHospitales {
  //ASI PARA RECOGER ERRORES
  async getTrabajadoresConErrores() {
    let url = Global.urlApiTrabajadores;
    //DEBEMOS CAPTURAR LOS DATOS DEL API
    //PARA CAPTURAR ERRORES HAY QUE HACER TRY CATCH
    try {
      let response = await axios.get(url + "api/trabajadores");
      //TENEMOS LOS DATOS EN RESPONSE Y HA REALIZADO LA ACCION
      return response.data;
    } catch (error) {
      //ENTRA AQUI SI TENEMOS EL ERROR
      //SI QUEREMOS PROPAGAR EL ERROR HACIA EL COMPONENT
      throw error;
    }
  }
  async getTrabajadores() {
    let url = Global.urlApiTrabajadores;
    let response = await axios.get(url + "api/hospitales");
    return response.data;
  }
  async getTrabajadoresByHospital(data) {
    let url = Global.urlApiTrabajadores;
    console.log(url + "api/Trabajadores/TrabajadoresHospitales?" + data)
    let response = await axios.get(
      url + "api/Trabajadores/TrabajadoresHospitales?" + data,
    );
    return response.data;
  }
}
