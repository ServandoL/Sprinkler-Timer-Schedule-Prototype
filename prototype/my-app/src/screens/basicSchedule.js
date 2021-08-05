import "../../src/App.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import LandscapeData from "../api/landscapeData.json";
import ETData from "../api/texasETData.json";
import SoilData from "../api/soilData.json";
import RuntimeModal from "../components/RuntimeModal";

export default function Home() {

    const [show, setShow] = useState(false);
    const [zoneName, setZoneName] = useState("");
    const [zoneType, setZoneType] = useState({name: "", cropCoefficient: 0, rootDepth: 0});
    const [sprayHead, setSprayHead] = useState("");
    const [soilType, setSoilType] = useState({type: "", AWHC: 0, availableWater: 0});
    const [exposureType, setExposureType] = useState("");
    const [daysPerWeek, setDaysPerWeek] = useState("");
    const [slope, setSlope] = useState("");
    const [area, setArea] = useState("");
    const [AWHC, setAWHC] = useState("");
    const [rootDepth, setRootDepth] = useState("");
    const [allowableDepletion, setAllowableDepletion] = useState("");
    const [efficiency, setEfficiency] = useState("");
    const [cropCoefficient, setCropCoefficient] = useState("");
    const [precRate, setPrecRate] = useState("");
    const [gpm, setGpm] = useState("");
    const [city, setCity] = useState({})

    const closeModal = () => setShow(false);
    const changeGpm = (event) => setGpm(event.target.value);
    const showModal = () => setShow(true);
    const changeZoneName = (event) => setZoneName(event.target.value);
    const selectDays = (event) => setDaysPerWeek(event.target.value)
    const selectCity = (event) => {
        let values = event.target.value.split(',');
        setCity({
            city: values[0],
            jan: parseFloat(values[1]),
            feb: parseFloat(values[2]),
            mar: parseFloat(values[3]),
            apr: parseFloat(values[4]),
            may: parseFloat(values[5]),
            jun: parseFloat(values[6]),
            jul: parseFloat(values[7]),
            aug: parseFloat(values[8]),
            sep: parseFloat(values[9]),
            oct: parseFloat(values[10]),
            nov: parseFloat(values[11]),
            dec: parseFloat(values[12])
        });
    }
    const selectZoneType = (event) => {
       let values = event.target.value.split(',');
       setZoneType({
           name: values[0],
           cropCoefficient: parseFloat(values[1]),
           rootDepth: parseFloat(values[2])
       });
    }
    const selectSprayHead = (event) => setSprayHead(event.target.value);
    const selectSoilType = (event) => {
        let values = event.target.value.split(',');
        setSoilType({
            type: values[0],
            AWHC: parseFloat(values[1]),
            availableWater: parseFloat(values[2])
        });
    }
    const selectExposureType = (event) => setExposureType(event.target.value);
    const selectSlope = (event) => setSlope(event.target.value);
    const changeArea = (event) => setArea(event.target.value);
    const changeAWHC = (event) => setAWHC(event.target.value);
    const changeRootDepth = (event) => setRootDepth(event.target.value);
    const changeAllowableDepletion = (event) => setAllowableDepletion(event.target.value);
    const changeEfficiency = (event) => setEfficiency(event.target.value);
    const changeCropCoefficient = (event) => setCropCoefficient(event.target.value);
    const changePrecRate = (event) => setPrecRate(event.target.value);

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
                                    <Form.Control type="text" placeholder="Enter new zone name" value={zoneName} onChange={changeZoneName} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="zoneType">
                                    <Form.Label>Zone Type *</Form.Label>
                                    <Form.Select aria-label="typeSelector" onChange={selectZoneType}>
                                        <option defaultValue>Choose one...</option>
                                        {
                                            LandscapeData.map(type => (
                                                <option key={type.id} value={[type.name, type.CropCoefficient, type.MaximumRootDepth]}
                                                >{type.name}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="sprayHead">
                                    <Form.Label>Spray Head *</Form.Label>
                                    <Form.Select value={sprayHead} onChange={selectSprayHead} aria-label="spraySelector">
                                        <option defaultValue>Choose one...</option>
                                        <option key="rotor" value="Rotor">Rotor Head</option>
                                        <option key="fixed spray head" value="Fixed Spray Head">Fixed Spray Head</option>
                                        <option key="rotary nozzle" value="Rotary Nozzle">Rotary Nozzle</option>
                                        <option key="drip line" value="Drip Line">Drip Line</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="soilType">
                                    <Form.Label>Soil Type *</Form.Label>
                                    <Form.Select onChange={selectSoilType} aria-label="soilSelector">
                                        <option defaultValue>Choose one...</option>
                                        {
                                            SoilData.map(type => (
                                                <option key={type.id} value={[type.Type, type.SoilWaterHoldingCapacity, type.PlantAvailableWater]}>{type.Type}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                                {/* <Form.Group className="mb-3" controlId="selectDays">
                                    <Form.Label>Desired watering days per week *</Form.Label>
                                    <Form.Select onChange={selectDays} aria-label="daysSelector">
                                        <option defaultValue>Choose one...</option>
                                        <option key="1" value="1">Every day</option>
                                        <option key="2" value="2">Every two days</option>
                                        <option key="3" value="3">Every three days</option>
                                        <option key="4" value="4">Every four days</option>
                                        <option key="5" value="5">Every five days</option>
                                        <option key="6" value="6">Every six days</option>
                                        <option key="7" value="7">Every seven days</option>
                                    </Form.Select>
                                </Form.Group> */}
                                <Form.Group className="mb-3" controlId="exposureType">
                                    <Form.Label>Exposure *</Form.Label>
                                    <Form.Select value={exposureType} onChange={selectExposureType} aria-label="exposureSelector">
                                        <option defaultValue>Choose one...</option>
                                        <option key="lots of sun" value="Lots of sun">Lots of sun (6-8 hours of sun)</option>
                                        <option key="some shade" value="Some shade">Some Shade (4-6 hours of sun)</option>
                                        <option key="lots of shade" value="Lots of shade">Lots of shade (2-4 hours of shade)</option>
                                        <option key="mostly shade" value="Mostly shade">Mostly shade (2 or less hours of sun)</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="slope">
                                    <Form.Label>Slope *</Form.Label>
                                    <Form.Select value={slope} onChange={selectSlope} aria-label="slopeSelector">
                                        <option defaultValue>Choose one...</option>
                                        <option key="flat" value="Flat">Flat</option>
                                        <option key="slight" value="Slight">Slight</option>
                                        <option key="moderate" value="Moderate">Moderate</option>
                                        <option key="steep" value="Steep">Steep</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="city">
                                    <Form.Label>City ET *</Form.Label>
                                    <Form.Select aria-label="citySelector" onChange={selectCity}>
                                        <option defaultValue>Choose nearest city...</option>
                                        {
                                            ETData.map(city => (
                                                <option key={city.id} value={[city.City, city.Jan, city.Feb, city.Mar, city.Apr, city.May, city.Jun, city.Jul, city.Aug, city.Sep, city.Oct, city.Nov, city.Dec]}>{city.City}</option> 
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                                <Button variant="primary" onClick={showModal}>Submit</Button>
                            </Form>

                        </fieldset>
                    </Col>
                    <Col md="6">
                        <fieldset>
                            <legend>Advanced Settings</legend>
                            <Form>
                                <Form.Group className="mb-3" controlId="area">
                                    <Form.Label>Area (sq/ft)</Form.Label>
                                    <Form.Control type="text" placeholder="area in square footage" value={area} onChange={changeArea} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="availableWater">
                                    <Form.Label>Available Water Holding Capacity (in/in)</Form.Label>
                                    <Form.Control type="text" placeholder="decimal form greater than 0 and less than 1" value={AWHC} onChange={changeAWHC}></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="rootDepth">
                                    <Form.Label>Root Depth (inches)</Form.Label>
                                    <Form.Control type="text" placeholder="root depth in inches" value={rootDepth} onChange={changeRootDepth}></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="allowableDepletion">
                                    <Form.Label>Allowable Depletion (decimal percent)</Form.Label>
                                    <Form.Control type="text" placeholder="ex: 0.50" value={allowableDepletion} onChange={changeAllowableDepletion}></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="efficiency">
                                    <Form.Label>Efficiency (decimal percent)</Form.Label>
                                    <Form.Control type="text" placeholder="ex: 0.80" value={efficiency} onChange={changeEfficiency}></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="cropCoefficient">
                                    <Form.Label>Crop Coefficient (decimal)</Form.Label>
                                    <Form.Control type="text" placeholder="decimal form greater than 0 and up to 1" value={cropCoefficient} onChange={changeCropCoefficient}></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="precipitationRate">
                                    <Form.Label>Precipitation Rate (in/hr)</Form.Label>
                                    <Form.Control type="text" placeholder="ex: 0.83" value={precRate} onChange={changePrecRate}></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="gpm">
                                    <Form.Label>Gallons per minute (GPM)</Form.Label>
                                    <Form.Control type="text" placeholder="ex: 1.8" value={gpm} onChange={changeGpm}/>
                                </Form.Group>

                            </Form>
                        </fieldset>
                    </Col>
                </Row>
                {
                    show &&
                    <RuntimeModal
                        show={show}
                        onHide={closeModal}
                        zonename={zoneName}
                        zonetype={zoneType}
                        sprayhead={sprayHead}
                        soiltype={soilType}
                        exposuretype={exposureType}
                        slope={slope}
                        area={area}
                        awhc={AWHC}
                        rootdepth={rootDepth}
                        allowabledepletion={allowableDepletion}
                        efficiency={efficiency}
                        cropcoefficient={cropCoefficient}
                        precrate={precRate}
                        city={city}
                        wateringdays={daysPerWeek}
                        gpm={gpm}

                    />
                }
            </Container>
        </div>

    );
}
