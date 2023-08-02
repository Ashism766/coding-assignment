
import axios from 'axios';
const BASE_URL = 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp';


const api = axios.create({
  baseURL: BASE_URL
});

export default api;
