// 2# Napisz funkcję, która przyjmuje dwa parametry - firstName oraz lastName, a następnie zwraca inicjały rozdzielone kropką, zwrócony string powinien składać się z wielkich liter.

var  firstName = 'Kasia',
     lastName = 'Nagel';

function GetInitials(firstName, lastName) {
    return  firstName.slice(0,1) + '.' + lastName.slice(0, 1);
}
console.log(GetInitials(firstName, lastName));