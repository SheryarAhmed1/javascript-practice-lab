const quizData = [
    {
        question: "What is the capital of Pakistan",
        options: ["Karachi", "Lahore", "Multan", "Islamabad"],
        answer: "Islamabad"
    },
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
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        answer: "Ottawa"
    },
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = '';

let questionContainer = document.querySelector('#question-container');

questionContainer.className = 'bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg mx-auto flex flex-col transition-all';

function showQuestion() {
    questionContainer.innerHTML = '';

    // --- Quiz Completed Screen ---
    if (currentQuestionIndex >= quizData.length) {
        questionContainer.innerHTML = `
            <div class="text-center py-6">
                <h2 class="text-2xl font-extrabold text-gray-800 mb-2">Quiz Completed! 🎉</h2>
                <p class="text-gray-600 mb-6 text-lg">Your Final Score: <span class="font-bold text-emerald-600">${score}</span> / ${quizData.length}</p>
                <button id="restart-btn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all w-full cursor-pointer">
                    Play Again
                </button>
            </div>
        `;

        document.querySelector('#restart-btn').addEventListener('click', function () {
            currentQuestionIndex = 0;
            score = 0;
            selectedOption = '';
            showQuestion();
        });
        return;
    }

    // --- Question Number & Text ---
    let progressText = document.createElement('span');
    progressText.className = 'text-xs font-semibold uppercase tracking-wider text-indigo-500 mb-1';
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    questionContainer.appendChild(progressText);

    let qElement = document.createElement('h3');
    qElement.className = 'text-xl font-bold text-gray-900 mb-6';
    qElement.textContent = quizData[currentQuestionIndex].question;
    questionContainer.appendChild(qElement);

    // --- Options Wrapper ---
    let optionsWrapper = document.createElement('div');
    optionsWrapper.className = 'flex flex-col gap-3 mb-6';

    quizData[currentQuestionIndex].options.forEach(function (optText) {
        let opt = document.createElement('div');
        opt.className = 'border-2 border-gray-200 p-3.5 rounded-xl bg-gray-50 font-medium text-gray-700 cursor-pointer hover:bg-indigo-50 hover:border-indigo-300 transition-all shadow-sm';
        opt.textContent = optText;

        opt.addEventListener('click', function () {
            optionsWrapper.querySelectorAll('div').forEach(function (item) {
                item.classList.remove('bg-indigo-100', 'border-indigo-600', 'text-indigo-900', 'shadow-md');
                item.classList.add('bg-gray-50', 'border-gray-200', 'text-gray-700');
            });

            opt.classList.remove('bg-gray-50', 'border-gray-200', 'text-gray-700');
            opt.classList.add('bg-indigo-100', 'border-indigo-600', 'text-indigo-900', 'shadow-md');
            selectedOption = optText;
        });

        optionsWrapper.appendChild(opt);
    });

    questionContainer.appendChild(optionsWrapper);

    // --- Submit Button ---
    let submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit Answer';
    submitBtn.className = 'bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all cursor-pointer w-full text-center';

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

    questionContainer.appendChild(submitBtn);
}

showQuestion();