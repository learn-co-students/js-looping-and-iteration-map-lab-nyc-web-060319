function lowerCaseDrivers(array) {
  let newArray = array.map(function(word) {return word.toLowerCase()})
  return newArray
}

function nameToAttributes(array) {
  let newArray = array.map(function(name) {
    let person = {}
    person.firstName = name.slice(0, name.indexOf(" "))
    person.lastName = name.slice(name.indexOf(" ") + 1, name.length)
    return person
  })
  return newArray
}

function attributesToPhrase(array) {
  let newArray = array.map(function(person) {
    return person.name + " is from " + person.hometown 
  })
  return newArray
}
