// Task 1 Create JavaScript function “mergeArray” to merge two arrays and removes all duplicates elements.

console.log('Task 1')

let array1 = [1, 2, 3];
let array2 = [2, 30, 1];
let array3 = [];

const mergeArray = (array1, array2) => {
    array3 = [...array1, ...array2];
    return array3.filter((item, pos) => array3.indexOf(item) === pos);
}

console.log(mergeArray(array1, array2))

 
// Task 2 Create JavaScript function “showUserIp” user IP address in browser

console.log('Task 2')

function showUserIP() {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
      var iface = interfaces[devName];
  
      for (var i = 0; i < iface.length; i++) {
        var alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
          return alias.address;
      }
    }
    return '0.0.0.0';
  }
console.log(showUserIP())


// Task 3 Use Javascript built in array method called reduce and calculate total age of persons

console.log('Task 3')

const persons = [
    {
    name: 'Julia',
    age: 27
    },
    {
    name: 'Martin',
    age: 45
    },
    {
    name: 'Taavi',
    age: 17
    },
    {
    name: 'Emma',
    age: 2
    },
    {
    name: 'Ricky',
    age: 62
    }
    ]
   
    const totalSumOfAges = persons.reduce(function(sum, current) {
        return sum + current.age;
      }, 0);

    console.log(totalSumOfAges)
    
// Task 4 Use Javascript built in array method called filter and filter out boy and girl name
// (Bonus: filter out also boys and girls who are younger than 30)

console.log('Task 4')

const boyNames = ['Martin', 'Taavi', 'Ricky']
const girlNames = ['Julia', 'Emma']

const people = { 
Boys: persons.filter(function(item) {
    return boyNames.indexOf(item.name) !== -1;
}),
Girls: persons.filter(function(item) {
    return girlNames.indexOf(item.name) !== -1;
})
}

console.log(people);

const boysUnder = persons.filter(function(item) {
    return boyNames.indexOf(item.name) !== -1;
}).filter((p) => {
    if (p.age < 30) {
        return p
    }
  })

const girlsUnder = persons.filter(function(item) {
    return girlNames.indexOf(item.name) !== -1;
}).filter((p) => {
    if (p.age < 30) {
        return p
    }
  })

console.log('Boys younger than 30: ', boysUnder)
console.log('Girls younger than 30: ', girlsUnder)

// Task 5 Use Javascript built in array method called map and change inside previous exercise persons variable 
// all keys to uppercase

console.log('Task 5')

const personsKeyUpper = persons.map( function( item ){
    for(var key in item){
        var upper = key.toUpperCase();
        // check if it already wasn't uppercase
        if( upper !== key ){ 
            item[ upper ] = item[key];
            delete item[key];
        }
    }
    return item;
});

console.log(personsKeyUpper);