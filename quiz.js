let allQuestions = [

    {
        question: "Q1: Which is the longest river in Pakistan?",
        options: ["Chenab", "Ravi", "Indus", "Jhelum"],
        correctAnswer: "Indus"
    },
    {
        question: "Q2: Which is the oldest university in Pakistan?",
        options: ["Punjab University", "Karachi University", "LUMS", "NUST"],
        correctAnswer: "Punjab University"
    },
    {
        question: "Q3: What is the national bird of Pakistan?",
        options: ["Peacock", "Chakor", "Parrot", "Sparrow"],
        correctAnswer: "Chakor"
    },
    {
        question: "Q4: Where is the Badshahi Mosque located?",
        options: ["Islamabad", "Multan", "Lahore", "Karachi"],
        correctAnswer: "Lahore"
    },
];



let questionPrint = document.getElementById('questionprint');
let answerGroup = document.querySelectorAll('.answerbuttonsgroup button');
let nextbutton = document.querySelector('.submitanswer');

let currIndex = 0;
let score = 0;

const addquestion = (index) => {

    questionPrint.innerText = allQuestions[index].question;

    answerGroup.forEach((ans, i) => {
        ans.innerText = allQuestions[index].options[i];
    });

}

answerGroup.forEach(saveanswer => {

    saveanswer.addEventListener("click", () => {
        let scoreShow = allQuestions[currIndex].correctAnswer;
        if (saveanswer.innerText === scoreShow) {
            score += 25;
            console.log(score + " 100");

        } else {
            console.log(score + " 100");

        }
        saveanswer.classList.add('buttonsstyle');
    });
});

addquestion(currIndex);

nextbutton.addEventListener('click', () => {
    currIndex++;

    if (currIndex < allQuestions.length) {
        addquestion(currIndex);
    };
});













