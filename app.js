const answer = ["Dash", "Buddy", "Momo"]
const player = []

const shuffle = answer.sort(() => Math.random()- 0.5)
console.log(shuffle);

let compare = () => {
    for (let i = 0; i < 3; i++){
    if (shuffle[i] === player[i]){
    console.log("Yes");
    } else if(shuffle.some( a => a === player[i])){
        console.log("Answer is close");
    } else if(a => a !== player[i])
    console.log("no"); 
 }
}
$('#isSelect').click = () => {
    playerSelection0.push($('#dashTreat').val());
}
const showHint = $('<h4>').text(compare);
$('.page2').append(showHint);
const handlerAnswer = () => {
    showHint.show();
}
compare();
const playerSelection0 = "x"
player.push(playerSelection0);
const playerSelection1 = "x"
player.push(playerSelection1);
const playerSelection2 = "x"
player.push(playerSelection2);
const playerSelection3 = "x"
player.push(playerSelection3);
console.log(player);

