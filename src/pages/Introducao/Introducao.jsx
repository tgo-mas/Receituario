import { Container } from "react-bootstrap";
import Nav from "../../components/Nav/Nav";
import htmlIcon from "../../assets/icon _Code_.svg"
import reactIcon from "../../assets/icon _react_.svg"
import nextIcon from "../../assets/icon _nextjs_.svg"
import "./Introducao.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Introducao() {
    const navigate = useNavigate();

    return (
        <main className="intro mt-3 p-4">
            <Container className="m-3 d-flex align-items-center intro-header">
                <h3>Olá, eu sou Thomas e este é meu Receituário.</h3>
                <table className="ms-auto me-3 table-receitas">
                    <tbody>
                        <tr>
                            <th>Receitas concluídas</th>
                            <td>x</td>
                        </tr>
                        <tr>
                            <th>Projetos em exibição</th>
                            <td>y</td>
                        </tr>
                    </tbody>
                </table>
            </Container>

            <Container className="card-section text-center mt-4 pt-4">
                <h1><Link to="/receitas" style={{textDecoration: "none", color: "#333"}}>Receitas</Link></h1>
                <div className="mt-4 d-flex justify-content-evenly cards">
                    <span onClick={() => navigate("/receitas")}>
                        <h5>HTML, CSS, JS</h5>
                        <img src={htmlIcon} alt="HTML, CSS e JS" />
                    </span>
                    <span>
                        <h5>React</h5>
                        <img src={reactIcon} alt="ReactJS" />
                    </span>
                    <span>
                        <h5>React & NextJS</h5>
                        <img src={nextIcon} alt="React e NextJS" />
                    </span>
                </div>
                <Container className="outros"><h3>Outros projetos</h3></Container>
            </Container>

            <Container className=" text-center mt-4">
                <h1>Sobre</h1>
                <article className="text-start mt-4 p-4">
                    <p>Este projeto se trata de um portfólio utilizado para avaliação da disciplina de Programação Web, bem como portfólio pessoal para outros projetos.
                        Ele foi construído em JavaScript utilizando React e React-Bootstrap.</p>
                    <p>Olá, me chamo Thomas e sou estudante do curso de Bacharelado em Sistemas de Informação, pela UFRN, campus Caicó.
                    </p>
                    <img src="" alt="" />
                </article>
            </Container>
        </main>
    );
}