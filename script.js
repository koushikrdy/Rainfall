let currentQuestion = 0;
let score = 0;

const questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Paris", "London", "Rome"], answer: 1 },
    { question: "Which programming language is known as the language of the web?", options: ["Python", "JavaScript", "C++", "Ruby"], answer: 1 },
];

const intro = document.querySelector('.intro');
const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const startQuizButton = document.getElementById('startQuiz');

startQuizButton.addEventListener('click', () => {
    intro.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    showQuestion();
});

function showQuestion() {
    const current = questions[currentQuestion];
    
    questionElement.textContent = current.question;

    optionsElement.innerHTML = '';
    
    current.options.forEach((option, index) => {
        const li = document.createElement('li');
        const radio = document.createElement('input');
        const label = document.createElement('label');

        radio.type = 'radio';
        radio.name = 'option';
        radio.value = index;

        label.textContent = option;

        li.appendChild(radio);
        li.appendChild(label);
        
        optionsElement.appendChild(li);
        
        li.style.animation = 'fadeIn 0.5s ease-in-out';
        
        submitButton.classList.remove('hidden');
        
     });
}

submitButton.addEventListener("click", () => { /*...*/ });
