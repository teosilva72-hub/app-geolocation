import React, { useState } from "react";
import auth from "../../api/auth";
import { useNavigate } from 'react-router-dom';
import NavBar from "./component/template/navBarUser";
import '../assets/css/dashbord.css';
import WidgetInit from "./widget/widgetDashbord";
import { toast } from "react-toastify";
import Footer from "./component/template/footer";
import Map from './component/map';
import user from "../../api/user";


export default function Dashbord() {
    const position = [51.505, -0.09]
    //document.documentElement.requestFullscreen(); //tela modo fullscrean

    const navigate = useNavigate();
    let res: any = auth.getData();

    const error = (msg: string) => {
        toast.error(msg, {
            className: 'toast-danger',
            theme: 'colored',
            position: 'bottom-center',
        });
    }

    async function init() {
        if (!res) {
            error('Por favor, faça login novamente!');
            setTimeout(() => {
                navigate('/');
                localStorage.clear();
            }, 3000);
        } else {
            const data = await auth.verifyToken('/index');
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

        }
    }


    async function location(){
        await navigator.geolocation.getCurrentPosition((e:any) => {
            localStorage.setItem("lat", `${e.coords.latitude}`);
            localStorage.setItem("log", `${e.coords.longitude}`);
            localStorage.setItem("precision", e.coords.accuracy)
        });

        const res = await user.saveLocation({
            lat: localStorage.getItem('lat'),
            lng: localStorage.getItem('log'),
            precision: localStorage.getItem('precision')

        });
        console.log(res)
    }

    (async()=>{
        await init();
        await location();
    })();

    return (
        <>
            <NavBar
                titleHeader="Dashbord"
                titleFooter="Dashbord"
            />

            <section className="marginTop">
                <Map
                    lat={Number(localStorage.getItem('lat'))}
                    log={Number(localStorage.getItem('log'))}
                    marker={[
                        Number(localStorage.getItem('lat')),
                        Number(localStorage.getItem('log'))
                    ]}
                />
            </section>

            <Footer />

        </>
    );
}