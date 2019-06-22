
        (function() {
            var myQuestions = [
            {
                question: "What is the name of the boy who owns Buzz Lightyear in the movie Toy Story?",
                answers: {
                    a: "Woody",
                    b: "Andy",
                    c: "Mr. Potato"

                },
                correctAnswer: "b"
            },
          
            {
                question: "Which Disney princess has a raccoon as a sidekick?",
                answers: {
                    a: "Pocahontas",
                    b: "Ariel",
                    c: "Anastasia"
                },
                correctAnswer: "a"
            },
            {
                question: "In the movie Finding Nemo, which country has Nemo been taken to?",
                answers: {
                    a: "India",
                    b: "Japan",
                    c: "Australia"
                },
                correctAnswer: "c"
            },
            {
                question: "What does the crocodile swallow in Peter Pan?",
                answers: {
                    a: "Clock",
                    b: "Hat",
                    c: "Shoe"
                },
                correctAnswer: "a"
            },
            {
                question: "In the movie Dumbo, what type of animal were Dandy Fat Glasses Preacher and Straw Hat?",
                answers: {
                    a: "Eagle",
                    b: "Crows",
                    c: "Cardinals"
                },
                correctAnswer: "b"
            },
            {
                question: "What does Cinderella's fairy godmother turn into a carriage?",
                answers: {
                    a: "Mouse",
                    b: "Dog",
                    c: "Pumpkin"
                },
                correctAnswer: "c"
            },
            {
                question: "What type of animal does Jasmine have for a pet in Aladdin?",
                answers: {
                    a: "Tiger",
                    b: "Rabbit",
                    c: "Monkey"
                },
                correctAnswer: "a"
            },
            {
                question: "The song You Can Fly is from which Disney movie?",
                answers: {
                    a: "Pocahontas",
                    b: "Dumbo",
                    c: "Peter Pan"
                },
                correctAnswer: "c"
            },
            {
                question: "What color are Mickey Mouse's shorts?",
                answers: {
                    a: "Blue",
                    b: "Red",
                    c: "Yellow"
                },
                correctAnswer: "b"
            }
        ];

  function buildQuiz() {
    
    var output = [];

    
    myQuestions.forEach((currentQuestion, questionNumber) => {
      
      var answers = [];

      
      for (letter in currentQuestion.answers) {
        
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

   
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    
    var answerContainers = quizContainer.querySelectorAll(".answers");

    
    let numCorrect = 0;

    
    myQuestions.forEach((currentQuestion, questionNumber) => {
      
      var answerContainer = answerContainers[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

      
      if (userAnswer === currentQuestion.correctAnswer) {
        
        numCorrect++;

        
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        
        answerContainers[questionNumber].style.color = "red";
      }
    });

   
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }



  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");

  
  buildQuiz();

  var previousButton = document.getElementById("previous");
  var nextButton = document.getElementById("next");
  var slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
//})();

var counter = 30;
var interval = setInterval(function() {
    counter--;
    
    if (counter <= 0) {
     		//clearInterval(interval);
      	$('#timer').html("<h3>Times Up!</h3>",showResults());  
        return;
    
    }
  else{$('#timer').text(counter);
      console.log("Timer --> " + counter);
    	
    }
    
}, 1000);



})();





   
