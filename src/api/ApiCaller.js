import axios from 'axios';
import * as Config from 'ApiPath/ConfigApi';

export default function ApiCaller(endpoint, method, data) {
  return axios({
    url: endpoint,
    method: method,
    baseURL: Config.BASE_URL,
    data: data
  }).catch(err => {
    console.log(err);
  });
}