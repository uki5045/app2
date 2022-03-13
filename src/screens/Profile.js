import React from 'react';
import { Button, Container} from 'react-bootstrap'
import {Link} from "react-router-dom";

const Profile = () => {
    return (
        <Container>
            <h1>profile</h1>
            <Link to={'/'}>
                <Button variant="secondary">홈으로 이동</Button>
            </Link>

        </Container>
    );
};

export default Profile;