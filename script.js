// an array of objects that include the question truth or false, answer - as what the correct answer is and the response. executed once wrong choice (truth or false) was picked by the user
let currentQuestion = 0;
const questions = [{
    "question": '“From the River to the Sea Palestine Will Be Free” is a catch-all phrase symbolizing Palestinian control over the entire territory of Israel\'s borders, from the Jordan River to the Dead Sea',
    "response": "You look so dumb right now...",
    "answer": false
},
{
    "question": "In 1947, the United Nations(UN) adopted a Partition Plan for Mandatory Palestine, which recommended the creation of independent Arab and Jewish states(Also known as the two-state solution. The Partition Plan was accepted by the Arabs but rejected by the Jews",
    "response": "Someone here doesn't want peace, and it's not Israel honey...",
    "answer": false
},
{
    "question": "In a single day, more than 1,000 Israeli civilians and more than 350 Israeli soldiers and police were killed in nearby towns, kibbutzim, military bases and at a music festival near Re'im. Around 200 Israeli civilians and soldiers were taken as hostages to the Gaza Strip of which the number of kidnapped children is slightly under 30.",
    "response": "Hamas is Isis",
    "answer": true
},
{
    "question": "People from 35 countries killed, missing in Israel-Gaza war. A number of them were attending a music festival in the desert in southern Israel when Hamas militants stormed the grounds, shooting and abducting revelers.",
    "response": '"this isn\’t an Israeli challenge only. This is something that concerns many of the free countries of the world.”',
    "answer": true
},
{
    "question": "1 soldier captured in Israel by Palestinian militants, and held for five years was released in exchange for 1,027 Palestinian prisoners on October 18th, 2011.",
    "response": "Still sure Israel doesn't care about its own people?",
    "answer": true
},];

(function(){
    // page initialization code here
    fnReset() // call reset on document ready

    document.getElementById("nextQuestion").addEventListener('click', function(event){
        fnCheck();
    });

    document.getElementById('checkTrue').addEventListener('click', function(event){
        fnCheck(true);
    });
    document.getElementById('checkFalse').addEventListener('click', function(event){
        fnCheck(false);
    });
    document.getElementById('nextQuestion').addEventListener('click', function(event){
        fnNext();
    });
    document.getElementById('resetQuiz').addEventListener('click', function(event){
        fnReset();
    });
})();

function fnReset(){
    document.getElementById('questionResponce').classList.add('hide');
    document.getElementById('nextQuestion').classList.add('hide');
    document.getElementById('container').classList.add('hide');
    document.getElementById('wrapper').classList.remove('hide');
    currentQuestion = 0;
    document.getElementById('questionText').innerHTML = questions[currentQuestion].question;
}
function fnCheck(answer){
    // removing the design classes made for a correct/incorrect answer
    // document.getElementById('questionResponce').classList.remove('correct','incorrect');
    if (questions[currentQuestion].answer === answer){
        // show correct
        document.getElementById('wrapper').classList.add('correct');
        document.getElementById('backgroundColor').classList.add('correctBackground');
        document.getElementById('wrapper').classList.add('truth-text');
        document.getElementById('questionResponce').innerHTML = "Correct!";
    } else {
        // show incorrect
        document.getElementById('wrapper').classList.add('incorrect');
        document.getElementById('backgroundColor').classList.add('incorrectBackground');
        document.getElementById('wrapper').classList.add('false-text');
        document.getElementById('questionResponce').innerHTML = questions[currentQuestion].response;
    }
    document.getElementById('questionResponce').classList.remove('hide');
    document.getElementById('nextQuestion').classList.remove('hide');
    document.getElementById('checkTrue').classList.add('hide');
    document.getElementById('checkFalse').classList.add('hide');
}

function fnNext(){
    document.getElementById('wrapper').classList.remove('correct');
    document.getElementById('backgroundColor').classList.remove('correctBackground');
    document.getElementById('wrapper').classList.remove('truth-text');
    document.getElementById('wrapper').classList.remove('incorrect');
    document.getElementById('backgroundColor').classList.remove('incorrectBackground');
    document.getElementById('wrapper').classList.remove('false-text');
    document.getElementById('checkTrue').classList.remove('hide');
    document.getElementById('checkFalse').classList.remove('hide');
    document.getElementById('questionResponce').classList.add('hide');
    if (currentQuestion < questions.length - 1){
        currentQuestion = currentQuestion + 1;
        document.getElementById('nextQuestion').classList.add('hide');
        document.getElementById('container').classList.add('hide');
    } else {
        document.getElementById('nextQuestion').classList.add('hide');
        document.getElementById('wrapper').classList.add('hide');
        document.getElementById('container').classList.remove('hide');
    }
    document.getElementById('questionResponce').classList.add('hide');
    document.getElementById('questionText').innerHTML = questions[currentQuestion].question;

}


// document.getElementById("questionText").innerHTML = questions[currentQuestion].question;


// testing color design options and application responce to correct/incorrect answer by the user

// const btnCheckTrue = document.getElementById('checkTrue');
// const backgroundColor = document.getElementById('backgroundColor');

// const wrapperBackgroundColor = document.getElementById('wrapper');
// btnCheckTrue.addEventListener('click', function onClick() {
//     backgroundColor.style.backgroundColor = '#d7ffb8';
//     wrapperBackgroundColor.style.backgroundColor = '#89c947'
// });