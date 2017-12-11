// 2# Napisz funkcję, która przyjmuje dwa parametry - firstName oraz lastName, a następnie zwraca inicjały rozdzielone kropką, zwrócony string powinien składać się z wielkich liter.

var  firstName = 'kasia',
     lastName = 'nagel';

function GetInitials(firstName, lastName) {
    return  firstName.slice(0,1).toUpperCase() + '.' + lastName.slice(0, 1).toUpperCase();
}
console.log(GetInitials(firstName, lastName));