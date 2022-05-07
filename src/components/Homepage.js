import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap'
import Header from './Header';
import Footer from './Footer';

function Homepage() {
    return (
        <main>
            <div className="slider">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../images/double-bed-3.jpg')}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>Welcome to Paradise Hotel</h1>
                            <p>Paradise Hotel is a leading 5-star international standard hotel located right in the busy business, shopping, commercial and entertainment center of Binh Duong, about 5 km by road from the center. The place attracts many domestic and international tourists to visit every year.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../images/single-bed-2.jpg')}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1>Welcome to Paradise Hotel</h1>
                            <p>Paradise Hotel is a leading 5-star international standard hotel located right in the busy business, shopping, commercial and entertainment center of Binh Duong, about 5 km by road from the center. The place attracts many domestic and international tourists to visit every year.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../images/queen-room-2.jpg')}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>Welcome to Paradise Hotel</h1>
                            <p>Paradise Hotel is a leading 5-star international standard hotel located right in the busy business, shopping, commercial and entertainment center of Binh Duong, about 5 km by road from the center. The place attracts many domestic and international tourists to visit every year.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../images/double-bed.jpg')}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>Welcome to Paradise Hotel</h1>
                            <p>Paradise Hotel is a leading 5-star international standard hotel located right in the busy business, shopping, commercial and entertainment center of Binh Duong, about 5 km by road from the center. The place attracts many domestic and international tourists to visit every year.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="service-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="service-2-item">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <p className="service-2-fontawesome"><i className="fa fa-calendar" aria-hidden="true" /></p>
                                    </div>
                                    <div className="flex-grow-1 md-3">
                                        <div className="service-2-item-content">
                                            <h3>Simple booking</h3>
                                            <p>The procedure is quick, convenient, easy and fast</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-2-item">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <p className="service-2-fontawesome"><i className="fa fa-cutlery" aria-hidden="true" /></p>
                                    </div>
                                    <div className="flex-grow-1 md-3">
                                        <div className="service-2-item-content">
                                            <h3>Diverse cuisine</h3>
                                            <p>Serving delicacies from all over the country</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="service-2-item">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <p className="service-2-fontawesome"><i className="fa fa-key" aria-hidden="true" /></p>
                                    </div>
                                    <div className="flex-grow-1 md-3">
                                        <div className="service-2-item-content">
                                            <h3>Quiet space</h3>
                                            <p>Light, quiet and romantic space</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-2-item">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <p className="service-2-fontawesome"><i className="fa fa-bell" aria-hidden="true" /></p>
                                    </div>
                                    <div className="flex-grow-1 md-3">
                                        <div className="service-2-item-content">
                                            <h3>Service 24/7</h3>
                                            <p>Dedicated to serving you all hours of the day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="service-2-item">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <p className="service-2-fontawesome"><i className="fa fa-plane" aria-hidden="true" /></p>
                                    </div>
                                    <div className="flex-grow-1 md-3">
                                        <div className="service-2-item-content">
                                            <h3>Pick up at the airport</h3>
                                            <p>Enthusiastic and attentive staff to pick you up at the airport</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-2-item">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <p className="service-2-fontawesome"><i className="fa fa-bed" aria-hidden="true" /></p>
                                    </div>
                                    <div className="flex-grow-1 md-3">
                                        <div className="service-2-item-content">
                                            <h3>Modern rooms</h3>
                                            <p>Modern facilities according to European standards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="go-top"><i className="fa fa-angle-up" aria-hidden="true" /></span>
            <Footer />
        </main>
    );
}

export default Homepage;