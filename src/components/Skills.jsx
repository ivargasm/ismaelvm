/* eslint-disable react/prop-types */
import html5 from '../assets/imgs/html5.svg'
import css from '../assets/imgs/css.svg'
import js from '../assets/imgs/js.svg'
import php from '../assets/imgs/php.svg'
import laravel from '../assets/imgs/laravel.svg'
import python from '../assets/imgs/python.svg'
import aws from '../assets/imgs/aws.svg'
import bd from '../assets/imgs/bd.svg'
import github from '../assets/imgs/github.svg'

export const Skills = ({esen}) => {
    return (
        <section className="about-me" id="skills">
            <div className="skills">
                <div className="skills-container">
                    <p className="skill-title title rellax" data-rellax-speed=".5">{esen.skills}</p>
                    <div className="skill">
                        <span className="tecnologi rellax" data-rellax-speed=".4"><img src={html5} alt=""/></span>
                        <span className="tecnologi rellax" data-rellax-speed=".2"><img src={css} alt=""/></span>
                        <span className="tecnologi rellax" data-rellax-speed=".3"><img src={js} alt=""/></span>
                        <span className="tecnologi rellax" data-rellax-speed=".2"><img src={php} alt=""/></span>
                        <span className="tecnologi rellax" data-rellax-speed=".4"><img src={laravel} alt=""/></span>
                        <span className="tecnologi rellax" data-rellax-speed=".5"><img src={python} alt=""/></span>
                        <span className="tecnologi rellax" data-rellax-speed=".3"><img src={aws} alt=""/></span>
                        <span className="tecnologi rellax" data-rellax-speed=".5"><img src={bd} alt=""/></span>
                        <span className="tecnologi rellax" data-rellax-speed=".2"><img src={github} alt=""/></span>
                    </div>
                </div>

            </div>
        </section>
    )
}
