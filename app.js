$(() => {
    const answer = ["Dash", "Buddy", "Momo", "Bella", "Coco", "Goofy", "Bob", "Tiny"]
    const player = []

    const shuffle = answer.sort(() => Math.random() - 0.5)
    console.log(shuffle);

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



    $(".firstTry").on("change", (event) => {
        let value = $(event.target).val();
        player.push(value);
    })


    // $(".secondTry").on("change", (event) => {
    //     let value = $(event.target).val();
    //     player.push(value);
    // })

    // $(".thirdTry").on("change", (event) => {
    //     let value = $(event.target).val();
    //     player.push(value);
    // })


    // $(".fourthTry").on("change", (event) => {
    //     let value = $(event.target).val();
    //     player.push(value);
    // })

    // $(".fifthTry").on("change", (event) => {
    //     let value = $(event.target).val();
    //     player.push(value);
    // })
    const compare = () => {
        let playerGuess = []
        for (let i = 0; i < 4; i++ && i % 4 === 0) {
            if (shuffle[i] === player[i]) {
                playerGuess.push("Yes");
            } else if (shuffle.some(a => a === player[i])) {
                playerGuess.push("Answer is close");
            } else {
                playerGuess.push("No");
            }
        } return playerGuess;
    }
   
// let window =[]
// $.each($(".hint1").children, function(element){
//     window.push($(this));
// });
// $(".hint1").children.each=()=>{
//         window.push($(this));
// }
// console.log(window);
    const hint = () => {
    //     let window =[]
    //     $.each($(".hint1").children, function(element){
    // window.push($(this));
    //    });
    //     let yes = "Yes"
    //     let maybe = "Answer is close"
    //     if(yes === true) {
    //         $(".hint1").children[i].style.backgroundColor = "deepskyblue";
    //     } else if (maybe === true) {
    //         $(".hint1").children[i].style.backgroundColor = "hotpink";
    //     } else{
    //         return;
    //     }
        let showHint = $("<h4>").text(compare())
        $("#window1").append(showHint)
        if (compare().filter(el => el !== "Yes","Yes", "Yes", "Yes")) {
            $('.try1').hide();
            $('.page2').show();
            $('.page3').show();
            $('.page1').hide();
            $('.page3').hide();
            $('.page4').hide();
            $('.page5').hide();
            $('.page6').hide();
            $('.page7').hide();
            
        } else {
            $('.page8').hide();
            $('.page8').show();
            $('.page1').hide();
            $('.page2').hide();
            $('.page3').hide();
            $('.page4').hide();
            $('.page5').hide();
            $('.page6').hide();
            $('.page7').hide();
        }
    console.log(compare());
    }

    $('.try1').on('click', hint);

    const lastPage = $('<button>').text("Knock Knock Last").addClass("lastPage");
    $('.page6').append(lastPage);
    const handlerFinal = () => {
        if (hint === ["Yes", "Yes,", "Yes"]) {
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


    console.log(player);
});