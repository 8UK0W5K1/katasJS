// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// d'abord  jsuis parti trop loin  avec...
// str.charAt(str.length - 1);

function solution(str, ending) {
  return str.endsWith(ending);
}

// La méthode endsWith() renvoie un booléen indiquant si la chaine de caractères se termine par la chaine de caractères fournie en argument.

// str.endsWith(chaîneRecherchée[, position]);

// Paramètres

// chaîneRecherchée

//     Les caractères à rechercher à la fin de la chaine de caractères.
// position Facultatif

//     Paramètre optionnel. Permet de rechercher dans la chaine de caractères comme si elle faisait cette longueur ; par défaut il s'agit de la longueur de la chaine de caractères chaîneRecherchée. Si la valeur fournie est supérieure à la longueur de la chaine de caractères, elle ne sera pas prise en compte.
