import { toast } from 'react-toastify';
import { useNavigate, useNavigation } from 'react-router-dom';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Auth from '../../../api/auth';


export default function Login(props: any) {

    const icone: any = "bi bi-people-fill bg-danger";
    let titleFooter = "Spring Boot";
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const requestLogin = async (e: any) => {
        e.preventDefault();
        const res = await Auth.login(email, password);  
        if(!res){
            toast.error("Usuário ou senha inválido!", {
                className: 'toast-danger',
                theme: 'colored',
                position: 'bottom-center',
                
            });
            return false;
        }else{
            localStorage.setItem('token', res.token);
            toast.success(res.message, {
                className: 'toast-success',
                theme: 'colored',
                position: 'bottom-center',
            });
            setTimeout(() => {
                //alert()
                navigate('/dashbord');
            }, 3000)
            return true;
        }
    }


    return (
        <>
            <div className="row">
                <form id='formLogin' onSubmit={requestLogin}>
                    <div className="col-md-12 col-sm-12">
                        <span className='h6'>E-mail:</span>
                        <input type="email" className="form-control col-12 mb-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <span className='h6'>Senha:</span>
                        <input type="password" className="form-control col-12 mb-3"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <button type='submit' className='btn btn-primary col-12'>Acessar</button><hr />
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <button className='btn btn-danger col-12 mb-3' type='button' data-bs-toggle="modal" data-bs-target="#registerUser">Cadastrar-se</button>
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <a className='col-12 mb-3 text-center' data-bs-toggle="modal" data-bs-target="#accountRecovery">Recuperar senha</a>
                    </div>
                </form>
            </div>
        </>
    );

}