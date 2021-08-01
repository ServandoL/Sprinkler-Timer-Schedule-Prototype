import "../../src/App.css";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Home() {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col>
                        Calculations
                    </Col>
                </Row>
            </Container>
        </div>

    );
}
