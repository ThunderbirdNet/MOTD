import React from 'react';

import './theming.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Component-CSS/PageLayout.css';

import { Container, Row, Col, Badge, Image } from 'react-bootstrap';
import { Carousel, Card, Tab, ListGroup, Sonnet } from 'react-bootstrap'

class BlogCardShell extends React.Component {
    render() {
        return (
            <div class="blog-card-shell">
                <Card bg="dark" id={this.props.shellName} body>
                    <p>
                        <h4>{this.props.shellText}</h4>
                        {this.props.children}
                    </p>
                </Card>
            </div>
        );
    }
}

class BlogCard extends React.Component {
    render() {
        return (
            <div class="blog-card">
                <Card id={this.props.bodyName}>
                    <Card.Body>
                        {this.props.children}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

class BlogCards extends React.Component {
    render() {
        return (
            <div>
                <BlogCardShell shellName="intro-shell" shellText="Introduction" no-gutters>
                    <BlogCard className="gx-0" bodyName="intro-body">
                        <h3>Welcome to the Thunderbird Network!</h3>
                        <p>
                            We're a new group of individuals who strive to create unique experiences for our players to enjoy.
                            <br/><br/>
                            That means <b><u>YOU</u></b>!
                        </p>
                        <br/>
                        <h4>Thunderbird Network - Stormchasers</h4>
                        <p>
                            Our first unique experience is an adaptation of the once-popular stormchasers maps; but with a twist.
                            <br/><br/>
                            We plan to bring many new maps, and eventually new tornado variants; all while being compatible with a vanilla Garry's Mod installation.
                        </p>
                        <br/>
                        <h5>Workshops</h5>
                        <p>
                            Subscribe to our workshop collections help ensure you are getting the up-to-date addons that are needed to experience the server to it's maximum potential:
                            <br/><br/>
                            <a href="">Thunderbird Network Server Content</a>
                        </p>
                        <br/>
                        <h5>Additional Addons</h5>
                        <p>
                            A few additional addons may be necessary to enjoy the server to it's maximum potential, but these require manual installation:
                            <br/><br/>
                            <a href="">SProps</a>
                        </p>
                    </BlogCard>
                </BlogCardShell>

                <BlogCardShell shellName="experience-shell" shellText="Server Rules" no-gutters>
                    <BlogCard className="gx-0" bodyName="experience-body">
                        <h2>Stormchasers</h2>
                        <br/>
                        <h5>1. Common Sense</h5>
                        <p>While technically a guideline, please use common sense. If something MIGHT be against the rules; it's probably against the rules.</p>
                        
                        <h5>2. Offensive speech / Targeted harassment</h5>
                        <p>Do not use any form of racial or phobic slurs. It's fine to swear, but try to refrain from doing so.</p>
                        
                        <h5>3. Minge</h5>
                        <p>
                            Such an old, yet broad term. We've got protection addons in place to prevent minge activity,<br/>
                            but there's only so much they can do before someone has to step in to resolve issues.<br/>
                            Do not play the role of a minge, or you'll become one, and nobody will want you here.
                        </p>
                        
                    </BlogCard>
                </BlogCardShell>

                <BlogCardShell shellName="other-shell" shellText="Information" no-gutters>
                    <BlogCard className="gx-0" bodyName="skills-body">
                        <p>
                            <h3>gProtect</h3>
                            <br/>
                            We use gProtect to help prevent minge behavior and server crashers.<br/><br/>
                            You can configure gProtect settings by using the command: !gprotect
                        </p>
                    </BlogCard>
                </BlogCardShell>
            </div>
        );
    }
}


class PageLayout extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="header justify-content-md-center">
                    <Col><label id="pin-logo">RAUNCHY SANTA</label></Col> {/* <Image id="pin-logo" src="./res/Images/pin-logo.png" roundedCircle="true" /> */}
                    <Col />
                    <Col id="contact" xs={3}><Image id="phone-home" src="./res/Images/phonehome.png" roundedCircle="true" /><Badge id="phnumber" bg="creme"><b>REDACTED</b></Badge></Col>
                </Row>
                <Row className="rowbody justify-content-md-center" fluid>
                    <Col>
                        <Card id="navigation-card" xs={1} >
                            <Card.Header as="h6"><b>NAVIGATION</b></Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item id="navigation-item"><b>Home</b></ListGroup.Item>
                                <ListGroup.Item id="navigation-item"><b>Projects</b></ListGroup.Item>
                                <ListGroup.Item id="navigation-item"><b>Supported Charities</b></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col xs={8} className="no-gutters">
                        <BlogCards />
                    </Col>
                    <Col />
                </Row>
                <Row id="footer" className="rowbody justify-content-md-center" fluid>
                    <Col />
                    <Col xs={10}>
                        <h4 id="copyright">Copyright © 2022 by Raunchy Santa</h4>
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