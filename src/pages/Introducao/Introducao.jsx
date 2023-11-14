import { Container } from "react-bootstrap";
import Nav from "../../components/Nav/Nav";
import htmlIcon from "../../assets/icon _Code_.svg"
import reactIcon from "../../assets/icon _react_.svg"
import nextIcon from "../../assets/icon _nextjs_.svg"
import "./Introducao.css";
import { Link } from "react-router-dom";

export default function Introducao() {
    return (
        <>
            <Nav />
            <Container >
                <main className="intro m-3 p-4">
                    <Container className="m-3 d-flex align-items-center">
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

                    <Container className="text-center mt-4 pt-4">
                        <h1>Receitas</h1>
                        <div className="mt-4 d-flex justify-content-evenly">
                            <span>
                                <h5>HTML, CSS, JS</h5>
                                <img src={htmlIcon} alt="" />
                            </span>
                            <span>
                                <h5>React</h5>
                                <img src={reactIcon} alt="" />
                            </span>
                            <span>
                                <h5>React & NextJS</h5>
                                <img src={nextIcon} alt="" />
                            </span>
                        </div>
                    </Container>
                </main>
            </Container>
        </>
    );
}