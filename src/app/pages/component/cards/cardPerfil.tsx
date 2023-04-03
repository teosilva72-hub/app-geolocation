import img from '../../../assets/img/not-found-2.png'


export default function CardPerfil(props: any) {

    return (
        <>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <div className="card mb-3">
                    <img src={img} className="card-img-top" />
                    <div className="card-body">
                        <h6>Foto de Perfil</h6><hr />
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-dark">Alterar</button>
                            <button type="button" className="btn btn-outline-danger"><i className="bi bi-trash3-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}