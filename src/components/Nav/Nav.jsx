import { Navbar, Container, Offcanvas, Button } from "react-bootstrap";
import hamburguer from "../../assets/cardapio.png";
import "./Nav.css";
import { useState } from "react";

export default function Nav() {

    const [show, setShow] = useState(false);

    const showSidebar = () => setShow(true);
    const hideSidebar = () => setShow(false);

    return (
        <>
            <Navbar expand="lg" className="navbar bar d-flex-sm" data-bs-theme="dark">
                <img src={hamburguer} className="hamb" onClick={showSidebar}></img>
                <Container className="d-flex justify-content-center">
                    <Navbar.Brand href="/" className="title">Receituário</Navbar.Brand>
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={hideSidebar} className="sidebar">
                <Offcanvas.Header closeButton/>
                <Offcanvas.Body>
                    <ul className="nav-list">
                        <li><a href="#">Introdução</a></li>
                        <li><a href="#">Receitas</a></li>
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#">Sobre</a></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}