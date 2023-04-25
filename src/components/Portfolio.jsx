/* eslint-disable react/prop-types */
export const Portfolio = ({ esen, projects }) => {

    let projectos = (projects) ? projects : []

    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <p className="project-title title">{esen.projects}</p>
                <p className="project-resume">{esen.p_msg}</p>
                <div className="project">
                    {projectos != null ? projectos.map(project => {
                        let tags = (project.tags) ? project.tags : []
                        return (
                            <div className="asset" key={project.id}>
                                <div className="header">
                                    <div className="icon"><i className="bi bi-folder2"></i></div>
                                    <div className="repo">
                                        <a href={project.github} data-tooltip="Repositorio" data-tooltip-top target="_blanck"><i className="bi bi-github"></i></a>
                                        <a href={project.deploy} data-tooltip="Link" data-tooltip-top target="_blanck"><i className="bi bi-link"></i></a>
                                    </div>
                                </div>
                                <p className="repo-title">{project.name}</p>
                                <p className="repo-resume">{project.intro}</p>
                                <div className="tecnologies">
                                    {tags.map(tag=>{
                                        return <p key={tag}>{tag}</p>
                                    })}
                                </div>
                            </div>
                        )
                    }):<p>No hay projectos para mostrar</p>}                    
                </div>
            </div>
        </section>
    )
}
