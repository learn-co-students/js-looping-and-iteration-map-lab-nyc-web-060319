// Code your solution in this file.
function lowerCaseDrivers(drivers){
    const list = drivers.map(
        function(driver){
            return driver.toLowerCase();
        });
    return list;
}

function nameToAttributes(drivers){
    const list = drivers.map(
        function(driver){
            const names = driver.split(' ');
            const driverObj = {};
            driverObj.firstName = names[0];
            driverObj.lastName = names[1];
            return driverObj;
        }
    );
    return list;
}

function attributesToPhrase(drivers){
    const list = drivers.map(
        function(driver){
            return `${driver.name} is from ${driver.hometown}`;
        }
    );
    return list;
}