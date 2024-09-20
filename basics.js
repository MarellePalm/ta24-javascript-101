
// Global Scope - Globaalne ulatus 
const teachername ="Karl Rauniste";
// 1. OSA
// Muutujad
// Andmetüübid: DATA TYPES
// string--->"see on stringi väärtus", ´see on stringi väärtus´ 'see on stringi väärtus' hoiab teksti 
// number(int, float) -->  42  hoiab numbrit
// Boolean ---> true/false, jah/ei, 1/0  
//const isMAte = true
// Hoiavad väärtust.
// Array--> [] andmetekogu
// Object--> {} omaduste hoidmiseks

// Muutujad-nimetus ja väärtus  (NB:muutumatu vs Muudetav)
//Muutujuate nimetus on camelCase and it makes some sense
const fruit = 'Banaan'; // Muutuja, mida ei saa enam muuta
let model = "BMW"; // Muutuja, mida saab veel muuta


model = "Audi";

//Koodiblokk => SCOPE
//Koodiblokki tähistab {} see sümbol
//Function Scope
const calculateSum= (number1, number2) =>{
    const number3 = 256;
    //console.log(number3);
    //console.log(teachername);
    return number1 + number2;
};

calculateSum(1,2);

// Type casting 
//Muudame number andmetüübi string andmetüübiks
const castNumber = "123456";
console.log(typeof String(castNumber));
console.log(Boolean(castNumber));


//Array => sümbol on [] , toimub indekseerimine, esimene element on kohal 0
// ÜKS VIIS KUIDAS arrayst asju välja kutsuda 
const characters = ["T", "P", "I", "C","S", "V", "A", "J", "R"];

console.log(characters[7]);
console.log(characters[6]);
console.log(characters[5]);
console.log(characters[6]);
console.log(characters[4]);
console.log(characters[3]);
console.log(characters[8]);
console.log(characters[2]);
console.log(characters[1]);
console.log(characters[0]);


// teeme loopi juurde, old school
//Loopimine = korduslause. Igast array elemendist minnakse üle ning käiakse läbi script/ annab kõik andmed mis on arrays kirjas
//For loop

for(i = 0; i < characters.length; i++){
    console.log("For loop:", characters [i]);
}
// i on null, nüüd array jookseb nii kaua kui i on suurem kui characters, iga kord i tuleb +1 juurde<-  üelval oleva koodi seletus


// GENI loop
//forEach loop

characters.forEach((charater) => {
    console.log("Foreach loop:", charater);
});

// for each - käin igast charaterist üle.
