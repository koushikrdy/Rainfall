let currentQuestion = 0;
let score = 0;

fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        showQuestion(data);
    })
    .catch(error => console.error('Error:', error));

function showQuestion(questions) {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const submitButton = document.getElementById('submit');
    const resultElement = document.getElementById('result');

    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = '';

    questions[currentQuestion].options.forEach((option, index) => {
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
    });

    submitButton.onclick = () => {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (!selectedOption) {
            alert('Please select an option');
            return;
        }

        const correctAnswer = questions[currentQuestion].answer;
        if (selectedOption.value == correctAnswer) {
            score++;
            resultElement.textContent = 'Correct!';
        } else {
            resultElement.textContent = `Incorrect! The correct answer was ${questions[currentQuestion].options[correctAnswer]}`;
        }

        currentQuestion++;
        if (currentQuestion >= questions.length) {
            resultElement.textContent = `Quiz finished! Your score is ${score} out of ${questions.length}`;
            submitButton.disabled = true;
        } else {
            setTimeout(() => {
                showQuestion(questions);
                resultElement.textContent = '';
            }, 2000);
        }
    };
}
