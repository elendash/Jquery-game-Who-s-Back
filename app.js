$(() => {
    const answer = ["Dash", "Buddy", "Momo", "Bella", "Coco", "Goofy", "Bob", "Tiny"]
    let player = []

    const shuffle = answer.sort(() => Math.random() - 0.5)
    console.log(shuffle);

    // const logo = $('<h1>').text("Who\'s Back Game")
    // $('body').prepend(logo);

    const firstPage = () => {
        $('.page1').show();
        $('.page2').hide();
        $('.page7').hide();
        $('.page8').hide();
        $('.try1').hide();
        $('.page2').hide();
        $(".secondTry").hide();
        $('.try2').hide();
        $('.try3').hide();
        $('.try4').hide();
        $('.try5').hide();
        $(".thirdTry").hide();
        $(".fourthTry").hide();
        $(".fifthTry").hide();
        $(".hint2").hide();
        $(".hint3").hide();
        $(".hint4").hide();
        $(".hint5").hide();
        $('.page7').hide();
    }
    $('body').append(firstPage());


    const play = $('<button>').text("I want to help").addClass("start");
    $('.page1').append(play);
    const handlerPlay = () => {
        $('.page1').hide();
        $('.page2').show();
        $('.page7').hide();
        $('.page8').hide();
        $('.try1').show();
        $(".secondTry").hide();
        $('.try2').hide();
        $('.try3').hide();
        $('.try4').hide();
        $('.try5').hide();
        $(".thirdTry").hide();
        $(".fourthTry").hide();
        $(".fifthTry").hide();
        $(".hint2").hide();
        $(".hint3").hide();
        $(".hint4").hide();
        $(".hint5").hide();
    }
    $('.start').on('click', handlerPlay);


    const knockKnock = $('<button>').text("Knock Knock").addClass("try1");
    $('.page2').append(knockKnock);
    const knockKnock1 = $('<button>').text("Knock Knock").addClass("try2");
    $('.page2').append(knockKnock1);
    const knockKnock2 = $('<button>').text("Knock Knock").addClass("try3");
    $('.page2').append(knockKnock2);
    const knockKnock3 = $('<button>').text("Knock Knock").addClass("try4");
    $('.page2').append(knockKnock3);
    const knockKnock4 = $('<button>').text("Knock Knock").addClass("try5");
    $('.page2').append(knockKnock4);



    $(".firstTry").on("change", (event) => {
        let value = $(event.target).val();
        player.push(value);
    })


    $(".secondTry").on("change", (event) => {
        let player=[];
        let value = $(event.target).val();
        player.push(value);
    })

    $(".thirdTry").on("change", (event) => {
        let player=[];
        let value = $(event.target).val();
        player.push(value);
    })


    $(".fourthTry").on("change", (event) => {
        let player=[];
        let value = $(event.target).val();
        player.push(value);
    })

    $(".fifthTry").on("change", (event) => {
        let player=[];
        let value = $(event.target).val();
        player.push(value);
    })
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
   

    const hint = () => {    
    let showHint = $("<h4>").text(compare())
    $("#window1").append(showHint)
let ans = ["Yes", "Yes", "Yes", "Yes"]
let ansB = compare()
    if (JSON.stringify(ans) === JSON.stringify(ansB)){
        console.log("hello");
        $('.page8').show();
        $('.page1').hide();
        $('.page2').hide();
        $('.page7').hide();
    }else {
        $("#instructions").hide();
        $('.try1').hide();
        $('.page2').show();
        $(".secondTry").show();
        $('.try2').show();
        $('.try3').hide();
        $('.try4').hide();
        $('.try5').hide();
        $(".thirdTry").hide();
        $(".fourthTry").hide();
        $(".fifthTry").hide();
        $(".hint2").hide();
        $(".hint3").hide();
        $(".hint4").hide();
        $(".hint5").hide();
        $('.page7').hide();
    }
    console.log(compare());
    }
    const hint1 = () => {    
        let showHint = $("<h4>").text(compare())
        $("#window1").append(showHint)
    let ans = ["Yes", "Yes", "Yes", "Yes"]
    let ansB = compare()
        if (JSON.stringify(ans) === JSON.stringify(ansB)){
            console.log("hello");
            $('.page8').show();
            $('.page1').hide();
            $('.page2').hide();
            $('.page7').hide();
        }else {
            $("#instructions").hide();
            $('.try1').hide();
            $('.page2').show();
            $(".secondTry").show();
            $('.try2').hide();
            $('.try3').show();
            $('.try4').hide();
            $('.try5').hide();
            $(".thirdTry").show();
            $(".fourthTry").hide();
            $(".fifthTry").hide();
            $(".hint2").hide();
            $(".hint3").hide();
            $(".hint4").hide();
            $(".hint5").hide();
            $('.page7').hide();
        }
        console.log(compare());
        }
        const hint2 = () => {    
            let showHint = $("<h4>").text(compare())
            $("#window1").append(showHint)
        let ans = ["Yes", "Yes", "Yes", "Yes"]
        let ansB = compare()
            if (JSON.stringify(ans) === JSON.stringify(ansB)){
                console.log("hello");
                $('.page8').show();
                $('.page1').hide();
                $('.page2').hide();
                $('.page7').hide();
            }else {
                $("#instructions").hide();
                $('.try1').hide();
                $('.page2').show();
                $(".secondTry").show();
                $('.try2').hide();
                $('.try3').hide();
                $('.try4').show();
                $('.try5').hide();
                $(".thirdTry").show();
                $(".fourthTry").show();
                $(".fifthTry").hide();
                $(".hint2").hide();
                $(".hint3").hide();
                $(".hint4").hide();
                $(".hint5").hide();
                $('.page7').hide();
            }
            console.log(compare());
            }
            const hint3 = () => {    
                let showHint = $("<h4>").text(compare())
                $("#window1").append(showHint)
            let ans = ["Yes", "Yes", "Yes", "Yes"]
            let ansB = compare()
                if (JSON.stringify(ans) === JSON.stringify(ansB)){
                    console.log("hello");
                    $('.page8').show();
                    $('.page1').hide();
                    $('.page2').hide();
                    $('.page7').hide();
                }else {
                    $("#instructions").hide();
                    $('.try1').hide();
                    $('.page2').show();
                    $(".secondTry").show();
                    $('.try2').hide();
                    $('.try3').hide();
                    $('.try4').hide();
                    $('.try5').show();
                    $(".thirdTry").show();
                    $(".fourthTry").show();
                    $(".fifthTry").show();
                    $(".hint2").show();
                    $(".hint3").show();
                    $(".hint4").show();
                    $(".hint5").hide();
                    $('.page7').hide();
                }
                console.log(compare());
                }
                    const hint4 = () => {    
                        let showHint = $("<h4>").text(compare())
                        $("#window1").append(showHint)
                    let ans = ["Yes", "Yes", "Yes", "Yes"]
                    let ansB = compare()
                        if (JSON.stringify(ans) === JSON.stringify(ansB)){
                            console.log("hello");
                            $('.page8').show();
                            $('.page1').hide();
                            $('.page2').hide();
                            $('.page7').hide();
                        }else {
                             
                            $('.page8').show();
                            $('.page1').hide();
                            $('.page2').hide();
                            $('.page7').hide();
                        }
                        console.log(compare());
                        }        
    $('.try1').on('click', hint);
    $('.try2').on('click', hint1);
    $('.try3').on('click', hint2);
    $('.try4').on('click', hint3);
    $('.try5').on('click', hint4);

    const refresh = $('<button>').text("Play again!").addClass("refresh");
    $('.page8').append(refresh);
    const handlerRefresh = () => {
        location.reload();
    }
    $('.refresh').on('click', handlerRefresh);


    console.log(player);
});