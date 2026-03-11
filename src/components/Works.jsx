import "../assets/styles/works.css";
import { projects } from "../data/Projects";

const Works = () => {
    return (
        <section id="works" className="works">

            <h2 className="works-title">My Projects</h2>

            <div className="stack-container">

                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="stack-card"
                        onClick={() => window.open(project.link, "_blank")}
                    >

                        <img src={project.image} alt={project.title} />

                        <div className="card-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default Works;