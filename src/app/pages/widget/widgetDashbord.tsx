import Card1 from "../component/cards/card-1";
import Footer from "../component/template/footer";
import '../../assets/css/global.css';
import img from '../../assets/img/01.jpg';
import userAPI from '../../../api/user';
import { useEffect, useState } from "react";


export default function WidgetInit(props: any) {

    const [users, setUsers] = useState<any>();

    useEffect(()=>{
        const allUsers = async () => {
            const all = await userAPI.getAllUsers();
            setUsers(all);
            return users;
        }
        allUsers();
    },[]);
    
    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    {
                        users?.map((e: any, id: number) => {
                            return (
                                <>
                                    <Card1
                                        img={e.photo}
                                        name={e.name}
                                    />
                                </>
                            );
                        })
                    }

                    <div className="spaceFooter"></div>
                </div>
            </div>
        </>
    );
}