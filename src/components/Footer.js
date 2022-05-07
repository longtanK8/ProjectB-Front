function Footer() {
    return (
        <footer>
            <div className="footer" id="contact-id">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="footer-item1">
                                <img src={require('../images/logo.png')} alt="logo" loading="lazy" />
                                <p>Paradise Hotel is a leading 5-star international standard hotel located right in the center of Binh Duong.</p>
                                <p className="footer-fontawesome">
                                    <a href><i className="fa fa-facebook" aria-hidden="true" /></a>
                                    <a href><i className="fa fa-instagram" aria-hidden="true" /></a>
                                    <a href><i className="fa fa-twitter" aria-hidden="true" /></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="footer-item2">
                                <h4>Contact</h4>
                                <p><i className="fa fa-map-marker" aria-hidden="true" /> 542 Chanh Phu Hoa, Ben Cat, Binh Duong</p>
                                <p><i className="fa fa-phone" aria-hidden="true" /> 08.38 409 092</p>
                                <p><i className="fa fa-envelope" aria-hidden="true" /> paradisehotel@gmail.com</p>
                                <p><i className="fa fa-credit-card-alt" aria-hidden="true" /> 2812 1124 7790</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="footer-item2">
                                <h4>Prizes</h4>
                                <p>Paradise hotel always brings great experience, satisfaction with the highest quality service in the country.</p>
                                <img src={require('../images/prize.png')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span className="crossline" />
                <p className="copyright"> © Copyright belongs to Paradise hotel.</p>
            </div>
        </footer>
    );
}

export default Footer;