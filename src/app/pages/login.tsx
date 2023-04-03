import '../assets/css/login.css';
import AccountRecovery from './component/modal/accountRecovery';
import RegisterUser from './component/modal/registerUser';
import NavBar from './component/template/navBar';
import LoginComponent from './component/login';
export default function Login() {

    return (
        <>

            <NavBar
                titleHeader="Welcome"
                titleFooter="teste"
            />

            <main id='main'>
                <div className="container">
                    <div className='position'>
                        <div className='row'>
                            <div className='col-lg-3'></div>
                            <div className='col-lg-6 col-sm-12'>
                                <div className="card text-white card-shadow card-login">
                                    <div className="card-body bg-dark">
                                        <h1 className="card-title text-center">Login</h1><hr />
                                        <h6 className="card-subtitle mb-2 text-muted text-center">Title Project</h6>
                                        <LoginComponent />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'></div>
                        </div>
                    </div>
                </div>
            </main>

            <AccountRecovery />
            <RegisterUser />

        </>
    );
}