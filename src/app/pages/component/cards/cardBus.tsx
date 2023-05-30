import React, { useState } from "react";
import $ from 'jquery';
import { toast } from 'react-toastify';
import bus from '../../../../api/bus';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMapEvents } from 'react-leaflet';
import Map from '../map';
import Dashbord from '../../index';

export default function CardBus(props: any) {
    const [select, setSelect] = useState<string>("");
    const [placeholder, setPlaceholder] = useState<string>("");
    const [el, setEl] = useState<string>("");
    const [lat, setLat] = useState<any>([]);
    const [lng, setLng] = useState<any>([]);
    const [reqBus, setReqBus] = useState<any>([]);
    var input = $('.el');
    var alert = $('.alert');
    const selects = async () => {
        var option = $('#selectOption');
        input.removeClass('error');
        try {
            if (option.val() == 1) {
                //pesquisa por endereço
                setPlaceholder('Ex. av paulista');
                $('.element').removeClass('d-none');
            } else if (option.val() == 2) {
                //pesquisa por linha
                setEl("");
                setPlaceholder('Ex. 8542-10');
                setEl("");
                $('.element').removeClass('d-none');
            } else {
                setEl("");
                $('.element').addClass('d-none');
            }
        } catch (error) {
            console.log('error ::: ', error);
        }
    }

    const search = async (e: any) => {
        e.preventDefault();
        try {
            if (el.trim() == '' || el == null) throw '* Campo não pode ser vázio!';
            input.removeClass('error');
            const req = await bus.searchLine(el);
            await searchAlert(req);
        } catch (error: any) {
            console.log(error, '<<<<l')
            input.addClass('error');
            toast.error(error, {
                className: 'toast-danger',
                theme: 'colored',
                position: 'bottom-center',
            });
        }
    }

    const searchAlert = async (obj: any) => {
        console.log(obj)
        if (obj.code === 200) {
            toast
                .success(
                    `${obj.data[0].tp} > ${obj.data[0].ts}\n\n
                        ${obj.data[1].ts} > ${obj.data[1].tp}
                    `, {
                    className: 'toast-success',
                    theme: 'colored',
                    position: 'bottom-center',
                    autoClose: 2000
                });
            await positionLine(obj);
        }
    }

    const positionLine = async (obj: any) => {
        try {
            console.log(obj, '<<')
            const req = await bus.positionLine(obj.data[0].cl);
            console.log(req.data)
            $('#buscard').remove();
            $('#resultSearch').append(`
                <div className="card" id="buscard">
                    <div className="card-body">
                        <h6># ${obj.data[0].ts} > ${obj.data[0].tp}</h6>
                        <h6># ${obj.data[1].tp} > ${obj.data[1].ts}</h6>
                        <div class="progress">
                            <div class="progress-bar"
                                role="progressbar"
                                style="width: ${(req.data.vs.length + 20)}%;"
                                aria-valuenow="${req.data.vs.length}"
                                aria-valuemin="0" aria-valuemax="100">
                                ${req.data.vs.length}
                            </div>
                        </div>
                    </div>
                </div>
               `)

        } catch (error) {
            return false;
        }
    }

    const changeEl = async () => {
        input.removeClass('error');

    }

    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <select className="form-select text-center mb-3" id="selectOption" aria-label="Default select example" onChange={selects}>
                    <option value="">-- Escolha uma opção --</option>
                    <option value="1">Endereço</option>
                    <option value="2">Linha</option>
                </select>
            </div>
            <div className="col-12 col-lg-3 col-md-4 col-sm-4 d-none element">
                <form id="searchOption" >
                    <input className="form-control mb-3 el" id="el"
                        value={el}
                        onChange={(e) => {
                            setEl(e.target.value);
                            changeEl();
                        }}
                        placeholder={placeholder}
                        required
                    />
                </form>
            </div>
            <div className="col-12 col-lg-1 col-md-4 col-sm-4 d-none element">
                <button type="submit" className="btn btn-danger mb-3 col-12" onClick={search}>
                    <i className="bi bi-search"></i>
                </button>
            </div>
            <div className="col-12 col-lg-5 col-md-4 col-sm-4 d-none element" id="resultSearch"></div>

        </>
    );
}