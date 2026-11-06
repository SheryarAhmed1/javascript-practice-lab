const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
        answer: "Tokyo"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = '';

let questionContainer = document.querySelector('#question-container');
function showQuestion() {
    // 1. Clear container every time so that old questions and options rae removed
    questionContainer.innerHTML = '';

    if (currentQuestionIndex >= quizData.length) {
        questionContainer.innerHTML = `
            <h2 class="text-xl font-bold mb-3 text-center">Quiz Completed!</h2>
            <p class="text-center mb-4">Your Score: ${score} / ${quizData.length}</p>
            <button id="restart-btn" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full">Restart Quiz</button>
        `;

        // Restart button logic
        document.querySelector('#restart-btn').addEventListener('click', function () {
            currentQuestionIndex = 0;
            score = 0;
            selectedOption = '';
            showQuestion();
        });
        return;
    }

    // 2. Creating Question element
    let qElement = document.createElement('p');
    qElement.className = 'font-bold mb-4 text-gray-800';
    qElement.textContent = quizData[currentQuestionIndex].question;
    questionContainer.appendChild(qElement);

    // 3.Displaying options using loop
    quizData[currentQuestionIndex].options.forEach(function (optText) {
        let opt = document.createElement('div');
        opt.className = 'border p-2 bg-gray-100 rounded-md mb-2 cursor-pointer hover:bg-gray-200 text-center transition-all';
        opt.textContent = optText;

        //When user click on any option
        opt.addEventListener('click', function () {
            document.querySelectorAll('#question-container div').forEach(function (item) {
                item.classList.remove('bg-blue-200', 'border-blue-500');
            });

            opt.classList.add('bg-blue-200', 'border-blue-500');
            selectedOption = optText;
        });

        questionContainer.appendChild(opt);
    });

    // 4.Creating Submit Button
    let submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit Answer';
    submitBtn.className = 'mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg transition-all';

    questionContainer.appendChild(submitBtn);

    // 5. Submit Button Click Event
    submitBtn.addEventListener('click', function () {
        if (selectedOption === '') {
            alert('Please select any option before submitting!');
            return;
        }

        if (selectedOption === quizData[currentQuestionIndex].answer) {
            score++;
            console.log('Correct Answer!');
        } else {
            console.log('Wrong Answer!');
        }
        currentQuestionIndex++;
        selectedOption = '';
        showQuestion();
    });
}
showQuestion();