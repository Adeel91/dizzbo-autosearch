import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Footer() {
    return (
        <Navbar className="layout-footer" fixed="bottom">
            <Container>
                <Navbar.Text>
                    Dizzbo GmbH © 2019
                </Navbar.Text>
            </Container>
        </Navbar>
    );
}

export default Footer;
