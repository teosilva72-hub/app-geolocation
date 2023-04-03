import NavBar from "../../../interface/NavBar";
import React from 'react';
import ReactDOM from 'react-dom';

const NavBars = (props:NavBar) => {
    const icone:any = props.icon;
    return (

        <>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="d-flex">
                    <span className="navbar-brand mb-0 h1 ms-5">{props.titleHeader}</span>
                </div>
            </nav>

            <footer className="navbar navbar-dark bg-dark fixed-bottom d-flex">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <span className="navbar-brand ms-5 h1 text-center">
                            {props.titleFooter}
                        </span>
                    </div>
                </div>
            </footer>
        </>

    );
}

export default NavBars;