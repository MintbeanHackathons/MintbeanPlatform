import axios from "axios";

export class ApiService {
  get(url: string) {
    return axios.get(url);
  }
}
