import React from 'react';
import {Container, Row} from "react-bootstrap";

const Box = ({ children, title }) => {
    return (
        <Container>
            <br />
            <h1>{title}</h1>
            <Row>
                {children}
            </Row>
        </Container>
    );
};

export default Box;