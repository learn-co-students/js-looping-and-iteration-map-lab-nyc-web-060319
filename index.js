// Code your solution in this file.
function lowerCaseDrivers(drivers){
    return drivers.map(function(ele){return ele.toLowerCase()});
}

function nameToAttributes(drivers){
    return drivers.map(
        function(ele){
            return {firstName: ele.split(' ')[0], lastName: ele.split(' ')[1]}
        }
    )
}

function attributesToPhrase(drivers) {
    return drivers.map(
        function(driver){
            return `${driver.name} is from ${driver.hometown}`
        }
    );
}