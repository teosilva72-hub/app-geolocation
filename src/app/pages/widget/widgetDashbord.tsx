import Card1 from "../component/cards/card-1";
import Footer from "../component/template/footer";
import '../../assets/css/global.css';
import img from '../../assets/img/01.jpg';
import img1 from '../../assets/img/02.jpg';
import img2 from '../../assets/img/03.webp';
import img3 from '../../assets/img/04.webp'

export default function WidgetInit(props: any) {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Card1 img={img3}/>
                    <Card1 img={img1}/>
                    <Card1 img={img2}/>
                    <Card1 img={img}/>
                    
                    
                    <div className="spaceFooter"></div>
                </div>
            </div>
        </>
    );
}