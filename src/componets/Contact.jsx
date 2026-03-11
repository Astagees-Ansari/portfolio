import "../assets/styles/contact.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="contact">

            <div className="contact-card">

                <h2>Let's Connect</h2>

                <p className="contact-name">Astagees Ansari</p>

                <div className="contact-info">

                    <div className="contact-item email">
                        <FaEnvelope />
                        <span>astageesansri92@gmail.com</span>
                    </div>

                    <div className="contact-item phone">
                        <FaPhoneAlt />
                        <span>+91 9067864617</span>
                    </div>

                </div>

                <p className="contact-quote">
                    "Building meaningful digital experiences through
                    creativity, collaboration, and clean code."
                </p>

            </div>

        </section>
    );
};

export default Contact;