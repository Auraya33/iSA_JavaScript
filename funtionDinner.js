//Napraw bugi we funkcji oraz popraw formatowanie nazewnictwa. Funkcja powinna zwrocić sumę tip i price

// Function get_dinner_price {
//     tip: '20';
//     tip + price;
//     var price = 100;
// }
// get_dinner_price();

//musi zwrócić liczbę o wartości 120 (100 + 20)

var tip = 20,
    price = 100;

function getDinnerPrice() {
    return 'Amount: ' + (tip + price);
}

console.log(getDinnerPrice());
