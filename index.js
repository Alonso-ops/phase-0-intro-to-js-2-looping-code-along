// Code your solutions in this file
const names = ["Sebastian", "Mateo", "Ela"]
function writeCards(names){
    let messages = []
    for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
}return messages;}
function countDown(number = 10 ) {
    for (let i = 10; i >= 0; i--){
        console.log(i);
    }
}