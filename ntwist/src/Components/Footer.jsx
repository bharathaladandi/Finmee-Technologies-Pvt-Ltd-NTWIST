import React from 'react'
import '../Styles/Footer.css'
export const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div>
                    <div className="footerlogo">
                        <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="NTWIST Logo" />
                    </div>
                    <div className="footerlinks">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                    <div className="footertext">
                        <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
                    </div>
                    <div className="footericons">
                        <a href="#" className="iconlink"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="iconlink"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="footerbottom">
                    <p>© 2022. Ntwist Inc.</p>
                </div>
            </footer>
            <div>
                <p>Could not connect to the reCAPTCHA service. Please check your internet connection and reload to get a reCAPTCHA challenge.</p>
            </div>
        </div>
    )
}
