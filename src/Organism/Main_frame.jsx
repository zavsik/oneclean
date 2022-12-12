import Image_intro from '../assets/Image_intro_2.png';
import H_Tag from '../Atoms/H_tag/H_tag';
import "./Main_frame.css"
{/* <img src={Logo} alt="Company Logo" className="logo"/> */}
import Button from "../Atoms/Button/Button"

export default function Main_frame(props) {
    return (
        <div className="container_frame">
            <div className="text_part">
                <div className="text_part_styled">
                    <div className="text_intro">
                        <h1>ПЕРВАЯ <br />ТЕХНОЛОГИЧЕСКАЯ <br /><p>ХИМЧИСТКА</p></h1>
                    </div>
                    <div className="button_intro">
                        <Button num="2" text="ЗАКАЗАТЬ"/>
                    </div>
                    <div className="text_additionally">
                        <div className="text_add">
                            <H_Tag num="3" text="КАЧЕСТВО"/>
                            <H_Tag num="4" text="Лучшая химчистка в Москве."/>
                            <H_Tag num="4" text="Корпоративный и частный сектор."/>  
                        </div>
                        <div className="text_add">
                            <H_Tag num="3" text="ВРЕМЯ"/>
                            <H_Tag num="4" text="Выполняем любой сложности заказ в точное время"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="picture_part">
                <div className="decore_image"></div>
                <img src={Image_intro} alt="Company Logo" className="intro_image"/>
            </div>
        </div>
    )
}