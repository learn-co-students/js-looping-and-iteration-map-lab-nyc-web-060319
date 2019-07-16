// Code your solution in this file.

// function lowerCaseDrivers(array) {           // Doesn't use map, failed test
//     const newArr = [];

//     for (const element of array){
//         newArr.push(element.toLowerCase());
//     }
//     return newArr;
// }

function lowerCaseDrivers(array) {
    const newArr = array.map(x => x.toLowerCase());
    return newArr;
}

//  [ { firstName: 'Bobby', lastName: 'Smith' }, .. ]


function nameToAttributes(array) {
    let nameArr = [];
    const newArr = array.map(function(fullName){    // array[0]  NOPE.
        let wip;
        let temp;
        wip = fullName.split(" ");
        // temp['firstName'] = wip[0];
        // temp['lastName'] = wip[1];
        console.log(wip[0])
        temp = Object.create({firstName: `${wip[0]}`, lastName: `${wip[1]}`})  //  LEFT OFF HERE !! 
        debugger
        console.log(temp)
        nameArr.push(temp)
    });
    return nameArr;
}




// [ { name: 'Bobby', hometown: 'Tampa Bay' }
// ];

// 'Bobby is from Pittsburgh'


function attributesToPhrase(array) {
    let returnArr = [];

    let temp = array.map( function(array) {
        // returnArr.push(`${array[:name]} is from ${array[:hometown]}`)  // NOPE
        // returnArr.push(array['name'])  // "Bobby"
         returnArr.push(`${array['name']} is from ${array['hometown']}`)  

    });
    console.log(returnArr);
    return returnArr;
}