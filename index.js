// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function (driver) {return driver.toLowerCase()})
}


// this function takes an array of drivers with their first and last name 
// separated by a space, and returns an array of JavaScript objects 
// with firstName and lastName attributes.

//arr = ["John Doe", "Someone Else"]
function nameToAttributes(drivers) {
    return drivers.map(function (driver) {
        let driverSplit = driver.split(" ")
        return {firstName: driverSplit[0], lastName: driverSplit[1]}
    })
}

// this function takes an array of drivers as JavaScript objects 
// and returns a string saying "<NAME OF DRIVER> is from <HOMETOWN>" 
// for each JavaScript object in the array. 

//arr = [{name: A, hometown: B}, {name: C, hometown: D}]

function attributesToPhrase(drivers) {
    return drivers.map(function (driver) {
        return `${driver["name"]} is from ${driver["hometown"]}`
    })
}