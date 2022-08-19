import React from 'react';

import './theming.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Component-CSS/PageLayout.css';

import { Container, Row, Col, Badge, Image } from 'react-bootstrap';
import { Carousel, Card, Tab, ListGroup, Sonnet } from 'react-bootstrap'

class PageLayout extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="header justify-content-md-center">
                    <Col><Image id="pin-logo" src="/res/Images/pin-logo.png" roundedCircle="true" /></Col>
                    <Col />
                    <Col id="contact" xs={5}><Image id="phone-home" src="/res/Images/phonehome.png" roundedCircle="true" /><Badge bg="dark">(661) 378-0680</Badge> <Image id="location" src="/resources/images/location.png" roundedCircle="true" /><Badge bg="dark">4200 Glencannon st, Bakersfield, CA 93308</Badge></Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel variant="light">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/res/Images/SantaJonah.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h5>We all a little crazy for the holidays!</h5>
                                    <p>I wear my santa hat all-year around.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/res/Images/TN2.png"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h5>Amazonian Jonah</h5>
                                    <p>Wearing the neat gear I got at Amazon, santa hat sold separately.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/res/Images/jonahstow.jpg"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>Products need homes!</h5>
                                    <p>Every item counts, and every item eventually goes to someone who needs it.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row className="rowbody justify-content-md-center" fluid>
                    <Col>
                        <Card bg="dark" id="header-card">
                        <p></p>
                        </Card>
                    </Col>
                </Row>
                <Row className="rowbody justify-content-md-center" fluid>
                    <Col>
                        <Card id="navigation-card" xs={1} >
                            <Card.Header as="h6">NAVIGATION</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item id="navigation-item">Home</ListGroup.Item>
                                <ListGroup.Item id="navigation-item">Projects</ListGroup.Item>
                                <ListGroup.Item id="navigation-item">Supported Charities</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col xs={8}>
                        <Card bg="dark" id="intro-card" body>
                            <p>
                                <h4>Introduction</h4>
                                <Card id="introduction-card">
                                    <Card.Body>
                                        <h5>Email: jdl.personal@outlook.com</h5>
                                        <h5>LinkedIn: https://www.linkedin.com/in/career-seeker-jonah</h5>
                                    </Card.Body>
                                    <Card.Body id="intro-body">
                                    <p>
                                        Hello! My name is Jonah, and as you can see, I'm a nerd. I built this website using NodeJS, ReactJS, and Bootstrap. 
                                        <br/><br/>
                                        When I can, I like to improve my workflow by improvising, developing new strategies, and building formulated excel documents. I hope to be in a management position in the next 5 years, or at least training new co-workers.
                                        <br/><br/>
                                        On my own time, I enjoy a good video game or two, and visiting family.
                                        <br/><br/>
                                        I also enjoy Christmas, and love to wear a Santa hat every day of the year if I can, at work too!
                                    </p>
                                    </Card.Body>
                                </Card>
                            </p>
                        </Card>
                        <Card bg="dark" id="body-card" body>
                            <p>
                                <h4>Experience</h4>
                                <Card id="experience-card" body>
                                    <h5>
                                        <b>
                                            Fulfillment Center Associate
                                            <br />
                                            Amazon > Sep 2021 - Present (8 months +)
                                        </b>
                                    </h5>
                                    At Amazon, my primary path is known as Inbound Stow. I am trained in several positions at Amazon,
                                    including Inbound Dock - Decant, Inbound Stow, and Inbound Stow - Bootcamp.
                                    <br /><br />
                                    As an Inbound Stow associate, I am responsible for shelving Amazon merchandise on Amazon's
                                    automatic robotic pods.
                                    <br /><br />
                                    There are many things I must consider before shelving merchandise, such as orientation, size, weight,
                                    stability and security. Often, I must fill my station with palletized merchandise before stowing. In order to
                                    meet expected rate, I must organize my station and ensure that I have a variety of sized merchandise.
                                    <br /><br />
                                    As an Inbound Stow - Bootcamp associate, I must teach and advise other Inbound Stow associates
                                    to becoming faster, better and more productive stow associates. I often teach them techniques that I
                                    personally use to ensure I have rates greater than what is expected of me. Often I am required to teach
                                    and advise 12-24 associates per day. I am required to observe and identify issues and what can be
                                    improved on. I do not see my fellow associates as machines needing to be fixed. This job requires me
                                    to perform data entry on an excel worksheet daily, making optimizations and improvements to the sheet
                                    allows me to perform my job faster and better.
                                    <br /><br />
                                    As an Inbound Dock associate, I operate on the first floor of an Amazon fulfillment center. Amazon
                                    receives merchandise from semi-truck trailers, often from other facilities. This merchandise routes
                                    through conveyors to the primary Dock process, known as Decant. As a Decant associate, I am
                                    responsible for determining whether or not merchandise should be divided, sold separately. When items
                                    are sold separately, I am responsible for ensuring the products are in "totes" and register to those totes.
                                    Those totes are processed and then eventually make their way to Inbound Stow associates, and those
                                    items are shelved.
                                </Card>
                                <Card id="experience-card" body>
                                    <h5>
                                        <b>
                                            Parking Lot Cleaner
                                            <br />
                                            Super Sweep LLC > Mar 2021 - Jun 2021 (4 months)
                                        </b>
                                    </h5>
                                    Using industrial sweeper trucks, we clean parking lots for our customers. We also use leaf blowers
                                    to help get trash out from hard-to-reach areas. We also hand-pick using gloves and other safety
                                    equipment to help detail our workplaces.
                                </Card>
                                <Card id="experience-card" body>
                                    <h5>
                                        <b>
                                            Seasonal Driver Helper
                                            <br />
                                            UPS > Nov 2017 - Jan 2018 (3 months)
                                        </b>
                                    </h5>
                                    Drivers are overworked during the holidays and during summer. They're usually working on their own
                                    throughout the year. When driver helpers are hired, we do the heavy lifting, and assist the driver with
                                    other work. We respect the drivers, as they do what we do and more throughout the year.
                                    <br /><br />
                                    I'd like to thank UPS for giving me the opportunity to work this position. Their quick and easy hiring
                                    process, and their safety concerns are why I'd recommend this position to anyone who's has the
                                    dedication to get the job done, so our families can expect high quality service.
                                    <br /><br />
                                    I've also worked this job November 2019 to January 2020.
                                </Card>
                            </p>
                        </Card>
                        <Card bg="dark" id="body-card" body>
                            <p>
                                <h4>Skills</h4>
                                <h5>Driving   •   Software   •   Programming   •   Computer Science   •   Computer Literacy   •   Leaf Blowers</h5>
                            </p>
                        </Card>
                    </Col>
                    <Col />
                </Row>
                <Row id="footer" className="rowbody justify-content-md-center" fluid>
                    <Col />
                    <Col xs={10}>
                        <h4 id="copyright">Copyright © 2022 by Jonah David Long</h4>
                    </Col>
                    <Col />
                </Row>
            </Container>
        );
    }
}

export {
    PageLayout
}