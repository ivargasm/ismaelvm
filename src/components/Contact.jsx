/* eslint-disable react/prop-types */
export const Contact = ({esen}) => {
    return (
        <section className="contact-me" id="contact">
            <p className="contact-title title">{esen.contact}</p>
            <p className="contact-message">
                {esen.c_msg} <br /> <a href="mailto:contacto@ivargasm.com">{esen.c_mail}</a>
            </p>
        </section>
    )
}
