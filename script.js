
let myName = prompt("Welcome to GC mini golf. What is your name?")

let numHoles = prompt("Hi, " + myName + "! Would you like to play 3 or 6 holes today?")

let totalPutts = 0;
if (numHoles == 3) {
    for (let numPutts = 1; numPutts <= numHoles; numPutts++) {
        let howManyPutts = prompt("How many putts for hole " + numPutts + "? (par is 3)")
        totalPutts = totalPutts + parseInt(howManyPutts);
    }
    if (totalPutts > 9) {
        console.log(`Nice try, ${myName}... Your total par was: +${totalPutts - 9}.`)
    }
    else if (totalPutts < 9) {
        console.log(`Great job, ${myName}! Your total par was: -${9 - totalPutts}.`)
    }
    else if (totalPutts == 9) {
        console.log(`Good game, ${myName}. Your total par was: 0.`)
    }
}

else if (numHoles == 6) {
    for (let numPutts = 1; numPutts <= numHoles; numPutts++) {
        let howManyPutts = prompt("How many putts for hole " + numPutts + "? (par is 3)")
        totalPutts = totalPutts + parseInt(howManyPutts);
    }
    if (totalPutts > 18) {
        console.log(`Nice try, ${myName}... Your total par was: +${totalPutts - 18}.`)
    }
    else if (totalPutts < 18) {
        console.log(`Great job, ${myName}! Your total par was: -${18 - totalPutts}.`)
    }
    else if (totalPutts == 18) {
        console.log(`Good game, ${myName}. Your total par was: 0.`)
    }
}

else {
    console.log("Invalid entry. Try again.")
}





