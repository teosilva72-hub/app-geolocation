import axios from "axios"

export default new class UserAPI{

    async registerUser(name:string, email:string, password:string){

        const data = {
            name:name,
            email:email,
            password:password
        };
        console.log(data)
        try{
            const res = await axios.post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_ROUTER_CREATE_USER}`, data);
            return res.data;
        }catch(e:any){
            return e.toString();
        }

    }
}