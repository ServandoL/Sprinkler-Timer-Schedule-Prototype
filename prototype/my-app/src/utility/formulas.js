// Expressed in inches per hour.
// Using the area inside the sprinkler spacing and the gallons per minute being applied to the area
export function calculatePrecipitationRate(gpm, area) {
    return (96.3 * gpm) / area
}

// Determines the daily average operating time.
// irrigationReq => system irrigaiton requirements in inches per week in teh worst case season
// precipitationRate => precipitation rate in inches per hour
// daysAvail => days available for irrigaiton per week
// 60 => constant conversion factor of 60 min/h
export function calculateOperatingTime(irrigationReq, precipitationRate, daysAvail) {
    return (irrigationReq * 60) / (precipitationRate * daysAvail)
}

// Determines maximum internval allowed between irrigation cycles.
// AWHC => Available Water Holding Capacity, the moisture level in the soil, which is above the plants permanent wilting point, and below the soils field capacity, in inches per foot
// rootZoneDepth => root zone depth in feet
// MAD => Management Allowable Depletion, MAD of 30-50% will sustain a healthy landscape
// ET_0 => reference evapotranspiration rate, in inches per day
// K_c => Crop coefficient, decimal
export function calculateIrrigationFrequency(AWHC, rootZoneDepth, MAD, ET_0, K_c) {
    return (AWHC * rootZoneDepth * MAD) / (ET_0 * K_c)
}

// Determines the number of minutes required to apply enough water to replace the water lost by evapotranspiration for a specific crop at a particular precipitation rate and efficiency
// wateringFreq => watering frequency in days
// efficiency => application efficiency of the system in decimal percent
export function calculateSprinklerRunTime(wateringFreq, ET_0, K_c, precipitationRate,efficiency) {
    return (60 * wateringFreq * ET_0 * K_c) / (precipitationRate * efficiency)
}

// Predict the plant water requirement for turf grass considering effective rainfall
// adjustmentFactor => Conditions considering factors such as density, shade, sun , slope, wind, etc... 1.0 for normal situations
// avgMonthlyRainfall => average rainfall in the area to be irrgated
// PET => potential evapotranspiration (inches per month)
// 0.67 => as much as 67% of long-term rainfall may be considered effective. Effective rainfall refers to the portion of rainfall that is of benefit to the plants.
export function calculateWaterRequirement_Turf(PET, K_c, adjustmentFactor, avgMonthlyRainfall) {
    return (PET * K_c * adjustmentFactor) - (avgMonthlyRainfall * 0.67)
}

// Determines the amount of water held in teh soil and available to the plant for uptake
// SWHC => soil water-holding capacity
// rootZoneDepth => effective root zone depth
// MAD => Management Allowable Depletion, MAD of 30-50% will sustain a healthy landscape
export function calculatePlantAvailableWater(SWHC, rootZoneDepth, MAD) {
    return SWHC * rootZoneDepth * MAD
}

