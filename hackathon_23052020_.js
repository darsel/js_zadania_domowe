/**
 * Ponzej znajduje się kolekcja.
 *
 * 1. napisz funkcje która przyjmie paramet z taka kolekcja i zwroci
 * liste wszystkich cen z podanej kolekcji czyli np. [235.07, 235.48, ...]
 *
 * 2. napisz funkcje, która przyjmie jako parametr liste zwrocona przez funkcje z pt1
 * i zwroci liste z odwrotna kolejnoscia czyli np [229.30, 233.94, ...]
 *
 * 3. to co zwroci funkcja z pt2 wypisz za pomoca console.table()
 */
const collection = [
    {"data": "2020-05-18", "cena": 235.07},
    {"data": "2020-05-19", "cena": 235.48},
    {"data": "2020-05-20", "cena": 232.71},
    {"data": "2020-05-21", "cena": 233.94},
    {"data": "2020-05-22", "cena": 229.30}
];

//ad. 1 
function listaCen(kolekcja){
    return ((Array.isArray(kolekcja) && kolekcja) || []).map(function(item) {
        return item.cena;
    });
}

let nowaListaCen = listaCen(collection);
console.log(nowaListaCen);

//ad. 2
function odwrocListe(lista) {
    return lista.reverse();
}

let odwroconaListaCen = odwrocListe(nowaListaCen);
console.log(odwroconaListaCen);

//ad. 3
console.table(odwroconaListaCen);