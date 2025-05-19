
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
        {
            question: "Q5: What is the capital city of Pakistan?",
            options: ["Karachi", "Islamabad", "Lahore", "Peshawar"],
            correctAnswer: "Islamabad"
        },
        {
            question: "Q6: Which mountain is the highest peak in Pakistan?",
            options: ["Nanga Parbat", "K2", "Rakaposhi", "Gasherbrum"],
            correctAnswer: "K2"
        },
        {
            question: "Q7: Which is the national flower of Pakistan?",
            options: ["Rose", "Jasmine", "Sunflower", "Lily"],
            correctAnswer: "Jasmine"
        },
        {
            question: "Q8: Who was the founder of Pakistan?",
            options: ["Allama Iqbal", "Liaquat Ali Khan", "Muhammad Ali Jinnah", "Fatima Jinnah"],
            correctAnswer: "Muhammad Ali Jinnah"
        },
        {
            question: "Q9: Which sea borders Pakistan to the south?",
            options: ["Arabian Sea", "Red Sea", "Mediterranean Sea", "Baltic Sea"],
            correctAnswer: "Arabian Sea"
        },
        {
            question: "Q10: What currency is used in Pakistan?",
            options: ["Rupee", "Dollar", "Euro", "Taka"],
            correctAnswer: "Rupee"
        }

    ];

    let questionPrint = document.getElementById('questionprint');
    let answerGroup = document.querySelectorAll('.answerbuttonsgroup button');
    let nextbutton = document.querySelector('.submitanswer button');
    let totalScore = document.getElementById("TotalScore");
    let percentage = document.getElementById('percentage');
    let pageText = document.getElementById('pagetext');


    let currIndex = 0;
    let score = 0;
    pageText.innerText = "Page : " + 1 + ' / 10';

    const addquestion = (index) => {

        questionPrint.innerText = allQuestions[index].question;

        answerGroup.forEach((ans, i) => {
            ans.innerText = allQuestions[index].options[i];
        });

    }

    answerGroup.forEach(saveanswer => {

        saveanswer.addEventListener("click", (e) => {
            let scoreShow = allQuestions[currIndex].correctAnswer;
            let checkAnswer = e.target.innerText;
            if (checkAnswer === scoreShow) {
                return score += 10;
            }
            saveanswer.classList.add('buttonsstyle');;

        });
    });

    addquestion(currIndex);

    nextbutton.addEventListener('click', () => {
        currIndex++;

        if (currIndex < allQuestions.length) {
            addquestion(currIndex);
            pageText.innerText = `Page : ${currIndex + 1} / 10`;
        };
        if (currIndex === 9) {
            let createButton = document.createElement('button');
            createButton.innerText = 'Submit!';
            nextbutton.innerText = createButton.innerText;

        }
        if (currIndex === allQuestions.length) {
            scoreShow()
        };
    });

    const scoreShow = () => {
        totalScore.innerText = `${score} out of ${100} Marks!`;
        let resultPercentage = ((score / 100) * 100);
        percentage.innerText = ` Your Percentage is ${resultPercentage}%`;
    }
    // const animationPercentage = () => {
    //     setTimeout(() => {
    //         let resultPercentage = ((score / 100) * 100);
    //         per = resultPercentage;
    //         scoreShow();

    //     }, 100);
    // };














