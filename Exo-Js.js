// TABLEAU 
let items = new Array();
console.log(items);

items = [];
console.log(items);

// items = ();
// console.log(items);
// renvoit une erreur

items =  ["a", "b"];
console.log(items);

items = ["premier élément", "deuxième élément", "troisième élément", "quatrième élément"];
console.log(items);
console.log(items[1]);
console.log(items[3]);
console.log(items[0]);

// exo 3

let player = [
     "Jhon",
     "Doe",
     34,
     true
];
console.log(player);
console.log(player[0]);
console.log(player[1]);
console.log(player[0] + " " + player[1]);

player[2] = 40;
console.log(player[2]);

console.log(player[3]);

// non

// exo 4 tableau associatif

player = {
    "firstName" : "John",
    "lastName" : "Doe",
    "age" : 34,
    "isAdult" : true
};

console.log(player);
console.log(player["firstName"]);
console.log(player["lastName"]);
console.log(player["firstName"] + " " + player["lastName"]);
player["age"] = 40;
console.log(player["age"]);

console.log(player["isAdult"]);

// exo 5 tableau associatif

let car ={
    "type" : "Clio", 
    "brand" : "Renault",
    "date" : 2006,
    "color" : "orange",
    "passengers" : ["Mike", "Claire", "Anna", "Louis"]
};

console.log(car);

car["color"] = "noir";

console.log("Une" + " " + car["brand"] + " " + car["type"] + " " + "de couleur" + " " + car["color"] + " " + ", modèle" + " " + car["date"] + " " +  "a été aperçue avec" + " " + car["passengers"].length + " " + "passagers à son bord ");

console.log(car["passengers"][0]);

console.log(
    car["passengers"].length +
    " " + 
    "individus ont été aperçus à son bord :" + 
    " " +
    car["passengers"][3] +
    "," +
    car["passengers"][1] +
     "," +
    car["passengers"][0] +
    "," +
     car["passengers"][2]);

    //  exo 6 

    let a = 14;
    let b = 38;

    let product = [];

    console.log(a);
    console.log(b);
    console.log(product);

    product[0] = a;
    product[1] = b;
    product[7] = 50;

    console.log(product);

// CONDITIONS 

// exo 2 

let content;

content = true;
content = true;
content = "text";
content = 123;

if (content) {
    console.log("Condition is OK");
  }
  else {
    console.log("Condition is KO");
  }

// exo3

let price = 45;

if (price === 45) {
    console.log("The price is a number");
  }
  else if (price == 45) {
    console.log("The price is a string");
  }
  else {
    console.log("The price is something else");
  }

//   exo 4 

let minimumAge = 18;
let userAge = 25;

if (userAge >= minimumAge) {
    console.log("Bienvenu!");
} else {
    console.log("Vous n'avez pas l'age");
}

// exo5 

let store = ["Walmart", "Colorado", "South-Park", 483];

if (store[0] = "Walmart" && store[1] === "South-Park") {
  console.log("The Walmart in South-Park has " + store[3] + " employes") ;
}
else if (store[0] = "Walmart" && store[2] === "Colorado") {
  console.log("Hum this is an other Walmart from Colorado");
}
else if (store[1] = "Walmar") {
  console.log("Too bad this is just a Walmart");
}
else {
  console.log("I do not know what this is");
}
  
// exo 6

let student = {
    "name" : "John Doe",
    "grade" : 14
}

if (student["grade"] < 10) {
    console.log("Recalé");
} else if (student["grade"] < 12 ) {
    console.log("Passable");
} else if (student["grade"] < 14 ) {
    console.log("Moyen");
} else if (student["grade"] < 16 ) {
    console.log("Bien");
} else{
    console.log("Très bien");
}

// exo 7

let meal = {
    "foodType" : "meat",
    "cookedAt" : 80,
    "temperature" : 60,
    "status" : ["Cooked", "UnCooked", "OverCooked"]
}

if (meal["temperature"] === meal["cookedAt"]) {
    console.log(meal["status"][0]);
} else if (meal["temperature"] < meal["cookedAt"]){
    console.log(meal["status"][1]);
} else {
    console.log(meal["status"][2]);
}

// exo 8

let number = 42;

if (number > 0) {
  if(number % 2 === 0) {
    console.log("number is even");
  }
  else {
    console.log("number is odd");
} 
}
else {
console.log("Please enter a number at least greater than 0");}

// LES BOUCLES

// exo 1

let i = 0;

while (i <= 9) {
    console.log("One run of the loop");
    i ++;
  }
//   10 itérations appraisent 

// exo 2

for (i=0; i <=9 ; i++) {
    console.log("One run of the loop");
  };

// exo 3

for(i=0; i <= 100; i++){
    console.log(i);
}

for(i=0; i %2 <= 100; i+=2){
    console.log(i);
}

// exo 4

for ( i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i +" " + "is even")
    } else {
        console.log(i +" " + "is odd")
    }
    
}

// exo 5

items = [
    "firstItem",
    "secondtItem",
    "thirdtItem",
    "fourthtItem",
] 

for (i=0; i < 4; i++) {
    console.log(items[i]);
  }

// exo 6 

customers = [
    "Albin Term",
    "Anna Sandgrove",
    "John Doe",
    "Terrance Head",
    "Yan Mock",
    "Zoe Durst"
  ];

  console.log("List of all  customers :");

  for (i=0; i < 6; i++) {
    console.log(customers[i]);
}

// exo 7

items = [
    "firstItem",
    "secondtItem",
    "thirdtItem",
    "fourthtItem",
] 

for (const item of items) {
    console.log(item);
}

// exo 8

let citizen = {
    "firstName" : "John",
    "lastName" : "Doe",
    "age" : 45,
    "income" : 60000,
    "sexe" : 0
};

console.log("Citizen identity :");

for (let identity in citizen) {
    if (identity === "sexe") {
           if (citizen.sexe === 1) {
        console.log(citizen.sexe = "femme" );
    } else {
        console.log(citizen.sexe = "Homme" );
    }
    } else {
        console.log(identity + " : " + citizen[identity]);
    }
}

// exo 9

let citizens = [
    {
      "firstname" : "John",
      "lastname" : "Doe"
    },
    {
      "firstname" : "Anna",
      "lastname" : "Molner"
    },
    {
      "firstname" : "Harry",
      "lastname" : "Trueman"
    },
    {
      "firstname" : "Cecile",
      "lastname" : "Mercier"
    }
  ];

for (let citizen of citizens) {
    for (let key in citizen) {
console.log(key + " : " + citizen[key]);
    }
    console.log("\n");
}

// FUNCTION 

// exo 1

function product(a,b) {
    return a*b;
 }
 
 let result = "The result of the function is : " + product(4,30);
console.log(result);

// exo 2

function showDigits() {
    for (var i=0; i <=9 ; i++) {
      console.log(i);
    }
  }

//   exo 3

function welcome(firstName, lastName){
    let result = "Welcome to our site : " + firstName + " " + lastName;
    return result;
}

let message = welcome("John", "Doe");

console.log(message);

// exo 4

function isAdult(age){
    if (age >= 18){
        return "Adult";
    } else if (age < 18 ){
      return "Mineur";
    }else{
        return "Pas d'âge enregistrer";
    }
}
    
    let autorised = isAdult(18);
    
    console.log(autorised);

// exo 5

function birthYear(age){
    if (age) {
       return new Date().getFullYear() - age;
    } else {
       return "No age given";
    }
   }
   
   let userBirthYear = "Votre année de naissance est : " + birthYear(35);
   
   console.log(userBirthYear);

//    exo 6

const user = {
    "firstName" : "John",
    "lastName" : "Doe",
    "age" : 42,
    "job" : "dev"

}

function identityCard (user){
    identityCard = "";
    for (var key in user) {
      identityCard += key  + " : " + user[key] + "\n";
    }
    return identityCard;
}

console.log(identityCard(user));

// FUNCTION NATIVE

// Exo 1

Math.random(); // permet de randomiser un resultat flottant entre l'interval [0,1[ est étant exclu

console.log(Math.random());

let random = Math.random(8);
console.log(random);

// exo 2

number = 12.8;

console.log(number); // un flottant est affiché

number = Math.round(number);
console.log(number); //result 13

number = 12.3
number = Math.round(number);
console.log(number); // result 12

number = 12.5
number = Math.round(number);
console.log(number); //result 13

number = 12.42359
number = Math.round(number);
console.log(number); //result 12

// en définitif Math.random arrondi à l'entier le plus proche 

number = 12.42359
number = Math.round(number * 100) / 100;
console.log(number); //result 12.42

// exo 3 

age = "35";

console.log(typeof(age)); // renvoit string

age = Number(age); // converti un strin en Nombre
console.log(typeof(age));

// exo 4

let text = "Salut";
let maxLength = 20;

if (text.length > maxLength) {
    console.log("Votre texte est trop long");
} else {
    console.log(text); // affiche salut
}


// exo 5

text = "A nice boat";
console.log(typeof(text)); // renvois comme type de donnée un string - chaine de caractere

let letterArray = text.split(''); // renvois un tableau de chaque lettre
console.log(letterArray);

let wordArray = text.split(' '); // l'espacement (1) dans les parametres de la fontcion split nous permet d'avoir les mots et non les lettres
console.log(wordArray);


// exo 6

let userName = "Paul Dumas";
let expectedName = "paul dumas";

if (userName.toLowerCase() === expectedName) { // toLowerCase permet de mettre une chaîne de caratere en minuscule.
  console.log("OK Paul you can come in");
}
else {
  console.log("We do not know you");
}

// exo 7

let newStudent = "Ryan Oper";

student = [
    "John, Doe",
    "Jane Doe",
    "Marc Alm",
    "Jimmy Turner"
]

console.log(typeof(newStudent));
console.log(typeof(student));

student.push(newStudent);

console.log(student);

student.push("Franck Martin", "Tom Hawkins");
console.log(student);

// exo 8

const transactions = [102, 50, 4563, 42, 78, 146, 10563];
let researched = 42;

console.log(transactions.includes(researched)); // resultat true car la  valeur se trouve dans le tableau autrement la valeur serait à false

if (transactions.includes(researched)) {
    console.log("We found a matching transaction");
} else {
    console.log("No match");
}

// exo 9


student = [
    "John, Doe",
    "Jane Doe",
    "Marc Alm",
    "Jimmy Turner"
]

student.sort();

console.log(student);
