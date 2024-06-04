const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
            
        ]
    },
    {
        question:  "What is the tallest mountain in the world?",
        answers: [
        {text: "Mount Everest", correct: true},
        {text: "K2", correct: false},
        {text: "Kangchenjunga", correct: false},
        {text: "Lhotse", correct: false},
        ]
    },
    {
        question:" Which planet is known as the Red Planet?",
        answers: [
        {text: "Mars", correct: true},
        {text: "Venus", correct: false},
        {text: "Earth", correct: false},
        {text: "Jupiter", correct: false},
        ]
    },
    {
         
        question: "What is the capital of France?",
        answers: [
        {text: "Paris", correct: true},
        {text: "London", correct: false},
        {text: "Berlin", correct: false},
        {text: "Rome", correct: false},
        ]
    },
    {
          
        question:  "What is the name of the world's largest ocean?",
        answers: [
        {text: "Pacific Ocean", correct: true},
        {text: "Atlantic Ocean", correct: false},
        {text: "Indian Ocean", correct: false},
        {text: "Arctic Ocean", correct: false},
        ]
    },
    {
         
        question:  "Which is the world's longest river?",
        answers: [
        {text: "Nile River", correct: true},
        {text: "Amazon River", correct: false},
        {text: "Yangtze River", correct: false},
        {text: "Yellow River", correct: false},
        ]
         },
         {
            
        question: " What is the hardest natural substance on Earth?",
        answers: [
        {text: "Diamond", correct: true},
        {text: "Gold", correct: false},
        {text: "Sapphire", correct: false},
        {text: "Granite", correct: false},
        ]
         },
         {
            
        
        question:  "What is the chemical symbol for water?",
        answers: [
        {text: "H2O", correct: true},
        {text: "CO2", correct: false},
        {text: "NaCl", correct: false},
        {text: "NH3", correct: false},
        ]
         },
        {
            
        question:  "What is the most common gas in Earth's atmosphere?",
        answers: [
        {text: "Nitrogen", correct: true},
        {text: "Oxygen", correct: false},
        {text: "Argon", correct: false},
        {text: "Carbon Dioxide", correct: false},
        ]
     },
    {
        question:  "What is the process by which plants use sunlight to produce food?",
        answers: [
        {text: "Photosynthesis", correct: true},
        {text: "Cellular respiration", correct: false},
        {text: "Transpiration", correct: false},
        {text: "Mitosis", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;        
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display ="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();