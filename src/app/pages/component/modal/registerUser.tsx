import { useState } from "react";
import UserAPI from '../../../../api/user';
import { toast } from 'react-toastify';
import $ from 'jquery';

export default function RegisterUser(props: any) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPass, setRepeatPass] = useState<string>('');
    const [sexo, setSexo] = useState<string>('');
    const [birth, setBirth] = useState<string>('');
    const [photo, setPhoto] = useState<any>('');

    const register = async (e: any) => {

        e.preventDefault();

        if (password == repeatPass) {
            const req = await UserAPI.registerUser( name, email, password, birth, sexo, photo);
            if (!req[0]) {
                toast.warning(req[1], {
                    className: 'toast-warning',
                    theme: 'dark',
                    position: 'top-center',
                });
            } else {
                $('.btn-close').click();
                toast.success(req[1], {
                    className: 'toast-success',
                    theme: 'colored',
                    position: 'top-center',
                });
            }
        } else {
            toast.error('Senhas devem ser iguais!', {
                className: 'toast-danger',
                theme: 'colored',
                position: 'top-left',
            });
        }
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
                                        <span>Seu nome</span>
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
                                        <span>Data nascimento</span>
                                        <input type="date" className="form-control mb-3"
                                            value={birth}
                                            onChange={(e: any) => { setBirth(e.target.value) }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <span>Sexo</span>
                                        <select
                                            className="form-select mb-3"
                                            aria-label="Default select example"
                                            value={sexo}
                                            onChange={(e: any) => { setSexo(e.target.value) }}
                                        >
                                            <option >Select</option>
                                            <option value="feminino">feminino</option>
                                            <option value="masculino">masculino</option>
                                            <option value="transgênero">transgênero</option>
                                            <option value="não-binário">não-binário</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <span>Senha</span>
                                        <input type="password" className="form-control mb-3"
                                            value={password}
                                            onChange={(e: any) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <span>Repita a senha</span>
                                        <input type="password" className="form-control mb-3"
                                            value={repeatPass}
                                            onChange={(e: any) => setRepeatPass(e.target.value)}
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