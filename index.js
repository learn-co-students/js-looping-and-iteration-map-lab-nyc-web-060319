'use strict'
// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function(driver) {return driver.toLowerCase();});
}

function nameToAttributes(drivers) {
    return drivers.map(function(driver) {
        
        const attrib = driver.split(" ");
        const newDriver = {firstName: attrib[0], lastName: attrib[1]};
        return newDriver;
    });
}

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {return `${driver.name} is from ${driver.hometown}`});
}