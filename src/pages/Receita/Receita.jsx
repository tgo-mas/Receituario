import { useParams } from "react-router-dom";
import receitas from "../../data/receitas.json";
import { Container } from "react-bootstrap";

export default function Receita() {
    const { id } = useParams();
    const receita = receitas.find(receita => receita.id == id);

    return (
        <main className="text-center mt-4">
            <h2>{receita.titulo}</h2>
            <Container className="receita-container">

            </Container>
        </main>
    );
}