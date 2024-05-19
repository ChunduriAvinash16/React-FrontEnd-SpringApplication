import axios from  'axios';


class EmplyeeService {
  getEmployee() {
    return axios.get("http://localhost:8084/api/employees/9");
  }
}

export default new EmplyeeService;