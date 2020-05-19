/**
 * Zmien tak wytyczne zadania [06052020_1], zeby napisac funkcje,
 * ktora bedzie przyjmowala dwa parametry: speed
 * i typeOfRoad gdzie wartosc domyslna typeOfRoad jest rowna 'city'
 * funkcja powinna wypisywac to co jest zapisane w zadaniu [06052020_1]
 * kiedy przy wywolaniu podajemy speed i/lub typeOfRoad:
 *
 * czyli jezeli wywolam funkcje:
 *
 * myFunction(30); to zostanie wyswietlony tekst 'Miasto: jedziesz prawidlowo'
 * myFunction(150, 'expressway'); zostanie wyswietlony tekst 'Eska: przekroczyles prędkość'
 * itd.
 *
 */

myFunction(30);
myFunction(120, 'expressway');
function myFunction(speed, typeOfRoad = 'city'){
    const CITY_SPEED_LIMIT = 50;
    const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
    const HIGHWAY_SPEED_LIMIT = 140;
    switch(typeOfRoad) {
        case 'city':
            if(speed <= CITY_SPEED_LIMIT) {
                document.write('Miasto: jedziesz prawidlowo');
            } else {
                document.write('Miasto: przekroczyles prędkość');
            }
            document.write('<br />');
        break;
        case 'expressway':
            if(speed <= TWO_LANE_EXPRESSWAY_SPEED_LIMIT){
                document.write('Eska: jedziesz prawidlowo');
            } else {
                document.write('Eska: przekroczyles prędkość');
            }
            document.write('<br />');
        break;
        case 'highway':
            if(speed <= HIGHWAY_SPEED_LIMIT){
                document.write('Autostrada: jedziesz prawidlowo');
            } else {
                document.write('Autostrada: przekroczyles prędkość');
            }
            document.write('<br />');
        break;
    }
}