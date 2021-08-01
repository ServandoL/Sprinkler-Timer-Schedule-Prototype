import "../../src/App.css";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import LandscapeInfo from "../api/landscapeInformation.json"

export default function Home() {



    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col md="6">
                        <fieldset>
                            <legend>Basic Irrigation Settings</legend>
                            <Form>
                                <Form.Group className="mb-3" controlId="zoneName">
                                    <Form.Label>Zone Name *</Form.Label>
                                    <Form.Control type="text" placeholder="Enter new zone name" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="zoneType">
                                    <Form.Label>Zone Type *</Form.Label>
                                    <Form.Select aria-label="typeSelector">
                                        <option id="cool season grass">Cool Season Grass</option>
                                        <option id="warm season grass">Warm Season Grass</option>
                                        <option id="shrubs">Shrubs</option>
                                        <option id="trees">Trees</option>
                                        <option id="flower bed">Flower bed</option>
                                    </Form.Select> 
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="sprayHead">
                                    <Form.Label>Spray Head *</Form.Label>
                                    <Form.Select aria-label="spraySelector">
                                        <option id="rotor">Rotor Head</option>
                                        <option id="fixed spray head">Fixed Spray Head</option>
                                        <option id="rotary nozzle">Rotary Nozzle</option>
                                        <option id="drip line">Drip Line</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="soilType">
                                    <Form.Label>Soil Type *</Form.Label>
                                    <Form.Select aria-label="soilSelector">
                                        <option id="sand">Sand</option>
                                        <option id="loamy sand">Loamy Sand</option>
                                        <option id="sandy loam">Sandy Loam</option>
                                        <option id="Loam">Loam</option>
                                        <option id="clay loam">Clay Loam</option>
                                        <option id="silty clay">Silty Clay</option>
                                        <option id="clay">Clay</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exposureType">
                                    <Form.Label>Exposure *</Form.Label>
                                    <Form.Select aria-label="exposureSelector">
                                    <option id="lots of sun">Lots of sun (6-8 hours of sun)</option>
                                    <option id="some shade">Some Shade (4-6 hours of sun)</option>
                                    <option id="lots of shade">Lots of shade (2-4 hours of shade)</option>
                                    <option id="mostly shade">Mostly shade (2 or less hours of sun)</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="slope">
                                    <Form.Label>Slope *</Form.Label>
                                    <Form.Select aria-label="slopeSelector">
                                    <option id="flat">Flat</option>
                                    <option id="slight">Slight</option>
                                    <option id="moderate">Moderate</option>
                                    <option id="steep">Steep</option>
                                    </Form.Select>
                                </Form.Group>
                            </Form>

                        </fieldset>
                    </Col>
                    <Col md="6">
                        <fieldset>
                            <legend>Advanced Settings</legend>
                            <Form>
                                <Form.Group className="mb-3" controlId="area">
                                    <Form.Label>Area (sq/ft)</Form.Label>
                                    <Form.Control type="number" placeholder="area in square footage" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="availableWater">
                                    <Form.Label>Available Water Holding Capacity (in/ft)</Form.Label>
                                    <Form.Control type="text" placeholder="decimal form greater than 0 and less than 1"></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="rootDepth">
                                    <Form.Label>Root Depth (inches)</Form.Label>
                                    <Form.Control type="text" placeholder="root depth in inches"></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="allowableDepletion">
                                    <Form.Label>Allowable Depletion (percent)</Form.Label>
                                    <Form.Control type="number" placeholder="ex: 50"></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="efficiency">
                                    <Form.Label>Efficiency (percent)</Form.Label>
                                    <Form.Control type="number" placeholder="ex: 80"></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="cropCoefficient">
                                    <Form.Label>Crop Coefficient (decimal)</Form.Label>
                                    <Form.Control type="text" placeholder="decimal from greater than 0 and up to 1"></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="precipitationRate">
                                    <Form.Label>Precipitation Rate (in/hr)</Form.Label>
                                    <Form.Control type="text" placeholder="enter precipitation rate"></Form.Control>
                                </Form.Group>

                            </Form>
                        </fieldset>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}
