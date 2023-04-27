/* eslint-disable react/prop-types */
import ismael_red from '../assets/imgs/ismael-bg-red.png'
import ismael_blue from '../assets/imgs/ismael-bg-color-blue.png'
import { useEffect, useState } from 'react'

export const Home = ({esen}) => { 

    let theme = localStorage.getItem("theme")

    const [img_bg, setImg_bg] = useState(theme)
    
    
    useEffect(()=>{
        if(theme === 'dark'){
            setImg_bg(ismael_red)
        }else{
            setImg_bg(ismael_blue)
        }
        console.log('cambie a: '+ theme)
    },[theme, setImg_bg, img_bg])

    return (
        // inicio
        <section className="begin-me" id="begin">
            <div className="begin-wrapper">
                <div className="img-container rellax" data-rellax-speed="3">
                    <div className="img">
                        <img src={img_bg} alt=""/>
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
