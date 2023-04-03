import NavBarUser from "./component/template/navBarUser";
import Footer from "./component/template/footer";
import CardPerfil from "./component/cards/cardPerfil";
import CardPerfilAll from "./component/cards/card-perfilAll";


export default function Perfil(props: any) {

    return (
        <>
            <NavBarUser />
            <div className="marginTop">
                <div className="container">
                    <div className="row">
                        <CardPerfil/>
                        <CardPerfilAll/>
                        <CardPerfilAll/>
                        <CardPerfilAll/>
                        <CardPerfilAll/>
                        <CardPerfilAll/>
                        <CardPerfilAll/>
                        <CardPerfilAll/>
                        <CardPerfilAll/>
                        <CardPerfilAll/>
                        <CardPerfilAll/>
                        <CardPerfilAll/>
                        
                        <div className="spaceFooter"></div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}