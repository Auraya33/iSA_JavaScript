//Napisz funkcję, która generuje losową liczbę, zaokrągloną do dwóch liczb po przecinku a następnie zwraca stringa "Twoja szczęśliwa liczba to: TUTAJ_TA_LOSOWA_LICZBA"

function randomNumber() {
    return 'Twoja szczęśliwa lczba to: ' + Math.ceil(Math.random()* 10 * 100 )/100;

}
console.log(randomNumber());

