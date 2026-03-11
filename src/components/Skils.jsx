import "../assets/styles/skills.css";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub
} from "react-icons/fa";

import {
    SiMysql,
    SiTailwindcss,
    SiBootstrap,
    SiExpress,
    SiPostman
} from "react-icons/si";

const Skills = () => {
    return (
        <section id="skills" className="skills">

            <h3 className="skills-title">Crafting With These Technologies</h3>

            <div className="skills-container">

                {/* LEFT TEXT */}

                <div className="skills-text">

                    <p>
                        I build modern web applications using React and JavaScript.
                        My focus is creating fast, responsive and scalable
                        digital experiences.
                    </p>

                    <p>
                        I enjoy solving problems and building full stack solutions
                        using modern web technologies.
                    </p>

                </div>

                {/* ICON CLOUD */}

                <div className="skills-icons">

                    <FaHtml5 className="icon html" />
                    <FaCss3Alt className="icon css" />
                    <FaJs className="icon js" />
                    <FaReact className="icon react" />
                    <SiTailwindcss className="icon tailwind" /> 
                    <SiBootstrap className="icon bootstrap" />
                    <FaNodeJs className="icon node" />
                    {/* <SiExpress className="icon express" /> */}
                    <SiMysql className="icon mysql" />
                    <FaGitAlt className="icon git" />
                    <FaGithub className="icon github" />
                    <SiPostman className="icon postman" />

                </div>

                {/* RIGHT TEXT */}

                <div className="skills-text">

                    <p>
                        I write clean and maintainable code while collaborating
                        with teams to build reliable web products.
                    </p>

                    <p>
                        My strengths include responsive design, debugging,
                        and delivering quality solutions within deadlines.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default Skills;