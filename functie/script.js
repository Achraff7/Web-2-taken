let voetballer1 = { naam: "Lukaku", leeftijd: 28, team: "Chelsea"};
let voetballer2 = { naam: "Ronaldo", leeftijd: 35, team: "ManUntd"};
let voetballer3 = { naam: "Messi", leeftijd: 34, team: "PSG"};
let lijstVoetballer = [voetballer1, voetballer2, voetballer3]



console.log(lijstVoetballer.length);


for (let i = 0; i < lijstVoetballer.length; i++) {
    voetballer(lijstVoetballer[i]);

}

function voetballer(parameter) 
{ console.log(parameter.naam + ' '+ parameter.leeftijd + ' '+ parameter.team);

}