let readlineSync = require("readline-sync");

let score = 0;

const highscore = [{
   playerName: "siddharth",
   playerScore: 4
 }];

const questions = [{
  q: "What's my favourite dish ? ",
  a: "eggs"
}, {
  q: "Whats my favourites mototrsport? ",
  a: "Formula1"
},
{
  q: "Whats my age? ",
  a: "21"
  
},
{
  q:"What's my answer to life, the universe, and everything? ",
  a:"42"
}];
console.log(`-------------------------`);
let userName = readlineSync.question('May I have your name? ');
console.log(`Hey ${userName}, let's see how well you know me`);
console.log(`-------------------------`);


for (let i = 0; i < questions.length; ++i) {
  let currQ = questions[i];
  let theirAnswer = readlineSync.question(currQ.q);

  if (theirAnswer.toUpperCase() === currQ.a.toUpperCase()) {
    ++score;
    console.log("Correct");
  }
  else {
    console.log("Wrong");
  }
  console.log(`Your score is :${score}`);
  console.log(`-------------------------`);
}

highscore.push({playerName:`${userName}`, playerScore:score});

console.log(`-------------------------`);
console.log(`Highscore:`);
console.log(`-------------------------`);

for(let i=0; i<highscore.length; ++i){
  let currPlayer = highscore[i];
  console.log(`Player:${currPlayer.playerName}  |  Score:${currPlayer.playerScore}`);
}


