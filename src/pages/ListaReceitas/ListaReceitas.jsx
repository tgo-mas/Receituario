import { Container } from "react-bootstrap";
import receitas from "../../data/receitas.json";
import htmlIcon from "../../assets/icon _Code_.svg"
import reactIcon from "../../assets/icon _react_.svg"
import nextIcon from "../../assets/icon _nextjs_.svg"
import "./ListaReceitas.css";
import { useNavigate } from "react-router-dom";

export default function ListaReceitas() {
    const navigate = useNavigate();

    return (
        <main className="main-container mt-4 pt-3">
            <Container className="ms-4 p-4">
                <div className="d-flex justify-content-between">
                    <h1>Receitas</h1>
                    {/* <span className="me-4 filtros">
                        <h5>Filtros</h5>
                        <div>
                            <img src={htmlIcon} alt="" className="active" />
                            <img src={reactIcon} alt="" />
                            <img src={nextIcon} alt="" />
                        </div>
                    </span> */}
                </div>
                <Container className="lista-container">
                    {receitas.map((receita) => <span className="receita-card" key={receita.id}>
                        <h4>{receita.titulo}</h4>
                        <span className="links-receita">
                            <a href={receita.links[0]} target="_blank"><i class="bi bi-journal-check"></i></a>
                            <a href={receita.links[1]} target="_blank"><i class="bi bi-journal-text"></i></a>
                            <a href={receita.links[2]} target="_blank"><i class="bi bi-journal-code"></i></a>
                        </span>
                    </span>)}
                </Container>
            </Container>
        </main>
    );
}