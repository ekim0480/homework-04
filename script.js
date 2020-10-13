// Defining DOM variables

var jumboEl = document.getElementById("quizJumbo");
var headerEl = document.getElementById("jumboHeader");
var leadEl = document.getElementById("jumboLead");
var mainEl = document.getElementById("jumboMain");
var timerEl = document.getElementById("timer");



var ulEl = document.createElement("ul");
var liA = document.createElement("li");
var liB = document.createElement("li");
var liC = document.createElement("li");
var liD = document.createElement("li");
// var btnA = document.createElement("btn");
// var btnB = document.createElement("btn");
// var btnC = document.createElement("btn");
// var btnD = document.createElement("btn");
var submitHSdiv = document.createElement("div");
var btnHighScore = document.createElement("btn");
var btnPlayAgain = document.createElement("btn");
var inputName = document.createElement("input");

var startBtn = document.querySelector("#startBtn");
var hsList = document.querySelector("#hs-list")

var score = 0
var timer = 61
var increment = 0

// Setting up High Scores array.

var hsArr = [];

// Setting up array containing all possible questions and answers.

var qArr = [
    {
        q: "Which special character denotes an ARRAY?",

        as: {
            a: "{ }",
            b: "< >",
            c: "( )",
            d: "[ ]"
        },

        correctA: "[ ]"
    },
    {
        q: "What value(s) does a BOOLEAN represent?",

        as: {
            a: "Numbers",
            b: "Strings",
            c: "True / False",
            d: "Integers"
        },

        correctA: "True / False"
    },
    {
        q: "Which unit of time is used when setting TIME INTERVALS?",

        as: {
            a: "Millisecond",
            b: "Nanosecond",
            c: "Second",
            d: "Centisecond"
        },

        correctA: "Millisecond"
    },
    {
        q: "Before coding a project, a coder typically writes a ____________ which is similar to the basic outline of the project.",

        as: {
            a: "Hypothesis",
            b: "Project outline",
            c: "Pseudocode",
            d: "Flow chart"
        },

        correctA: "Pseudocode"
    },
    {
        q: "___________ are used to store multiple values in a single variable.",

        as: {
            a: "Loops",
            b: "Functions",
            c: "Arrays",
            d: "Booleans"
        },

        correctA: "Arrays"
    },
    {
        q: "Which of the following denotes an OBJECT?",

        as: {
            a: "var obj = ( [ ] )",
            b: "var obj = [ { } ]",
            c: "var obj = [ ( ) ]",
            d: "var obj = ( ( ) )"
        },

        correctA: "var obj = [ { } ]"
    },
    {
        q: "____________ is best used with Math.random() to return random INTEGERS.",

        as: {
            a: "Math.floor( )",
            b: "Math.ceil( )",
            c: "Math.round( )",
            d: "Math.abs( )"
        },

        correctA: "Math.floor( )"
    },
    {
        q: "Which JavaScript function is used to generate a pop-up box which will return a value of TRUE or FALSE?",

        as: {
            a: "Window.alert( )",
            b: "Window.confirm( )",
            c: "Window.prompt( )",
            d: "Window.boolean( )"
        },

        correctA: "Window.confirm( )"
    },
    {
        q: "DOM stands for _________.",

        as: {
            a: "Document Object Menu",
            b: "Document Organization Model",
            c: "Document Object Model",
            d: "Document OnClick Mode"
        },

        correctA: "Document Object Model"
    },
    {
        q: "Which method is used to add a node as the LAST CHILD of a node?",

        as: {
            a: "appendChild( )",
            b: "lastElementChild( )",
            c: "prependChild( )",
            d: "lastChild( )"
        },

        correctA: "appendChild( )"
    },
    {
        q: 'In JavaScript, ___________ are commonly known as "things that happen to HTML elements."',

        as: {
            a: "actions",
            b: "methods",
            c: "occurances",
            d: "events"
        },

        correctA: "events"
    },
    {
        q: "What is the difference between LOCALSTORAGE and SESSIONSTORAGE?",

        as: {
            a: "LOCALSTORAGE stores data client-side, while SESSIONSTORAGE stores data server-side.",
            b: "LOCALSTORAGE stores data for one session, while SESSIONSTORAGE stores data with no expiration date.",
            c: "LOCALSTORAGE stores data with no expiration date, while SESSIONSTORAGE stores data for one session.",
            d: "LOCALSTORAGE stores data on the hard drive, while SESSIONSTORAGE stores data in the browser using cookies."
        },

        correctA: "LOCALSTORAGE stores data with no expiration date, while SESSIONSTORAGE stores data for one session."
    },
    {
        q: "The __________ method adds new items to the end of an array, and returns the new length.",

        as: {
            a: "add( )",
            b: "push( )",
            c: "concat( )",
            d: "append( )"
        },

        correctA: "push( )"
    },
    {
        q: "__________ is a JavaScript procedure -- a set of statements that performs a task or calculates a value.",

        as: {
            a: "A function",
            b: "An object",
            c: "An event",
            d: "A call"
        },
        
        correctA: "A function"
    },
    {
        q: "_________ can be generally thought of as the names of values stored within JavaScript objects.",

        as: {
            a: "Variables",
            b: "Methods",
            c: "Keys",
            d: "Nodes"
        },

        correctA: "Keys"
    },
    {
        q: "What is the term which describes the order in which event handlers are called when one element is nested inside a second element, and both elements have registered a listener for the same event?",

        as: {
            a: "Event processing.",
            b: "Event cascading.",
            c: "Event delegation.",
            d: "Event bubbling."
        },

        correctA: "Event bubbling."
    },
    {
        q: "The link to a custom JavaScript file should be placed __________ of an HTML document.",

        as: {
            a: "at the beginning of the < head > tag",
            b: "at the end of the < head > tag",
            c: "at the beginning of the < body > tag",
            d: "at the end of the < body > tag"
        },

        correctA: "at the end of the < body > tag"
    },
    {
        q: "Taking advantage of EVENT PROPAGATION to create a mechanism that responds to ui-events via a single common parent rather than each child is known as __________.",

        as: {
            a: "event delegation",
            b: "event bubbling",
            c: "event refactoring",
            d: "event listening"
        },

        correctA: "event delegation"
    },
    {
        q: "All GLOBAL JavaScript objects, functions, and variables automatically become members of _______________.",

        as: {
            a: "the array object",
            b: "the window object",
            c: "the DOM",
            d: "the window parameters"
        },

        correctA: "the window object"
    },
    {
        q: "The __________ method can be used to stop forms from automatically submitting when the submit button is clicked. ",

        as: {
            a: "preventAction( )",
            b: "preventPropagation( )",
            c: "preventDefault( )",
            d: "preventEvent( )"
        },

        correctA: "preventDefault( )"
    }
];

// Function to remove start button up click.
// Clicking it multiple times caused the countdowns to "stack" on 
// each other, messing it up.

function removeBtn() {
    startBtn.parentNode.removeChild(startBtn);
}

// Function to shuffle the array for a random order each time the game is played.
// Googled "How to shuffle array javascript".
// Led me to a very in-depth discussion on stackoverflow on a wide variety of
// different methods.  The one I chose to use was called the "Durstenfeld shuffle".

// DURSTENFELD SHUFFLE, AN OPTIMIZED VERSION OF THE FISHER-YATES SHUFFLE.

// It picks a random element for each original array element, and excludes it from the next draw, like picking randomly from a deck of cards.

// This clever exclusion swaps the picked element with the current one, then picks the next random element from the remainder, looping backwards for optimal efficiency, ensuring the random pick is simplified (it can always start at 0), and thereby skipping the final element.

function shuffleArray() {
    for (let i = qArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [qArr[i], qArr[j]] = [qArr[j], qArr[i]];
    }
    console.log(qArr);
    return qArr;
}

// Function for "get ready" countdown.
// Gives a "get ready to begin" countdown.
// Centers text.
// Begins game after "get ready" countdown finishes.

function countdown() {

    var countdown = 6
    var countdownInterval = setInterval(function() {
        countdown--;
        headerEl.setAttribute("style", "text-align: center");
        headerEl.textContent = "Game will begin in... " + countdown + " seconds...";
        leadEl.setAttribute("style", "text-align: center");
        leadEl.textContent = "Get ready!";

        if (countdown === 0) {
            clearInterval(countdownInterval);
            setTimeout(function() {
                headerEl.textContent = "Begin!"
                leadEl.textContent = "";
                setTimeout(function() {
                    game();
                }, 1000);
            }, 1000);
        }
    }, 1000);
};

// Function to manage the game timer.
// Counts down at 1 second intervals and ends game if timer runs out.

function gameTimer() {

    var timerInterval = setInterval(function(){
        timer--;
        timerEl.textContent = timer;
            if (timer <= 0) {
                timerEl.textContent = "0"
                clearInterval(timerInterval);
                postGame();
                return;
            }
    }, 1000)
};

// Function to display questions and answers.
// Then listens for clicks and checks if input is correct/incorrect.
function displayQs() {
    
        console.log(qArr[increment].q)
        console.log(qArr[increment].as)

        headerEl.textContent = ""
        leadEl.textContent = qArr[increment].q;

        jumboEl.appendChild(ulEl);

        ulEl.appendChild(liA);
        ulEl.appendChild(liB);
        ulEl.appendChild(liC);
        ulEl.appendChild(liD);

        var btnA = document.createElement("btn");
        var btnB = document.createElement("btn");
        var btnC = document.createElement("btn");
        var btnD = document.createElement("btn");

        liA.appendChild(btnA);
        liB.appendChild(btnB);
        liC.appendChild(btnC);
        liD.appendChild(btnD);

        btnA.textContent = qArr[increment].as.a;
        btnB.textContent = qArr[increment].as.b;
        btnC.textContent = qArr[increment].as.c;
        btnD.textContent = qArr[increment].as.d;

        btnA.setAttribute("class", "btn btn-primary btn-sm ansBtn");
        btnB.setAttribute("class", "btn btn-primary btn-sm ansBtn");
        btnC.setAttribute("class", "btn btn-primary btn-sm ansBtn");
        btnD.setAttribute("class", "btn btn-primary btn-sm ansBtn");

        document.querySelectorAll(".ansBtn").forEach(item => {
            item.addEventListener("click", event => {
                event.preventDefault();

                // console.log("key = ", Object.keys(qArr)[increment])
                // console.log("value = ", qArr[Object.keys(qArr)[increment]].correctA)
                // console.log(btnA.textContent)
                // console.log(btnB.textContent)
                // console.log(btnC.textContent)
                // console.log(btnD.textContent)
                // console.log(qArr[Object.keys(qArr)[increment]].correctA)
                // console.log(event.target.textContent)
                // console.log(timer)
                
                if (event.target.textContent !== qArr[Object.keys(qArr)[increment]].correctA) {
                    score--;
                    timer = timer - 10
                    alert("Incorrect!");
                } else {
                    score++;
                    alert("Correct!");
                }
                questionLoop()
            })
        })
}

// Function to loop through the displayQs function, displaying one question at a time
// then waiting for user response before moving on to next question.

function questionLoop() {
        increment++

        if (increment < qArr.length) {
            var btnElements = document.getElementsByClassName("ansBtn")
            while (btnElements.length > 0) btnElements[0].remove()
            displayQs()
        } else {
            postGame()
        }
    
}

// Function for the game itself, begins timer and function to display questions.

function game() {
    gameTimer();
    displayQs();
}

// Function to show post game screen.

function postGame() {

    if (score < 0) {
        score = 0
    }

    headerEl.textContent = "Game Over!"

    leadEl.textContent = "Your final score is: " + score + " out of 20.";

    ulEl.parentNode.removeChild(ulEl);
    jumboEl.appendChild(submitHSdiv);
    submitHSdiv.setAttribute("style", "text-align: center");
    submitHSdiv.appendChild(inputName);
    inputName.setAttribute("type", "text");
    inputName.setAttribute("placeholder", "Enter your name.");
    inputName.setAttribute("id", "hs-input")

    submitHSdiv.appendChild(btnHighScore);
    btnHighScore.setAttribute("class", "btn btn-primary btn-sm");
    btnHighScore.textContent = "Submit High Score";

    btnHighScore.addEventListener("click", function(event) {
        event.preventDefault();
        // storeHS()?
    });
}

function renderHS() {

    var hsInput = document.querySelector("#hs-input");
    // Clear todoList element and update todoCountSpan
    hsList.innerHTML = "";
  
    // Render a new li for each high score
    for (var i = 0; i < hsArr.length; i++) {
      var hs = hsArr[i];
  
      var li = document.createElement("li");
      li.textContent = hs;
      li.setAttribute("data-index", i);
  
      hsList.appendChild(li);
    }
  }

function init() {

    var storedHS = JSON.parse(localStorage.getItem("hsArr"))

    if (storedHS !== null) {
        hsArr = storedHS;
    }
    renderHS();
}

function storeHS() {

    localStorage.setItem("hsArr", JSON.stringify(hsArr));
  }
  
  // When form is submitted...
    btnHighScore.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(inputName.textContent)
  
    var hsText = hsInput.textContent.trim();
  
    // Return from function early if submitted todoText is blank
    if (hsText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    hsArr.push(hsText);
    hsInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeHS();
    // render high scores.
    renderHS();
  });

// Adding event listener to begin quiz up clicking the Start button.

startBtn.addEventListener("click", countdown);

// Adding event listener to shuffle the array upon clicking start.

startBtn.addEventListener("click", shuffleArray);

// Removign start button on click.

startBtn.addEventListener("click", removeBtn);