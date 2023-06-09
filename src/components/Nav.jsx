/* eslint-disable react/prop-types */
import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const Nav = ({languagels, setSelectLanguage, esen}) => {

    const [idioma, setIdioma] = useState(languagels)

    //identify the toggle switch HTML element
    let theme = localStorage.getItem("theme")

    document.documentElement.setAttribute('data-theme', theme)

    const colorMode = () =>{
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
    
    const setLanguage = () => {
        if(idioma === 'es'){
            localStorage.setItem('language','en')
        }else{
            localStorage.setItem('language','es')
        }
        setIdioma(localStorage.getItem('language'))
        setSelectLanguage(localStorage.getItem('language'))
    }

    return (
        <nav className="navbar">
            <div className="max-width">
                <ul className="menu">
                    <li><a href="#begin" className="menu-btn">{esen.start}</a></li>
                    <li><a href="#skills" className="menu-btn">{esen.skills}</a></li>
                    <li><a href="#projects" className="menu-btn">{esen.projects}</a></li>
                    <li><a href="#contact" className="menu-btn">{esen.contact}</a></li>
                </ul>
                <div className="logo">
                    <button id="color-mode" onClick={colorMode}>
                        <i className="bi bi-circle-half"></i>
                    </button>
                    <button data-tooltip="Switch to English" data-tooltip-bottom onClick={setLanguage}>
                        <i className="bi bi-translate"></i>
                    </button>
                </div>
                <div className="menu-btn">
                    <i className="fas fa-bars" id="navbtn"></i>
                </div>
            </div>
        </nav>
    )
}
