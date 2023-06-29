// Define an array of capital city questions and answer choices
var quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Marseille", "Bordeaux", "Nice"],
    answer: 0
  },
  {
    question: "What is the capital of Germany?",
    options: ["Germany", "copenhagen", "Berlin","Hambourg"],
    answer: 2
  },
  {
    question: "What is the capital of Italy?",
    options: ["Nice", "venice", "Rome","Florence"],
    answer: 2
  },
	{
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Beijing", "Seoul","Honk Kong"],
        answer: 0
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra","Austalia"],
        answer: 2
      },
	{
        question: "What is the capital of Spain?",
        options: ["Barcelone", "Madrid", "Valence", "Gibraltar"],
        answer: 1
      },
	{
        question: "What is the capital of United Arab Emirates?",
        options: ["UAE", "Burj Khalifa", "Dubai","Abou Dabi"],
        answer: 3
      },
	{
        question: "What is the capital of Saudi Arabia?",
        options: ["jeddah", "Riyadh", "Mecca", "Al-Madinah"],
        answer: 1
      },
	{
        question: "What is the capital of Mauritania?",
        options: ["Atar", "Kiffa", "Nouakchott", "Nouadhibou"],
        answer: 2
      },
	{
        question: "What is the capital of Tchad?",
        options: ["Moundou", "Sarh", "N'Djamena", "Abeche"],
        answer: 2
      }
];

var currentQuestion = 0;
var score = 0;
 var timerSeconds = 20
    var timerInterval;

// Get references to HTML elements
var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var submitButton = document.getElementById("submit");
var scoreElement = document.getElementById("score");
var timerElement = document.getElementById("timer");


// Display the current question and answer choices
function displayQuestion() {
  var currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;

  optionsElement.innerHTML = "";
  for (var i = 0; i < currentQuizData.options.length; i++) {
    var option = document.createElement("div");
    option.className = "option";
    option.textContent = currentQuizData.options[i];
    option.setAttribute("data-index", i);
    option.addEventListener("click", selectOption);
    optionsElement.appendChild(option);
  }
}

// Handle option selection
function selectOption(event) {
  var selectedOption = event.target;
  var selectedOptionIndex = parseInt(selectedOption.getAttribute("data-index"));

  var currentQuizData = quizData[currentQuestion];
  if (selectedOptionIndex === currentQuizData.answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    showScore();
  }
}

// Show the final score
function showScore() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  submitButton.style.display = "none";
  scoreElement.textContent = "Quiz completed! Your score is " + score + " out of " + quizData.length + "."+"                         "+"Thank you for Participation";
}
function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timerSeconds--;
  timerElement.textContent = "Time remaining: " + timerSeconds + "s";

  if (timerSeconds <= 0) {
    clearInterval(timerInterval);
    showScore();
  }
}

// Event listener for submit button click
submitButton.addEventListener("click", selectOption);




// Handle option selection
function selectOption(event) {
  var selectedOption = event.target;
  var selectedOptionIndex = parseInt(selectedOption.getAttribute("data-index"));

  var currentQuizData = quizData[currentQuestion];
  if (selectedOptionIndex === currentQuizData.answer) {
    score++;
  }

  // Apply styling to selected option
  var options = optionsElement.getElementsByClassName("option");
  for (var i = 0; i < options.length; i++) {
    options[i].removeEventListener("click", selectOption);
    if (i === selectedOptionIndex) {
      if (i === currentQuizData.answer) {
        options[i].style.color = "green"; // Set text color to green for correct answer
      } else {
        options[i].style.color = "red"; // Set text color to red for incorrect answer
      }
    }
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    setTimeout(() => {
      displayQuestion();
    }, 100); // Delay display of next question for 1 second
  } else {
    setTimeout(() => {
      showScore();
    }, 1000); // Delay showing the final score for 1 second
  }
}
function showScore() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  submitButton.style.display = "none";

  scoreElement.textContent = "Quiz completed! Your score is " + score + " out of " + quizData.length + "." + " Thank you for Participation";

  if (score >= 7 && score <= 10) {
    scoreElement.style.color = "green"; // Set text color to green for scores between 7 and 10
    scoreElement.textContent="Good"+":"+"Quiz completed! Your score is " + score + " out of " + quizData.length + "." + " Thank you for your Participation";
  } else if (score >= 4 && score <= 6) {
    scoreElement.style.color = "#fb8500"; // Set text color to orange for scores between 4 and 6
    scoreElement.textContent="medium"+":"+"Quiz completed! Your score is " + score + " out of " + quizData.length + "." + " Thank you for your Participation";
  } else if (score >= 0 && score <= 3) {
    scoreElement.style.color = "red"; // Set text color to red for scores between 0 and 3
    scoreElement.textContent="Repeat!"+":"+"Quiz completed! Your score is " + score + " out of " + quizData.length + "." + " Thank you for your Participation";
  }
}
// Start the quiz
displayQuestion();
startTimer();
