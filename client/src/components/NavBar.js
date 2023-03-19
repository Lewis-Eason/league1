import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";

export default function NavBar() {

    const username = localStorage.getItem("user");

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">Welcome, {username}</Navbar.Brand>
                <Nav className="me-auto">
                    <CustomLink to="/home">Home</CustomLink>
                    <CustomLink to="/predictions">Predictions</CustomLink>
                    <CustomLink to="/settings">Settings</CustomLink>
                    <CustomLink to="/login">Log Out</CustomLink>
                </Nav>
            </Container>
        </Navbar>
    );

    function CustomLink({to, children, ...props}) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({path: resolvedPath.pathname, end: true})

        return (
            <li className={isActive ? "active" : ""}>
                <Nav.Link as={Link} to={to} {...props}>
                    {children}
                </Nav.Link>
            </li>
        )
    }
}
