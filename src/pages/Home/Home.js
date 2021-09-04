import React from 'react';
import Topbar from "../../components/Topbar";
import {Container} from "reactstrap";

const Home = () => {
    return (
        <React.Fragment>
        <Topbar/>
        <section>
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-6">
                        <h1 class="mt-5">Muminur Rahman</h1>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    );
};

export default Home;
