//syntax
// for ([initialExpresion]; [condition]; [incrimentalExpression])
    //statement

for ( let i = 1; i <= 100; i += 1){
     console.log(i);
 }

for ( let i = 0; i <= 50; i += 5){
    console.log(i);
}

for ( let i = 20; i >= 1; i-= 1){
    console.log(i);
}

for ( let i = 25; i <= 200; i += 25){
    console.log(i);
}

function pacersWon (){
    console.log("Pacers won!");
}
for( let i = 0; i < 5; i++){
    pacersWon(); //calls pacersWon function
}