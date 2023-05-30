import axios from "axios";
import auth from "./auth";

export default new class Bus {
    async searchLine(line: string) {
        await auth.setToken('index');
        try {
            const req = await axios.get(`${process.env.REACT_APP_HOST}api/sptrans/info/bus/${line}`);
            return req.data
        }catch(error){
            return false;
        }
    }

    async positionLine(line: string){
        await auth.setToken('index');
        try {
            const req = await axios.get(`${process.env.REACT_APP_HOST}api/sptrans/info/position/${line}`);
            return req.data
        }catch(error){
            return false;
        }
    }
}