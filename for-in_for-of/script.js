/*
    for of / for in loop

    for(let variable of estructura){
        codigo a ejecutar
    }
*/


let names = ["Brownie", "Khaleesi", "Kiki", "Mia", "Bianca"];

for (let name of names){
    console.log(name);
    console.log(names.indexOf(name));
}


console.log("***for in***")
for(let name in names){
    console.log(name);
    console.log(names[name]);

}

