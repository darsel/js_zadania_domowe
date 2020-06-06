/**
  Napisz komponent (funkcje) JS, która zbuduje formularz.
  w tym formularzu powinine znalesc sie blok platnosci karta
  z polem
  Nr karty
  miesiac / rok wznosci karty (dwa pola lub jedno)
  kod zabezpieczenia cvc

  pola odpowiednio [nr karty] i [cvc] powinny przyjmowac tylko liczby
  [miesiac]/[rok] rowniez powinny przyjmowac tylko liczby ale z mozliwoscia 0 poczatkowego
  pola te powinny takze zalezec od siebie w ten sposob, ze jezeli
  - rok nie moze byc mniejszy niz biezacy
  - rok jest biezacy to nie mozna wpisac w miesiaca mnijszego niz obecny
  - jezeli wpisuje mniejszy miesiac niz obecny to jezeli rok jest wpisany biezacy to zmienia sie na +1 w gore

  jezeli uzytkownik wejdzie w pole [nr karty] i [cvc] ale ich nie wypelni i wyjdzie to powinin pojawic sie na polem napis 
  - Nie uzupelniles pola
*/

window.addEventListener('load', createForm);

function createForm() {
  const form = document.createElement('form');
  form.innerHTML = `
  <div class="input-inline"><label for="nr_karty" >Numer karty </label>
  <input type="number" class="input" id="nr_karty" name="numer_karty" value="" required>
  <span id="e_nr_karty" class="error"></span>
  </div>
  <div class="input-inline"><label for="miesiac_karty">Miesiąc </label>
  <input type="number" min="01" max="12" step="1" class="input" id="miesiac_karty" name="miesiac_karty" value=""  required>
  <span id="e_miesiac_karty" class="error"></span>
  </div>
  <div class="input-inline"><label for="rok_karty">Rok </label>
  <input type="number" min="0" step="1" class="input" id="rok_karty" name="miesiac_karty" value=""  required>
  <span id="e_rok_karty" class="error"></span>
  </div>
  <div class="input-inline"><label for="cvc_karty">Numer CVC </label>
  <input type="number" class="input" id="cvc_karty" name="cvc_karty" value=""  required>
  <span id="e_cvc_karty" class="error"></span>
  </div>
  <input type="submit" class="btn" id="cvc_karty" name="cvc_karty" value="Wyślij"  required>
  `;
  const app = document.getElementById('app');
  app.appendChild(form);
  const date = new Date();
  const inputNumerKarty = document.getElementById('nr_karty');
  const inputCvcKarty = document.getElementById('cvc_karty');
  const inputRokKarty = document.getElementById('rok_karty');
  inputRokKarty.min = date.getFullYear();
  
  const inputMiesiacKarty = document.getElementById('miesiac_karty');
  inputMiesiacKarty.addEventListener('focus', function() {
    if(inputRokKarty.value == date.getFullYear()) {
      inputMiesiacKarty.min = date.getMonth() + 1;
    } else {
      inputMiesiacKarty.min = 1;
    }
  });
  inputMiesiacKarty.addEventListener('blur', function() {
    if (inputRokKarty.value == date.getFullYear() && inputMiesiacKarty.value <= date.getMonth()) {
      inputRokKarty.value = Number.parseInt(inputRokKarty.value) + 1;
    }
  });
  
  inputRokKarty.addEventListener('blur', function(){
    if(inputRokKarty.value < date.getFullYear()){
      alert('Karta musi być ważna');
    } else if (inputRokKarty.value == date.getFullYear()) {
      inputMiesiacKarty.min = date.getMonth() + 1;
      if(inputMiesiacKarty.value <= date.getMonth()){
        inputMiesiacKarty.value = '';
        alert('Podaj poprawny miesiąc ważności karty');
      }
    } else {

    }
  })

  const inputs = document.getElementsByClassName('input');
  for(let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener('blur', function(){
    const idspan = 'e_'+ input.id;
    const spanError = document.getElementById(idspan);
    if(input.value == ''){
      spanError.innerHTML = 'Nie uzupelnileś pola';
    } else {
      spanError.innerHTML = '';
    }
    });
  }
  
  
  
    




}