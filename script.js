window.onload = function() {
    domainGenerator()
}

let pronoun = ['the', 'our', 'their'];
let adj = ['great', 'big', 'supreme'];
let noun = ['jogger', 'racoon', 'money'];
let TLD = ['.com', '.es', '.org']


function domainGenerator() {
    for (let i = 0; i < pronoun.length; i++){
        for (let x = 0; x < adj.length; x++){
            for (let j = 0; j < noun.length; j++){
                for (let k = 0; k < TLD.length; k++){
                    let domain = pronoun[i] + adj[x] + noun[j] + TLD[k];
                    let domains = "";
                    if (domain == "oursuprememoney.es") {domains += "oursupreme.money" + "<br>"; domains += "oursuprememoney.es"}
                    else {domains += domain;}
                    console.log(domains);
                    document.getElementById("domainGenerator").innerHTML += domains + "<br>";
                }
            }
        }
    }
}