import "../assets/styles/home.css";
import dev from "../assets/images/dev.png";

const Home = () => {
    return (
        <section id="home" className="home">

            <div className="hero-box">

                <div className="hero-left">

                    <p className="hero-intro">
                        Hello, I'm <span>Astagees Ansari</span> —
                        a passionate Full Stack Developer.
                    </p>

                    <h1>
                        Building thoughtful,
                        <br />
                        high-quality
                        <br />
                        web experiences.
                    </h1>

                    <p className="hero-desc">
                        Driven by curiosity and creativity, I design and build
                        modern digital products that are fast, intuitive,
                        and meaningful.
                    </p>

                </div>

                <div className="hero-right">
                    <img src={dev} alt="profile" />
                </div>

            </div>

        </section>
    );
};

export default Home;