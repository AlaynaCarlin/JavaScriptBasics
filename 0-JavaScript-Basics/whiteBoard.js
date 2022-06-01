// PRACTICE CHALLENGES
// challenge 1
function fullName(name1, name2) {
    console.log(`My name is ${name1} + ${name2}`);
}

fullName('Alayna', 'Carlin');

// challenge 2 
for (i = 0; i <= 100; i++) {
    if (i % 6 === 0 && i % 8 === 0) {
        console.log('Fizz Buzz');
    } else if (i % 8 === 0) {
        console.log('Buzz');
    } else if (i % 6 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

// challenge 3
function findParameter (length, width) {
    if (length + width >= 20) {
        console.log(`True. The perimeter is ${length + width}`);
    } else if (length + width <= 20) {
        console.log(`False. The perimeter is ${length + width}`);
    }
}

findParameter(1, 7);

// challenge 4 
let library = {
    name: 'Scott Calvin',
    address: 'North Pole',
    sections: {
        collections: [
            {
                classification: 'restricted',
                count: 5004,
                aisle: 'The one by the door'
            },
            {
                classification: 'food',
                count: 74,
                aisle: 'The one in the back'
            }
        ]
    }
}