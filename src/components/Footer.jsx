export const Footer = () => {
    return (
        <footer>
            <div className="copyright">
                <span>Created by <a href="mailto:contacto@ivargasm.com">Ismael Vargas</a> | <span className="far fa-copyright"></span> 2023 All rights reserved.</span>
            </div>
            <div className="rsociales">
                <ul>
                    <a href="https://t.me/ivargasm" target="_blank" rel='noreferrer'>
                        <div className="social telegram">
                            <li><i className="fab fa-telegram-plane"></i></li>
                        </div>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=524421816860&text=Como+puedo+ayudarte&app_absent=0&lang=es" target="_blank" rel='noreferrer'>
                        <div className="social wp">
                            <li><i className="fab fa-whatsapp"></i></li>
                        </div>
                    </a>
                    <a href="https://join.skype.com/invite/GRs4gM92kIPi" target="_blank" rel='noreferrer'>
                        <div className="social skype">
                            <li><i className="fab fa-skype"></i></li>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/ismael-vargas-martinez-47a618195/" target="_blank" rel='noreferrer'>
                        <div className="social link">
                            <li><i className="fab fa-linkedin-in"></i></li>
                        </div>
                    </a>
                </ul>
            </div>
        </footer>
    )
}
