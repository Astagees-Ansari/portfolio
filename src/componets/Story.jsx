import "../assets/styles/story.css";
import myimg from "../assets/images/me.jpg";

const Story = () => {
    return (
        <section id="story" className="story">

            <div className="story-wrapper">

                <h1 className="story-title">
                    Hello, It's Me <span>Astagees Ansari</span>
                </h1>

                <div className="story-container">

                    {/* LEFT TEXT */}
                    <div className="story-text">

                        <p>
                            Hey there! 👋 I'm <b>Astagees Ansari</b>, a Full Stack Web
                            Developer with around <b>1.5 years of experience</b>
                            building modern and scalable web applications.
                        </p>

                        <p>
                            I specialize in developing responsive user interfaces using
                            <b> React.js and JavaScript</b>, while also working with
                            backend technologies like <b>Node.js, Express, and MySQL</b>
                            to build complete end-to-end solutions.
                        </p>

                    </div>

                    {/* CENTER IMAGE */}
                    <div className="story-image">

                        <div className="image-frame">
                            <img src={myimg} alt="Astagees Ansari" />
                        </div>

                    </div>

                    {/* RIGHT TEXT */}
                    <div className="story-text">

                        <p>
                            I’ve worked in both independent and collaborative
                            environments, focusing on writing
                            <b> clean, efficient, and maintainable code</b>.
                        </p>

                        <p>
                            My goal is simple — create fast, reliable, and user-friendly
                            digital experiences while delivering high-quality solutions
                            within deadlines.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Story;