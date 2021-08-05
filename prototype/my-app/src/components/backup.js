import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { calculatePrecipitationRate, calculateIrrigationFrequency, calculateSprinklerRunTime } from "../utility/formulas";
import Table from "react-bootstrap/Table";
import soilData from "../api/soilData.json";

// props:

// show={show}
// onHide={closeModal}
// zoneName={zoneName}
// zoneType={zoneType}
// sprayHead={sprayHead}
// soilType={soilType}
// exposureType={exposureType}
// slope={slope}

// area={area}
// AWHC={AWHC}
// rootDepth={rootDepth}
// allowableDepletion={allowableDepletion}
// efficiency={efficiency}
// cropCoefficient={cropCoefficient}
// precRate={precRate}

// To calculate zone run time:
// 1) Calculate the plant water requirement
// 2) Calculate the irrigaiton frequency by calculating the plant available water
// 3) Calculate the precipitation rate
// 4) Calculate the zone run time

export default function RuntimeModal(props) {

    // Calculates soil infiltration rate based on soil type and slope in inches/hour
    var infiltrationRate = 0;
    let slope = props.slope;
    let soil = props.soiltype.type;
    if (slope === "Flat") {
        switch (soil) {
            case "Clay":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.flat_slope
                    }
                });
                break;
            case "Clay Loam":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.flat_slope
                    }
                });
                break;
            case "Silt Loam":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.flat_slope
                    }
                });
                break;
            case "Loam":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.flat_slope
                    }
                });
                break;
            case "Sandy Loam":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.flat_slope
                    }
                });
                break;
            case "Sand":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.flat_slope
                    }
                });
                break;
            default:
                return 0;

        }
    } else if (slope === "Slight") {
        switch (soil) {
            case "Clay":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.slight_slope
                    }
                });
                break;
            case "Clay Loam":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.slight_slope
                    }
                });
                break;
            case "Silt Loam":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.slight_slope
                    }
                });
                break;
            case "Loam":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.slight_slope
                    }
                });
                break;
            case "Sandy Loam":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.slight_slope
                    }
                });
                break;
            case "Sand":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.slight_slope
                    }
                });
                break;
            default:
                return 0;
        }
    } else if (slope === "Moderate") {
        switch (soil) {
            case "Clay":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.moderate_slope
                    }
                });
                break;
            case "Clay Loam":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.moderate_slope
                    }
                });
                break;
            case "Silt Loam":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.moderate_slope
                    }
                });
                break;
            case "Loam":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.moderate_slope
                    }
                });
                break;
            case "Sandy Loam":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.moderate_slope
                    }
                });
                break;
            case "Sand":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.moderate_slope
                    }
                });
                break;
            default:
                return 0;
        }

    } else {
        switch (soil) {
            case "Clay":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.steep_slope
                    }
                });
                break;
            case "Clay Loam":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.steep_slope
                    }
                });
                break;
            case "Silt Loam":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.steep_slope
                    }
                });
                break;
            case "Loam":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.steep_slope
                    }
                });
                break;
            case "Sandy Loam":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.steep_slope
                    }
                });
                break;
            case "Sand":
                Object.keys(soilData).forEach(key => {
                    if (soilData[key].Type === soil) {
                        infiltrationRate = soilData[key].InfiltrationRate.steep_slope
                    }
                });
                break;
            default:
                return 0;
        }
    }

    console.log(infiltrationRate)

    var zoneName = "Zone 1"
    if (props.zonename) {
        zoneName = props.zonename;
    }

    // Calculates precipitation rate based on sprinkler head types
    var avgPrecipatationrate;
    if (props.precrate) {
        avgPrecipatationrate = parseFloat(props.precrate)
    }
    else if (props.sprayhead === "Fixed Spray Head") {
        avgPrecipatationrate = 1.5;
    } else if (props.sprayhead === "Rotor Head") {
        avgPrecipatationrate = 0.8;
    } else if (props.sprayhead === "Rotary Nozzle") {
        avgPrecipatationrate = 0.4
    } else {
        avgPrecipatationrate = 0.5
    }

    // calculates precipitation rate if area and gpm are input by the user
    if (props.area && props.gpm) {
        let gpm = parseFloat(props.gpm)
        let area = parseFloat(props.area)
        avgPrecipatationrate = calculatePrecipitationRate(gpm, area)
    }

    // calculates efficiency based on sun exposure and slope
    var efficiency = 1;
    if (props.efficiency) {
        efficiency = parseFloat(props.efficiency);
    } else if (props.exposureType === "Lots of sun") {
        if (props.slope === "Steep") {
            efficiency = 0.3
        } else if (props.slope === "Moderate") {
            efficiency = 0.5
        } else if (props.slope === "Slight") {
            efficiency = 0.6
        } else {
            efficiency = 0.7
        }
    } else if (props.exposureType === "Some shade") {
        if (props.slope === "Steep") {
            efficiency = 0.4
        } else if (props.slope === "Moderate") {
            efficiency = 0.6
        } else if (props.slope === "Slight") {
            efficiency = 0.7
        } else {
            efficiency = 1
        }
    } else if (props.exposureType === "Lots of shade") {
        if (props.slope === "Steep") {
            efficiency = 0.4
        } else if (props.slope === "Moderate") {
            efficiency = 0.6
        } else if (props.slope === "Slight") {
            efficiency = 0.7
        } else {
            efficiency = 1
        }
    }
    else {
        if (props.slope === "Steep") {
            efficiency = 0.3
        } else if (props.slope === "Moderate") {
            efficiency = 0.5
        } else if (props.slope === "Slight") {
            efficiency = 0.6
        } else {
            efficiency = 1
        }
    }

    let irrigationFreq = {}
    let irrigationRuntime = {}

    // Calculating irrigation frequency per day
    Object.keys(props.city).forEach((key, index) => {
        if (key !== "city") {
            let availableWaterHoldingCapacity = props.soiltype.AWHC;
            if (props.awhc) {
                availableWaterHoldingCapacity = parseFloat(props.awhc);
            }
            let rootDepth = props.zonetype.rootDepth;
            if (props.rootdepth) {
                rootDepth = parseFloat(props.rootdepth);
            }
            let MAD = 0.50;
            if (props.allowabledepletion) {
                MAD = parseFloat(props.allowabledepletion)
            }
            let ET_inchesPerDay = parseFloat(props.city[key]); // over 30 days in a month
            let cropCoefficient = props.zonetype.cropCoefficient;
            if (props.cropcoefficient) {
                cropCoefficient = parseFloat(props.cropcoefficient);
            }
            let freq = calculateIrrigationFrequency(availableWaterHoldingCapacity, rootDepth, MAD, ET_inchesPerDay, cropCoefficient);
            irrigationFreq[key] = Math.ceil(freq)
        }
    })

    // calculating run time
    Object.keys(props.city).forEach(key => {
        if (key !== "city") {
            let wateringDays = parseFloat(props.wateringdays);
            let ET_inchesPerDay = parseFloat(props.city[key]); // over 30 days in a month
            let cropCoefficient = props.zonetype.cropCoefficient;
            let precipitationRate = avgPrecipatationrate;
            let systemEfficiency = efficiency;
            let runtime = calculateSprinklerRunTime(wateringDays, ET_inchesPerDay, cropCoefficient, precipitationRate, systemEfficiency)
            irrigationRuntime[key] = Math.ceil(runtime)
        }
    })


    let irrigationDays = Object.keys(irrigationFreq).map((key, index) => {
        return <td key={index + index}>{irrigationFreq[key]}</td>
    })


    let runTimes = Object.keys(irrigationRuntime).map((key, index) => {
        return <td key={index}>{irrigationRuntime[key]}</td>
    })

    return (
        <>
            <Modal
                {...props}
                size="xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Run Time Calculator</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Landscape: {props.zonetype.name}</p>
                    <p>Spray type: {props.sprayhead}</p>
                    <p>Soil type: {props.soiltype.type}</p>
                    <p>Infiltration rate: {infiltrationRate} in/hr</p>
                    {
                        props.wateringdays === "1" ?
                            <p>Desired watering days: Every day</p>
                            :
                            <p>Desired watering days: Every {props.wateringdays} days</p>
                    }


                    <h5>Zone Rune Time in minutes per irrigation day in {props.city.city}, TX</h5>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                {props.gpm && props.area ?
                                    <th>{zoneName} @ {props.gpm} gpm and {avgPrecipatationrate.toFixed(2)} in/hr</th>
                                    :
                                    <th>{zoneName}</th>
                                }
                                <th>Jan</th>
                                <th>Feb</th>
                                <th>Mar</th>
                                <th>Apr</th>
                                <th>May</th>
                                <th>Jun</th>
                                <th>Jul</th>
                                <th>Aug</th>
                                <th>Sep</th>
                                <th>Oct</th>
                                <th>Nov</th>
                                <th>Dec</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Minutes per days</td>
                                {runTimes}
                            </tr>
                            <tr>
                                <td>Days to water</td>
                                <td>{props.wateringdays}</td>
                                <td>{props.wateringdays}</td>
                                <td>{props.wateringdays}</td>
                                <td>{props.wateringdays}</td>
                                <td>{props.wateringdays}</td>
                                <td>{props.wateringdays}</td>
                                <td>{props.wateringdays}</td>
                                <td>{props.wateringdays}</td>
                                <td>{props.wateringdays}</td>
                                <td>{props.wateringdays}</td>
                                <td>{props.wateringdays}</td>
                                <td>{props.wateringdays}</td>
                            </tr>
                            <tr>
                                <td>Maximum days allowed between runs</td>
                                {irrigationDays}
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.onHide}>
                        Okay
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}