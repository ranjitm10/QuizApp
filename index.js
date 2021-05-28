var readlineSync = require('readline-sync');
const chalk = require('chalk');


const quizQuestion = [
  {
    question: "Which of these IPL franchise was banned for two years?\n a.Gujarat Lions\n b.Chennai Super\n c.Kings Pune Supergiants\n",
    answer: 'b'
  },
  {
    question: "Who was the first Indian captain to hold the IPL trophy?\n a.M.S. Dhoni\n b.Sachin Tendulkar \n c.Anil Kumble\n",
    answer: 'a'
  },
  {
    question: 'Which IPL franchise Indian cricketer Yuvraj Singh has never played for?\n a. Bangalore\n b. Kolkata\n c. Hyderabad\n',
    answer: 'b'
  },
  {
    question:'Who has scored most runs in IPL tournaments?\n a.Virat Kohli\n b.Shane Watson\n c.Suresh Raina\n',
    answer:'a'
  },
  {
    question: "Who was the icon player of Bengaluru's team in the first season of IPL?\n a.Robin Utthappa\n b.Rahul Dravid\n c.Anil Kumble\n",
    answer: 'b'
  },
]


let userScore = 0;

function check(question, answer){
  var userAns = readlineSync.question(question+'\n Enter your answer: ');
  if(userAns === answer.toLowerCase()){
    console.log(chalk.red.bgGreen("Right Answer"));
    userScore += 1;
  }
  else{
    console.log(chalk.black.bgYellow("Wrong Answer"));
    userScore -= 1;
  }
}
var userName = readlineSync.question("Enter your name : ");
console.log(chalk.black.bgWhite(`Welcome! ${userName} to CLI Quiz IPL`));
console.log("Lets see how much do you know about IPL ?");
console.log("Lets start the game...");
for(var i = 0; i < quizQuestion.length; i++) {
	check(quizQuestion[i].question, quizQuestion[i].answer);
console.log("-------------------------------------");
console.log(`Your total score is : ${userScore}`);
console.log("-------------------------------------");
}

