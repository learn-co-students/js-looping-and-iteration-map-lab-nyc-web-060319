function lowerCaseDrivers(array) {
    const newDrivers = array.map(function(name) {return name.toLowerCase()});
    return newDrivers;
}

function nameToAttributes(array) {
    const newDrivers = array.map(
        function(driver){
            return {firstName: driver.split(' ')[0], lastName: driver.split(' ')[1]}
        }
    );
    return newDrivers;
}

function attributesToPhrase(drivers) {
    return drivers.map(
        function(driver){
            return `${driver.name} is from ${driver.hometown}`
        }
    );
} 