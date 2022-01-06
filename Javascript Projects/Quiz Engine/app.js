const questions = [
    {
        question: "Who was the first President of the United States?",
        answer1: "George Washington",
        answer2: "Thomas Jefferson",
        answer3: "Thomas Edison",
        answer4: "I don't know",
        trueAnswer: "George Washington"
    },
    {
        question: "What is the answer to the Ultimate Question of Life, the Universe, and Everything?",
        answer1: "Pi",
        answer2: "42",
        answer3: "Wah",
        answer4: "I don't know",
        trueAnswer: "42"
    },
    {
        question: "Do you love to code?",
        answer1: "No",
        answer2: "Yes",
        answer3: "Hell Yeah",
        answer4: "No",
        trueAnswer: "Hell Yeah"
    },
    {
        question: "What's the best programming language?",
        answer1: "Javascript",
        answer2: "C#",
        answer3: "PHP",
        answer4: "Python",
        trueAnswer: "Javascript"
    },
    {
        question: "Is Jason Chan Awesome?",
        answer1: "Yes",
        answer2: "No",
        answer3: "Maybe",
        answer4: "He's okay",
        trueAnswer: "Yes"
    }
]

let questionForm = document.querySelector('#questionForm')
let points = document.querySelector('#points')
let questionTitle = document.querySelector('.questionTitle')
let questionCounter = document.querySelector('#questionCounter')
let answer1 = document.querySelector('#answer1')
let answer2 = document.querySelector('#answer2')
let answer3 = document.querySelector('#answer3')
let answer4 = document.querySelector('#answer4')

let score = 0
let counter = 0
let numOfQuestion = questions.length

const wrapper = document.getElementById('wrapper');

function showQuestion(counter) {
    questionTitle.innerHTML = questions[counter].question;
    answer1.innerHTML = questions[counter].answer1;
    answer2.innerHTML = questions[counter].answer2;
    answer3.innerHTML = questions[counter].answer3;
    answer4.innerHTML = questions[counter].answer4;
}

function calculateScore(counter, text) {
    console.log(counter, text, questions[counter].trueAnswer) 
    if(text == questions[counter].trueAnswer) {
        score += 1;
    }
}

function showQuestionCounter (counter) {
    questionCounter.innerHTML = `Question ${counter+1} of ${numOfQuestion}`
}

showQuestion(counter);
showQuestionCounter(counter);

wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }  

    if(counter + 1 == numOfQuestion)
    {
        calculateScore(counter, event.target.innerHTML)
        points.innerHTML = `Your score is: ${score}`

        questionForm.style.display = "none";
        points.style.display = "block";
    } 
    else {
        calculateScore(counter, event.target.innerHTML)
        counter += 1;
        showQuestion(counter);
        showQuestionCounter(counter);
    }
})