var readlineSync = require('readline-sync');
var score = 0;

var highScores = [{
  name:"Vicky",
  score: 5
},{
  name:"nishi",
  score: 4
}];

function welcome(){
  userName = readlineSync.question("What is your name? ");
  console.log("Welcome " + userName + " do you know me");
}

var qna = [{question:"What is my name? ",
       answer: "vikrant"},{question:"Is my age greater than 25?  ",
       answer: "yes"},{question:"Where do I live? ",
       answer: "uran"},{question:"What is my favourite anime? ",
       answer: "naruto"},{question:"Where do I work? ",
       answer: "zetwork"}]

function quiz(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    score = score + 1;
    console.log("You are right");
  }else{
    console.log("You are wrong");
  }
  console.log("Your score is: " + score);
  
}

welcome();

for(var i=0;i<qna.length;i++){
  var question = qna[i].question;
  var answer = qna[i].answer;
  quiz(question,answer);
}

function highScore(){
  console.log("You scored " + score);
  console.log("Check the high score below, if you have scored more than that then send me screenshot of your score");
  for(var i=0;i<highScores.length;i++){
    console.log(highScores[i].name + " : " + highScores[i].score)
  }
}

highScore();