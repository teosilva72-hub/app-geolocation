import axios from "axios";
import auth from "./auth";

export default new class UserAPI {

    async registerUser(
        name: string,
        email: string,
        password: string,
        birth: string,
        sex: string,
        photo: string
    ) {

        const data = {
            name: name,
            email: email,
            password: password,
            birth: birth,
            sex: sex
        };
        try {
            const res = await axios.post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_ROUTER_CREATE_USER}`, data);
            return [true, res.data.message];
        } catch (e: any) {
            return [false, e.response.data.message];
        }

    }

    async getAllUsers() {
        try {
            await auth.setToken('index');
            const res = await axios.get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_GET_ALL_USERS}`);
            return res.data.data

        } catch (error: any) {
            return false;
        }
    }

    async saveLocation(location: any) {
        console.log(location)
        await auth.verifyToken('/index');
        const data = {
            lat: location.lat,
            lng: location.lng,
            precision: location.precision
        }
        try {
            const res = await axios
                .post(
                    `${process.env.REACT_APP_HOST}${process.env.REACT_APP_SAVE_LOCATION}`,
                    data
                );
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}