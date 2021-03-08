$(() => {
const logo = $('<h1>').text("Who\'s Back Game")
$('body').prepend(logo);


let game = {
    answer : ["Dash", "Buddy", "Momo"],
    player : ["Buddy"]
}

const dashButton = $('<button>').text("Dash");
$('.page2').append(dashButton).addClass('dashbtn');
console.log(dashButton);
const buddyButton = $('<button>').text("Buddy").addClass('button_bubbybtn');;
$('.page2').append(buddyButton);
const momoButton = $('<button>').text("Momo").addClass('button_momobtn');;
$('.page2').append(momoButton);

// const test = () => {
//     if (game.player[0] === game.answer[1]){
//     console.log("Yes");
// } else {
//     console.log("no");
// }
// }
// test();

const compare0 = () =>{
    for (let i = 0; i < game.answer.length; i++) { 
        if (i % 3 = 0) {

        }
if ( game.player[0] !== game.answer [0] || [1] || [2]){
    return;
}else if(game.player[0] === game.shuffle[0]){
    console.log("Yes");
} else {
    console.log("Answer is close");
}
}
}

compare0();
// const hint1 = $('<h3>').text(compare0());
// const shuffle = game.answer.sort(() => Math.random()- 0.5)

// const input = () => {
// for (let i = 0; i < 3; i++) {
//     if (game.shuffle[i] === game.player[i]) {
//        return input.innerHTML = "Yes";
//     } else if (game.player[i] !== game.shuffle.some()) {
//         return;
//     } else {
//         return input.innerHTML = "Answer is close";
//     }
// }
// const hintText = $('<h3>').text(input())
// $('#firstAttempt').append(hintText);
// } // [i] should be a number represented by either 0/1/2
// // any should be captured all 3 iput 0 | 1 | 2
// addEventListener.on('click'.push());
// const kennel = 
// $('#firstAttempt').append(kennel)
// const kennelShape = 

// // kennelShape.setAttribute("src", "https:")
// // kennel.appendChild(kennelShape);



// document.getElementById("playerSelection").onclick = function () {
//     Element.value = sel.value; 
// }

// Event.preventDefault()
// }
})