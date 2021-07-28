import logo from '../../src/logo.svg'
import '../../src/App.css'
import Container from 'react-bootstrap/Container'
import Header from "../components/Header"

export default function Home() {
    return (
        <div>
            <Header />
            <Container fluid className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Create an irrigation schedule.
                </p>
            </Container>
        </div>

    );
}
