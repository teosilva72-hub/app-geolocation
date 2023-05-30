import React from "react";
import $ from 'jquery';
import cardBus from '../cards/cardBus';
import CardBus from "../cards/cardBus";


export default function BusModal(props: any) {


    return (
        <>
            <div className="modal fade" id="modalBus" tabIndex={-1} aria-labelledby="modalBus" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                <div className="row">
                                    <div className="col-4">
                                        <i className="bi bi-info-square-fill"></i>
                                    </div>
                                    <div className="col-8">
                                        <h5 className="text-center txtTitle">{props.title}</h5>
                                    </div>
                                </div>
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <CardBus/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}