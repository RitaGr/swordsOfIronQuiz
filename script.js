// an array of objects that include the question truth or false, answer - as what the correct answer is and the response. executed once wrong choice (truth or false) was picked by the user
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

document.getElementById("questionText").innerHTML = questions[3].question;


// testing color design options and application responce to correct/incorrect answer by the user

// const btnCheckTrue = document.getElementById('checkTrue');
// const backgroundColor = document.getElementById('backgroundColor');

// const wrapperBackgroundColor = document.getElementById('wrapper');
// btnCheckTrue.addEventListener('click', function onClick() {
//     backgroundColor.style.backgroundColor = '#d7ffb8';
//     wrapperBackgroundColor.style.backgroundColor = '#89c947'
// });