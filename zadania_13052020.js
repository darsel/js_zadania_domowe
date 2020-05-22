/*
Zadania 1
Napisz funkcję, która jako parametr przyjmie dowolne słowo
Funkcja powinna zwrócic ciąg znaków złozonych
z znaków, znajdujących się na parzystym indeksie podanego jako parametr slowa
Zastosuj dowolna petle (for, while).
*/
function x(slowo){
  let output = '';
  for(let i = 2; i < slowo.length; i += 2){
    output += slowo.charAt(i);
  }
  return output;
}
/*
Zadania 2
Napisz pętlę for, która modyfikuje tablicę ze zwierzętami, sprawiając, że stają się niesamowite! Jeśli nasza 
początkowa tablica wygląda tak:

const zwierzęta = [
  "pantera",
  "pirania",
  "łasica"
];

...to po wykonaniu pętli powinna wyglądać tak:
[
  "Niesamowita pantera",
  "Niesamowita pirania",
  "Niesamowita łasica"
]
*/
const zwierzeta = [
    "pantera",
    "pirania",
    "łasica"
  ];
  
  for(let i = 0; i < zwierzeta.length; i += 1){
    zwierzeta[i] = 'Niesamowita ' + zwierzeta[i];
  }
  console.log(zwierzeta);

  /*
  Zadanie 3
  Napisz funkcję, która jako parametr przyjmie liczbę naturalną wiekszą od 0.
  Funkcja powinna zwrócić losowo utworzony ciag znaków wybranych ze zbioru
  (const alfabet = "abcdefghijklmnopqrstuvwxyz";). Nowo utworzony ciąg znaków
  powinien mieć długosc określoną przez liczbę podaną jako argument wywołania tej funkcji - np.
  generuj(3); -> 'fws';
  generuj(5); -> 'ldqwa';
*/


const alfabet = "abcdefghijklmnopqrstuvwxyz";
function generujLosowyCiag(liczbaZnakow){
  let output = '';
  for(let i = 0; i < liczbaZnakow; i += 1){
    output += alfabet[Math.floor(Math.random()*alfabet.length)];
  }
  return output;
}

/*
Zadanie 4
  Mamy podany łańcuch znaków: 'JAVASCRIPT JEST SUPER'.
  Utwórz ciąg w postaci 'J4V42CR1PT J32T 2UP3R'.

  czyli w pierwszym łańcuchu zamieniamy litery wg. wzoru
  A = 4
  E = 3
  I = 1
  O = 0
  S = 2

  Sprobuj napisać funkcję która przyjmie jako parametr dowolny łańcuch znaków
  i zwróci łańcuch przerobiony wg powyszego wzorca
*/

(function(){
    let ciagZnakow = 'JAVASCRIPT JEST SUPER';
    const wzor = {
      A: 4,
      E: 3,
      I: 1,
      O: 0,
      S: 2,
    };
    function koduj(ciagZnakow) {
      let output = '';
      for(let i = 0; i < ciagZnakow.length; i += 1) {
        const char = ciagZnakow.charAt(i);
  
        output += wzor[char.toUpperCase()] || char;
  
      }
      return output;
    };
    console.log(koduj('JAVASCRIPT JEST SUPER'));
  })();

  /*
  Zadanie 5
  Napisz funkcję, która przyjmie dowolne słowo.
  Funkcja powinna zwrócić liczbę wystąpienia kazdego znaku w podanym słowie
  np:

  enumerate_characters('koparka') -> k: 2, o: 1, p: 1, a: 2, r: 1
*/

function policzLitery(slowo){
    const output = {};
    for(let i = 0; i < slowo.length; i += 1){
      const char = slowo.charAt(i);
      if(output[char]) {
        output[char] += 1;
      } else {
        output[char] = 1;
      }
    }
    //console.log(output);
    return output;
  }