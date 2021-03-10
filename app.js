$(() => {
const answer = ["Dash", "Buddy", "Momo","Bella","Coco", "Goofy", "Bob", "Tiny"]
const player = []

const shuffle = answer.sort(() => Math.random()- 0.5)
console.log(shuffle);

let compare = () => {
    for (let i = 0; i < 5; i++){
    if (shuffle[i] === player[i]){
    console.log("Yes");
    } else if(shuffle.some( a => a === player[i])){
        console.log("Answer is close");
    } else{
    console.log("No"); 
 }
}
}
compare();
const logo = $('<h1>').text("Who\'s Back Game")
$('body').prepend(logo);

const firstPage = () => {
        $('.page1').show();
        $('.page2').hide();
        $('.page3').hide();
        $('.page4').hide();
        $('.page5').hide();
        $('.page6').hide();
        $('.page7').hide();
        $('.page8').hide();
}
$('body').append(firstPage());


const play = $('<button>').text("I want to help").addClass("start");
$('.page1').append(play);
const handlerPlay = () => {
    $('.page1').hide();
    $('.page2').show();
    $('.page3').hide();
    $('.page4').hide();
    $('.page5').hide();
    $('.page6').hide();
    $('.page7').hide();
    $('.page8').hide();
}
$('.start').on('click', handlerPlay);


const knockKnock = $('<button>').text("Knock Knock").addClass("try1");
$('.page2').append(knockKnock);


$("#treat1") .on ('change', () => {
    let value = $("#treat1").val();
    player.push(value);

})
$("#treat2").on ('change', () => {
    let value = $("#treat2").val();
    player.push(value);

})
$("#treat3").on ('change', () => {
    let value = $("#treat3").val();
    player.push(value);

})
$("#treat4").on ('change', () => {
    let value = $("#treat4").val();
    player.push(value);

})
const hint =() => {
compare();
}
 $('.try1').on('click', hint);

const lastPage = $('<button>').text("Knock Knock Last").addClass("lastPage");
$('.page6').append(lastPage);
const handlerFinal = () => {
    if(hint === ["Yes", "Yes,", "Yes"]){
        $('.page8').show(); 
        $('.page7').hide();
       } else {
        $('.page7').show();
        $('.page8').hide();
       }
    $('.page1').hide();
    $('.page2').hide();
    $('.page3').hide();
    $('.page4').hide();
    $('.page5').hide();
    $('.page6').hide();
   
 }
$('.lastPage').on('click', handlerFinal);

const refresh = $('<button>').text("Play again!").addClass("refresh");
$('.page8').append(refresh);
const handlerRefresh = () => {
        location.reload();     
 }
$('.refresh').on('click', handlerRefresh);

 console.log(shuffle);
 console.log(player);
});