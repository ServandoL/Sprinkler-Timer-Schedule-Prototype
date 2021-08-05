import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { calculatePrecipitationRate, calculateWaterRequirement_noRain, calculatePlantAvailableWater, calculateIrrigationFrequency, calculateZoneRuneTime } from "../utility/formulas";
import Table from "react-bootstrap/Table";
import soilData from "../api/soilData.json";
import monthlyRainfallData from "../api/texasMonthlyRain.json";

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

    // calculates efficiency based on precipitation rate 
    // calculates adjustment factor based on sun and slopes
    var efficiency = 1.0;
    let adjustmentFactor = 1.0;
    if (props.efficiency) {
        efficiency = parseFloat(props.efficiency);
    } else if (props.exposuretype === "Lots of sun") {
        if (props.slope === "Steep") {
            efficiency = 0.3
            adjustmentFactor = 1.5
        } else if (props.slope === "Moderate") {
            efficiency = 0.5
            adjustmentFactor = 1.3
        } else if (props.slope === "Slight") {
            efficiency = 0.6
            adjustmentFactor = 1.2
        } else {
            efficiency = 0.7
            adjustmentFactor = 1.0

        }
    } else if (props.exposuretype === "Some shade") {
        if (props.slope === "Steep") {
            efficiency = 0.4
            adjustmentFactor = 1.1
        } else if (props.slope === "Moderate") {
            efficiency = 0.6
            adjustmentFactor = 1
        } else if (props.slope === "Slight") {
            efficiency = 0.7
            adjustmentFactor = 0.9
        } else {
            efficiency = 1.0
            adjustmentFactor = 0.8
        }
    } else if (props.exposuretype === "Lots of shade") {
        if (props.slope === "Steep") {
            efficiency = 0.4
            adjustmentFactor = 1
        } else if (props.slope === "Moderate") {
            efficiency = 0.6
            adjustmentFactor = 0.8
        } else if (props.slope === "Slight") {
            efficiency = 0.7
            adjustmentFactor = 0.7
        } else {
            efficiency = 1.0
            adjustmentFactor = 0.7
        }
    }
    else { // Mostly shade
        if (props.slope === "Steep") {
            efficiency = 0.3
            adjustmentFactor = 1
        } else if (props.slope === "Moderate") {
            efficiency = 0.5
            adjustmentFactor = 0.7
        } else if (props.slope === "Slight") {
            efficiency = 0.6
            adjustmentFactor = 0.6
        } else {
            efficiency = 1.0
            adjustmentFactor = 0.5
        }
    }

    let irrigationFreq = {}
    let irrigationRuntime = {}
    let monthlyRainfall = {}
    let weeklyPlantRequirement = {}

    let waterHoldingCapacity = props.soiltype.AWHC;
    let rootDepth = props.zonetype.rootDepth;
    let MAD = 0.5;

    if (props.rootdepth) {
        rootDepth = parseFloat(props.rootdepth);
    }
    if (props.allowabledepletion) {
        MAD = parseFloat(props.allowabledepletion);
    }
    let plantAvailableWater = calculatePlantAvailableWater(waterHoldingCapacity, rootDepth, MAD)


    // Get avg monthly rainfall based on the selected city
    Object.keys(monthlyRainfallData).forEach(key => {
        if (monthlyRainfallData[key].City === props.city.city) {
            monthlyRainfall = monthlyRainfallData[key]
        }
    })

    //calculate plant water requirement for turf grass for each month
    Object.keys(props.city).forEach((key, index) => {
        if (key !== "city") {
            let monthlyPET = parseFloat(props.city[key]);
            let cropCoefficient = props.zonetype.cropCoefficient;
            if (props.cropcoefficnet) {
                cropCoefficient = parseFloat(props.cropcoefficnet);
            }
            let plantReq = calculateWaterRequirement_noRain(monthlyPET, cropCoefficient, adjustmentFactor);
            weeklyPlantRequirement[key] = plantReq / 4; // divide by 4 to get inches per week
        }
    })

    // Calculate Irrigation frequency
    Object.keys(weeklyPlantRequirement).forEach(key => {
        irrigationFreq[key] = Math.ceil(calculateIrrigationFrequency(weeklyPlantRequirement[key], plantAvailableWater));
    });

    // calculate zone run times
    Object.keys(irrigationFreq).forEach(key => {
        irrigationRuntime[key] = Math.ceil(calculateZoneRuneTime(weeklyPlantRequirement[key], irrigationFreq[key], avgPrecipatationrate));
    })

    let cyclesPerDay = Object.keys(irrigationFreq).map((key, index) => {
        return <td key={index}>{Math.ceil(avgPrecipatationrate / infiltrationRate)}</td>
    });

    let plantReq = Object.keys(weeklyPlantRequirement).map((key, index) => {
        return <td key={index + key}>{weeklyPlantRequirement[key].toFixed(2)}</td>
    });

    let irrigationDays = Object.keys(irrigationFreq).map((key, index) => {
        return <td key={index + index}>{irrigationFreq[key]}</td>
    });


    let runTimes = Object.keys(irrigationRuntime).map((key, index) => {
        return <td key={index}>{irrigationRuntime[key]}</td>
    });

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

                    <h5>Zone Rune Time in minutes per irrigation day in {props.city.city}, TX</h5>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                {props.gpm && props.area ?
                                    <th>{zoneName} @ {props.gpm} gpm and {avgPrecipatationrate.toFixed(2)} in/hr</th>
                                    :
                                    <th>{zoneName} @ {avgPrecipatationrate.toFixed(2)} in/hr</th>
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
                                <td>Recommended watering days per week</td>
                                {irrigationDays}

                            </tr>
                            {/* <tr>
                                <td>Cycles per day</td>
                                {cyclesPerDay}
                            </tr> */}
                            <tr>
                                <td>Weekly Water Requirement in inches/week</td>
                                {plantReq}
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