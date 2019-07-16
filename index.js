// Code your solution in this file.
function lowerCaseDrivers(drivers){
    return drivers.map(function(driver) { return driver.toLowerCase(); }); 
}

function nameToAttributes(drivers){
    let returnObj = {};
     return drivers.map(function(driver){
        return {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}
    })
}

function attributesToPhrase(phrases){
    let returnObj = {};
     return phrases.map(function(phrase){
        return  phrase.name +  " is from " + phrase.hometown;
    });
}

