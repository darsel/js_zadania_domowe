/**
 * 1. Napisz funkcje ktora jako parametr przyjmie kolekcje taka jak w stalej data
 * i zwroci obiekt w ktorym kluczem bedzie wartosc wlasnosci "code" a wartoscia
 * bedzie wartosc wlasnosci "mid"
 *
 * czyli
 *
 * {
 *  RUB: 0.1266,
 *  IDR: 3.8234,
 *  ...
 * }
 *
 * 2. napisz funkcje, ktora jako parametr przyjmie obiekt zwrocony przez funkcje z pt1
 * i zwroci najmnijesza wartosc mid z listy
 */
const data = [
    {"currency": "rubel rosyjski", "code": "RUB", "mid": 0.0578},
    {"currency": "rupia indonezyjska", "code": "IDR","mid": 0.00028213},
    {"currency": "rupia indyjska", "code": "INR","mid": 0.054581},
    {"currency": "won południowokoreański", "code": "KRW","mid": 0.003345},{"currency": "yuan renminbi (Chiny)", "code": "CNY","mid": 0.5812},
    {"currency": "SDR (MFW)", "code": "XDR", "mid": 5.6168}
];

//ad. 1
function pobierzDane(kolekcja){
    const output = {};
    (Array.isArray(kolekcja)? kolekcja : []).forEach(function(item){
        output[item.code] = item.mid;
    });
    return output;
}
const noweDane = pobierzDane(data);
console.log(noweDane);

//ad. 2

function najmniejszaWartosc(obiekt){
    
    const tab = Object.values(obiekt);
    let min = tab[0];
    for(let i = 0; i < tab.length; i += 1) {
        if(tab[i] < min){
            min = tab[i]; 
        } 
    
    }
    
    return min;
}
console.log(najmniejszaWartosc(noweDane));