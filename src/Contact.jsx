export default function Contact() {
    return (
        <>
            <section className="contact-information-section">
                <div className="personal-information">
                    <h2>LOREM IPUSUM DOLOR</h2>
                    <p>Donec sed ultrices eros. Nulla facilisi. Aliquam purus urna, porta <br />non faucibus nec,lucutus vitae antae. Suspendisse potenti. Morbi <br />sollicitudin viverra urna, vel auctor purus volutpat vel.</p>
                    <p>&#128204; Street Name & Number, Town, Postcode/Zip</p>
                    <p>&#9742; +00 (123) 456 7890</p>
                    <p>&#9993; info@domain.com</p>
                </div>

                <div className="quick-links">
                    <h2>QUICK LINKS</h2>
                    <ul>
                        <li>Home Page</li>
                        <li>Blog</li>
                        <li>Gallery</li>
                        <li>Portfolio</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="keep-in-touch">
                    <h2>KEEP IN TOUCH</h2>
                    <input type="text" placeholder='Email' />
                    <button>SUBMIT</button>
                    <div className="keep-in-touch-icons">

                    </div>
                </div>



            </section>
        </>

    );
}