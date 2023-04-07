import { useState } from "react";
import UserAPI from '../../../../api/user';

export default function RegisterUser(props: any) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const register = async (e: any) => {
        e.preventDefault();
        const req = await UserAPI.registerUser(name, email, password);
        console.log(req)
    }

    return (
        <>
            <div className="modal fade" id="registerUser" aria-labelledby="registerUser" aria-hidden="true">
                <div className="modal-dialog">
                    <form id="FormRegisterUser" onSubmit={register}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Novo Cadastro</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <div className="row">
                                    <div className="col-12">
                                        <span>Nome Completo</span>
                                        <input type="text" className="form-control mb-3"
                                            value={name}
                                            onChange={(e: any) => { setName(e.target.value) }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <span>E-mail</span>
                                        <input type="email" className="form-control mb-3"
                                            value={email}
                                            onChange={(e: any) => { setEmail(e.target.value) }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <span>Senha</span>
                                        <input type="password" className="form-control mb-3"
                                            value={password}
                                            onChange={(e: any) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                <button type="submit" className="btn btn-primary">Cadastrar-se</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}