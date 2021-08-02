import React from 'react';
import Topbar from "../../components/Topbar";
import {Container} from "reactstrap";

const Home = () => {
    return (
        <React.Fragment>
            <Container fluid className="vh-100">
                <Topbar/>
                <div className="text-center">
                    <p className="text-capitalize">Hey, I am</p>
                    <h1 className="text-capitalize">Muminur Rahman</h1>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Home;
