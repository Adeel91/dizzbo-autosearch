import React from "react";
import { Navbar, Container, Image, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Header() {
    let history = useHistory();

    return (
        <Navbar className="layout-header" fixed="top">
            <Container>
                <Navbar.Brand>
                    <Col xs={6} md={6}>
                        <Image
                            onClick={() => history.push("/")}
                            className="logo"
                            src="https://www.dizzbo.com/hubfs/logo-rot-mit.svg"
                            fluid
                        />
                    </Col>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;
