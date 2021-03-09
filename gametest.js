const answer = ["Dash", "Buddy", "Momo"]
const player = ["Eleanor","funny", "Dash"]

// const hint = () => { 
let compare = () => {
    for (let i = 0; i < 3; i++){
    if (answer[i] === player[i]){
    console.log("Yes");
    } else if(answer.some( a => a === player[i])){
        console.log("Answer is close");
    } else if(a => a !== player[i])
    console.log("no"); 
 }
}
// }
//  const hint = player.map(e => {
//     return compare();
// })
 
compare();
//  console.log(compare());




// numCheck();
// let compare0 = () =>{
//     if (answer[0] === player[0]){
//     return "Yes";
//     } else if(answer.some( a => a === player[0])){
//     return "Answer is close";
//     } else if(a => a !== player[0]){
//     return "no";
// }
// }


// const playerArray = () => { 
//    return player.length;
// }
// console.log(compare0());
