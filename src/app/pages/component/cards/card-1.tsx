import img from '../../../assets/img/01.jpg'

export default function Card1(props: any) {
 
    return (
        <>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <div className="card mb-3">
                    <img src={props.img} className="card-img-top imgDashbord" />
                    <div className="card-body">
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-danger col-6"><i className="bi bi-eye"></i></button>
                            <button type="button" className="btn btn-outline-primary col-6"><i className="bi bi-info-circle-fill"></i></button>
                            <button type="button" className="btn btn-outline-dark col-6"><i className="bi bi-chat-text-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}