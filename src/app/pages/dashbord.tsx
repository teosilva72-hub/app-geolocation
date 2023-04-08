import React from "react";
import auth from "../../api/auth";
import { useNavigate } from 'react-router-dom';
import NavBar from "./component/template/navBarUser";
import '../assets/css/dashbord.css';
import WidgetInit from "./widget/widgetDashbord";
import { toast } from "react-toastify";
import Footer from "./component/template/footer";

export default function Dashbord() {

    document.documentElement.requestFullscreen(); //tela modo fullscrean

    const navigate = useNavigate();
    let res: any = auth.getData();

    const error = (msg: string) => {
        toast.error(msg, {
            className: 'toast-danger',
            theme: 'colored',
            position: 'bottom-center',

        });
    }

    if (!res) {
        error('Por favor, faça login novamente!');
        setTimeout(() => {
            navigate('/');
            localStorage.clear();
        }, 3000);
    } else {
        
        (async () => {
            const data = await auth.verifyToken('dashbord');
            if (!data) {
                setTimeout(() => {
                    navigate('/');
                }, 2000);
                toast.error(`Faça login novamente`, {
                    position: "bottom-center",
                    theme: "colored",
                });
                localStorage.clear();
            } else {
                localStorage.setItem('userName', `${res.name}`)
                if (localStorage.getItem('msg1') == null
                    || localStorage.getItem('msg1') == ''
                    || localStorage.getItem('msg1') == undefined) {
                    toast.info(`${res.name}, explore e conheça mais!`, {
                        position: "bottom-center",
                        theme: "dark",
                    });
                    localStorage.setItem('msg1', 'active');
                }
            }

        })()
    }

    return (
        <>
            <NavBar
                titleHeader="Dashbord"
                titleFooter="Dashbord"
            />

            <section className="marginTop">
                <div className="container">
                    < WidgetInit />
                </div>
            </section>

            <Footer />

        </>
    );
}