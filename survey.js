const readline = require('readline');
const answerArr = [];
const questions = [
  "What's your name? Nicknames are also acceptable",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const askQuestion = function(index) {

  if (index >= questions.length) {
    printAnswers(answerArr);
    return;
  }

  const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
  });


  console.log(`Question ${index + 1}: ${questions[index]}`);

  rl.question('', (answer) => {
    answerArr.push(answer);
    rl.close();

    askQuestion(index + 1);
  });

};

const printAnswers = function(answerArr) {

  console.log(`${answerArr[0]} loves ${answerArr[1]}, and listening to ${answerArr[2]} while doing it! Enjoys eating ${answerArr[3]} the most, and ${answerArr[4]} for it, loves ${answerArr[5]} over any sport, and has a self-described superpower of ${answerArr[6]}.`);

};
askQuestion(0);



