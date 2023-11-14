import { Container } from "react-bootstrap";
import receitas from "../../data/receitas.json";
import "./ListaReceitas.css";

export default function ListaReceitas(){
    return(
        <main className="main-container mt-4 pt-3">
            <Container className="ms-4 p-4">
                <div>
                    <h1>Receitas</h1>
                        
                </div>
            </Container>
        </main>
    );
}