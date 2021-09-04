import React, {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
                <div className="container px-4 px-lg-5">
                <NavbarBrand href="/">Home</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Blogs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    );
}

export default Example;
