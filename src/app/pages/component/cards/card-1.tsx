import { useState } from 'react';
import img from '../../../assets/img/01.jpg'
export default function Card1(props: any) {
    
    let img = '';
    //console.log(props.img)
    if(props.img == `${process.env.REACT_APP_IMG_STANDARD}`) img = `${process.env.REACT_APP_HOST}img/${props.img}`;
    return (
        <>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <div className="card mb-3">
                    <img src={img} className="card-img-top imgDashbord" />
                    <div className="card-body">
                        <span>{props.name}</span>
                    </div>
                </div>
            </div>
        </>
    );
}