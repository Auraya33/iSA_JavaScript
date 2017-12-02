
// 1# Napisz funkcję, która przyjmuje trzy parametry - (sender, sms, receiver) a następnie zwraca stringa
//"(FROM: sender) (TO: receiver) (MESSAGE: sms)"

var sender = 'Kasia',
    sms = 'Hello Ania, i am really tired today, i will call you tommorrow',
    receiver = 'Ania';

function MessageInfo(sender, receiver, sms) {
        return '(' + 'FROM: ' + sender + ') ' + '(' + 'TO: ' + receiver + ') ' +  '(' + 'MESSAGE: ' + sms + ')';
}
console.log(MessageInfo(sender, receiver, sms));

