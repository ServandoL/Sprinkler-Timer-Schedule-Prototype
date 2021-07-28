import '../../src/App.css'
import Container from 'react-bootstrap/Container'
import Header from "../components/Header"

export default function Home() {
    return (
        <div>
            <Header />
            <Container fluid className="App-header">
                <p>Basic Irrigation Scheduler</p>
            </Container>
        </div>

    );
}
