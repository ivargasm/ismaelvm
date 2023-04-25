/* eslint-disable react/prop-types */
import ismael from '../assets/imgs/ismael-bg.png'

export const Home = ({esen}) => {   

    return (
        // inicio
        <section className="begin-me" id="begin">
            <div className="begin-wrapper">
                <div className="img-container rellax" data-rellax-speed="3">
                    <div className="frame"></div>
                    <div className="img">
                        <img src={ismael} alt=""/>
                    </div>
                </div>
                <div className="begin-content">
                    <h1 className="name rellax" data-rellax-speed="1">{esen.name} <span className="wave">👋</span></h1>
                    <p className="i-am title">{esen.job}</p>
                    <p className="begin">
                        {esen.msg}
                    </p>
                </div>
            </div>
        </section>
    )
}
