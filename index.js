/* /* /* Afficher le factoriel de 9 en définissant une function 

function factoriel_de_neuf(n) {
  let resultat = 1

  if (n < 0) {
    return false
  }

  if (n == 0 || n == 1){
    return resultat
  }

  for (let i = n; i > 0; i--) {
    resultat = resultat * i
  }
return resultat
}

console.log(factoriel_de_neuf(9));
console.log(factoriel_de_neuf(3))
console.log(factoriel_de_neuf(2)) */


/* function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  0;

  // Reverse the cleaned string
  const reversedStr = cleanStr.split('').reverse().join('');

  // Check if the original and reversed strings are the same
  return cleanStr === reversedStr;
}

// Example usage:
const word = "radar";
const result = isPalindrome(word);

if (result) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
} */

/* function estNombreParfait(nombre) {
  let sommeDiviseurs = 0;

  // Parcourir les diviseurs potentiels de 1 à nombre/2
  for (let i = 1; i <= nombre / 2; i++) {
    // Vérifier si i est un diviseur de nombre
    if (nombre % i === 0) {
      sommeDiviseurs += i;
    }
  }

  // Le nombre est parfait si la somme des diviseurs est égale à lui-même
  return sommeDiviseurs === nombre;
}

// Exemple d'utilisation
const nombreTest = 28;
if (estNombreParfait(nombreTest)) {
  console.log(`${nombreTest} est un nombre parfait.`);
} else {
  console.log(`${nombreTest} n'est pas un nombre parfait.`);
}
 */

/* function factoriel_de_neuf(n) {
  resultat = 1
  if (n<0) {
    return false
  }
  if (n == 1 || n == 0) {
    return resultat
  }
  for (let i = n; i > 0; i--) {
    resultat = resultat*i
  }
  return resultat
}

console.log(factoriel_de_neuf(9));
console.log(factoriel_de_neuf(8))
console.log(factoriel_de_neuf(-9))
console.log(factoriel_de_neuf(0))
console.log(factoriel_de_neuf(1)) */


/* 
    1er cas : Palindrome sur un mot 
    Il est symétrique par rapport à un point
*/
/* unction is_palindrome(word) { */
/*   /* point arret, c'est pour designer le nombre de lettre entre le debut et le milieu  

  point_arret = (word.length)/2

  i = 0 /* pour initialiser le  

  for (let j = word.length-1; j > point_arret; j--) {

      if (word[i] != word[j] ) {
          
          return false;

      }
      i++;
      
  }
      
  
  return true;

}

/* Tu peux remplacer ete pour tester  
console.log(is_palindrome("rouge")) */ 



/* function nombre_pair_de_lettre(word) {
  let size = word.length
  
  if (word.length % 2 == 0) {
    return word
  }
  else {
    return false
  }
 
}
console.log(nombre_pair_de_lettre("radar")); */

//Creer une fonction pour determiner si le nombre est un multiple de trois 

/* function est_multiple_de_trois (n) {
  
  if(n % 3 === 0) {
    return true
  }
  else {
    return "pas_multiple_de_trois"
  }
}
console.log(est_multiple_de_trois (91)); */

/* function nombre_pair_de_lettre(n) {
  taille = n.length 
  let result = n
  
 /*  for (let i = 0; i <= n.length; i++) { */
/*     if (n.length % 2 === 0) {
      return result
    }

    else {
      return false
    }
    
  }
/*   return result
} 
console.log(nombre_pair_de_lettre("fonctionnement"))


// NOMBRES PARFAITS

function est_nombre_parfait (n) {
  let sum_diviseurs = 0

  for (let i = 1; i <= n / 2; i++ ) {
    
    if(n%i === 0) {
      sum_diviseurs += i
    }
  }
  return sum_diviseurs === n 
}

console.log(est_nombre_parfait(11));

// PPCM et PGCD

function ppcm_nombre(n) {

}

// PPCM et PGCD

function ppcm(a, b) {
  // Calcul du PPCM en utilisant la relation avec le PGCD
  return (a * b) / pgcd(a, b);
}

// Fonction pour calculer le PGCD (reprise de la fonction précédente)
function pgcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Exemple d'utilisation
const nombre1 = 12;
const nombre2 = 18;

const ppcmResultat = ppcm(nombre1, nombre2);
console.log(`PPCM de ${nombre1} et ${nombre2} : ${ppcmResultat}`); */

/* 
// Fonction pour afficher un mot de la derniere à la premiere lettre

function chaine (word) {
  return word.split('').reverse().join('')
}
console.log(chaine ('radar'));

// inverser une phrase 

let sentence = "Pourquoi pas lui ?"
let new_sentence = [];
let k = 0
//console.log(sentence.split(" ").reverse().join(" "))

for (let i = sentence.length-1; i >= 0 ; i--) {

    new_sentence[k] = sentence[i]
    k++
    
}

console.log(new_sentence.join("")) */

// Calcul du nombre de voyelles dans une chaîne 

/* const vowels = ["a", "e", "o", "i", "y", "u"]

function check_presence(letter) {
    for (let i = 0; i < vowels.length; i++) {
        if (letter == vowels[i]) {
            return true
        }        
    }
    return false
}

check_vowels = (word) => {
    let compt = 0

    for (let i = 0; i < word.length; i++) {
        
        if (check_presence(word[i])) { 
            compt++
        }    
        
    }

    return compt;
}

console.log(check_vowels("Canada"))  */

// Function pour trouver le nombre de voyelles dans une chaine de caractere



