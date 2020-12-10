import axios from "axios";
const api = {
    getLocalJSON(){
        return axios.get('/data/list.json')
    }
}
export default api
