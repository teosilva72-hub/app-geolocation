import '../../../assets/css/navBarUser.css';
import { toast } from 'react-toastify';
import { useNavigate, useNavigation } from 'react-router-dom';
import NavBar from '../../../interface/NavBar';
import { useState } from 'react';
import ModalBus from '../bus/modaBus';

export default function NavBarUser(props: any) {
    const navigate = useNavigate();

    setTimeout(() => {
        const path = window.location.hash.replace('#/', '');
        let el = document.querySelector(`.${path}`);
        el?.classList.add('d-none');
    }, 100);


    const closeOffCanvas = () => {
        let el = document.querySelector('.offcanvas');
        el?.classList.remove('show');
    }

    const home = () => {
        toast.dark(`${localStorage.getItem('userName')}, estamos direcionar você a tela inicial.`, {
            className: 'toast-success',
            theme: 'light',
            position: 'bottom-center',
            autoClose: 1000
        });

        setTimeout(() => {
            navigate('/index');
        }, 0);

        closeOffCanvas();
    }


    const perfil = () => {
        toast.dark(`${localStorage.getItem('userName')}, estamos direcionar você ao seu perfil.`, {
            className: 'toast-success',
            theme: 'light',
            position: 'bottom-center',
            autoClose: 1000
        });
        setTimeout(() => {
            navigate('/perfil')
        }, 0);

        closeOffCanvas();

    }

    const logout = async () => {
        toast.warning(`${localStorage.getItem('userName')}, volte logo! Estamos esperando por você.`, {
            className: 'toast-success',
            theme: 'dark',
            position: 'bottom-center',
            autoClose: 4000
        });
        setTimeout(() => {
            navigate('/');
            localStorage.clear();
        }, 0);
    }

    return (
        <>
            <nav className="navbar navbar-expand-xxxl bg-body-tertiary bg-dark fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler bg-secondary"
                        type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id='notification'>
                        <form id='formBtnMenu'>
                            <button type="button" className="btn btn-outline-primary position-relative p-2">
                                <i className="bi bi-envelope-fill"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    99+
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                            <ModalBus/>
                            <button type="button" className="btn btn-outline-danger p-2">
                                <i className="bi bi-funnel-fill"></i>
                            </button>
                        </form>
                    </div>
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div className="offcanvas-header">
                            <h1 className="offcanvas-title" id="offcanvasScrollingLabel"><i className="bi bi-menu-up"></i> Menu</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav list">
                                <li className="nav-item">
                                    <a className={`nav-link dashbord`} aria-current="page" href="#" onClick={home} ><i className="bi bi-house-fill"></i> Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link carteira" href="#"><i className="bi bi-wallet-fill"></i> Recargas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link galeria" href="#"><i className="bi bi-newspaper"></i> Noticias</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link perfil`} href='#' onClick={perfil}><i className="bi bi-person-circle"></i> Perfil</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={logout}><i className="bi bi-box-arrow-right"></i> sair</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}