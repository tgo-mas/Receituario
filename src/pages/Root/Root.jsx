import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Nav from "../../components/Nav/Nav.jsx";

export default function Root() {
    return (
        <>
            <Nav />
            <Container >
               <Outlet /> 
            </Container>
        </>
    );
}