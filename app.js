$(() => {
const answer = ["Dash", "Buddy", "Momo","Bella","Coco"]
const player = []

const shuffle = answer.sort(() => Math.random()- 0.5)
console.log(shuffle);

let compare = () => {
    for (let i = 0; i < 5; i++){
    if (shuffle[i] === player[i]){
    console.log("Yes");
    } else if(shuffle.some( a => a === player[i])){
        console.log("Answer is close");
    } else if(a => a !== player[i])
    console.log("no"); 
 }
}
compare();
const logo = $('<h1>').text("Who\'s Back Game")
$('body').prepend(logo);

const firstPage = () => {
        $('.page1').show();
        $('.page2').hide();
        $('.page5').hide();
        $('.page6').hide();
}
$('body').append(firstPage());


const play = $('<button>').text("I want to help").addClass("start");
$('.page1').append(play);
const handlerPlay = () => {
        $('.page1').hide();
        $('.page2').show();
        $('.page5').hide();
        $('.page6').hide();
 }
$('.start').on('click', handlerPlay);


const knockKnock = $('<button>').text("Knock Knock").addClass("try1");
$('.page2').append(knockKnock);

$("#dashTreat") .on ('change', () => {
    let value = $("#dashTreat").val();
    player.push(value);

})
$("#buddyTreat").on ('change', () => {
    let value = $("#buddyTreat").val();
    player.push(value);

})
$("#momoTreat").on ('change', () => {
    let value = $("#momoTreat").val();
    player.push(value);

})
$("#cocoTreat").on ('change', () => {
    let value = $("#cocoTreat").val();
    player.push(value);

})
const hint =() => {
compare();
}
 $('.try1').on('click', hint);
 console.log(shuffle);
 console.log(player);
});