import React from "react";
import { useNavigate, useNavigation } from 'react-router-dom';
import $ from "jquery";
import '../../../assets/css/modalbus.css';
import BusModal from '../modal/busModal';

export default function ModalBus(props: any) {
    
    const modal = async() => {

   }
    

    return (

        <>
            <button onClick={modal} className="btn btn-outline-warning p-2" id="btnBus"
                data-bs-toggle="modal" data-bs-target="#modalBus" type="button">
                <i className="bi bi-bus-front-fill"></i>
            </button>

            <BusModal
                title = "SPTRANS"
            />
        </>
    );

}