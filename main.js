function greeter(language){
    return function(name){
        if(language === "EN"){
            console.log(`Hello ${name}`)
        } else if(language === "IT") {
            console.log(`Ciao ${name}`)
        }

    }
}

const englisGreeter = greeter("EN");
const italianGreeter = greeter("IT");

englisGreeter("Dan");
italianGreeter("Tsavo");

function printTotal(sign){
    return function(amount){
        return `${sign} ${amount}`
}
}

const usdTotal = printTotal("$");
const euroTotal = printTotal("e");
const poundTotal = printTotal("p");

console.log(usdTotal(16));
console.log(euroTotal(16));
console.log(poundTotal(16));


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const opps = [add, subtract];

console.log(opps[1](1,3));

const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
}