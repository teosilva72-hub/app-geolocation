

export default function RegisterUser(props: any) {

    return (
        <>
            <div className="modal fade" id="registerUser" aria-labelledby="registerUser" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Novo Cadastro</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12">
                                    <span className="h6">Informe o e-mail de cadastro!</span>
                                    <input type="email" className="form-control mb-3" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary">Cadastrar-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}