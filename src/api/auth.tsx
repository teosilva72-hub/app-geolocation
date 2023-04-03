import axios from 'axios';

export default new class Auth {

    async login(email: string, password: string) {

        const data: Object = {
            "email": email,
            "password": password
        }
        try {
            const res = await axios.post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_ROUTER_LOGIN}`, data);
            return res.data;
        } catch (e: any) {
            return false;
        }

    }

    async setToken(page: string) {
        console.log(page)
        const instance = axios.create({
            baseURL: `${page}`,
            timeout: 800000,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        });
        axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    }

    async verifyToken(page: string, id: number) {
        
        await this.setToken(`${process.env.REACT_APP_LOCAL_HOST}${page}`);
        try {
            const res: any = await axios.get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_GET_USER}${id}`);
            return res;
        } catch (e: any) {
            return false;
        }
    }

    getData() {
        var res: any = localStorage?.getItem('token');
        if (res == null || res == '' || res == undefined) return false;
        else {
            var base64Url = res?.split('.')[1];
            var base64 = base64Url?.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            res = JSON.parse(jsonPayload);
            return res;
        }
    }
}
