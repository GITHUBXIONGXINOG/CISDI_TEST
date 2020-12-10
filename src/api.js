import axios from "axios";
const api = {
    //获取本地JSON文件
    getLocalJSON(){
        return axios.get('/data/list.json')
    }
}
export default api
