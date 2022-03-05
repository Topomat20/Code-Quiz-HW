var questions = [
    {
        title: "Q1. True or False: HTML is a coding language used to create web pages.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        title: "Q2. True or False: A hyperlink can be a word, phrase or graphic.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        title: "Q3. True or False: A web browser translates text-based HTML into a graphical web page.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        title: "Q4. True or False: You must save a text file with a .html exention so a web browser can open it.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        title: "Q5. True or False: A website's home page is typically named homepage.html.",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        title: "Q6. Which of the following tags is used to insert a blank line?",
        choices: ["<br>", "<h1>", "<hr>", "<p>"],
        answer: "<br>"
    },
    {
        title: "Q7. The ___ tag set provides information to the browser about your webpage including the author name and keywords?",
        choices: ["<html></html>", "<body></body>", "<style></style>", "<meta></meta>"],
        answer: "<meta></meta>"
    },
    {
        title: "Q8. Items in a(n) ___ list are preceded by numbers.",
        choices: ["unordered", "bulleted", "ordered", "grocery"],
        answer: "ordered"
    },
    {
        title: "Q9. Images in your webpage may have the following extensions except",
        choices: [".png", ".gif", ".jpg", ".psd"],
        answer: ".psd"
    },
    {
        title: "Q10. A ___ allows users to move from one webpage to another",
        choices: ["browser", "video", "HTML", "hyperlink"],
        answer: "hyperlink"
    },
    {
        title: "Q11. True or False: The order of your <html>, <head>, and <body> tags is not important.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        title: "Q12. True or False: The filenames that preced '.html' may not contain special characters, spaces, misspellings, or capital letters.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        title: "13. The entire definition list should be enclosed within ___ and ___ tags.",
        choices: ["<dd></dd>", "<dt></dt>", "<dl></dl>", "<dvr></dvr>"],
        answer: "<dl></dl>"
    },
    {
        title: "14. Where is the correct place to put the title tag in an HTML document?",
        choices: ["Above the HTML tag", "In the head of the document", "In the body of the document", "It doesn't matter"],
        answer: "In the head of the document"
    },
    {
        title: "15. How do you add a comment in a CSS file?",
        choices: ["/*this is a comment*/", "//this is a comment//", "//this is a comment", "<!this is a comment>"],
        answer: "/*this is a comment*/"
    },
    {
        title: "16. What does CSS stand for?",
        choices: ["Custom Style Sheets", "Colorful Style Sheets", "Compute Style Sheets", "Cascading Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        title: "17. The # symbol specifies that the selector is?",
        choices: ["class", "tag", "first", "id"],
        answer: "id"
    },
    {
        title: "18. Which is the correct CSS syntax?",
        choices: ["{p:color=black(p}", "p {color:black;}", "{p;color:black}", "p:color=black"],
        answer: "p {color:black;}"
    },
    {
        title: "19. How do you display hyperlinks without an underline?",
        choices: ["a {decoration:no underline}", "a {text-decorations:none}", "a {hyperlink:none}", "a {text-decoration:no underline}"],
        answer: "a {text-decorations:none}"
    },
    {
        title: "20. Which HTML tag is used to define an internal style sheet?",
        choices: ["<css>", "<script>", "<style>", "<iss>"],
        answer: "<style>"
    },
];

var currentTimer = document.querySelector("#currentTime");
var questionsEl = document.querySelector('#questions')
var choiceListEl = document.querySelector('#choices')
var startBtn = document.querySelector('#startBtn')
var timerEl = document.querySelector('#timer')

var arrayQuestions = 0;
var secondsLeft = 70;
var timer = 0;
var score = 0;
var penalty = 5;

// start timer/ quiz
timerEl.textContent = `Timer: ${secondsLeft} seconds`;
startBtn.addEventListener("click", function(){
    if(timer === 0){
        timer = setInterval(function(){
            secondsLeft--;
            timerEl.textContent = `Timer: ${secondsLeft} seconds`;
            // stop timer if time run's out
            if(secondsLeft <= 0){
                clearInterval(timer)
                // allDone();
                timerEl.textContent =  "Time's up!";
            };
        }, 1000);
    };
    showQuiz(arrayQuestions);
});

// make the question appear
function showQuiz(arrayQuestions){
    questionsEl.innerHTML = "";
    choiceListEl.innerHTML = "";
    // make the Question number / Question it's self
    for(var i = 0; i<questions.length; i++){
        var qNumber = questions[arrayQuestions].title;
        var qChoices = questions[arrayQuestions].choices;
        questionsEl.textContent = qNumber;
    };
    // make the Question choices appear  
    qChoices.forEach(function(list){
        var listEl = document.createElement("li");
        listEl.setAttribute("style","background-color:red; color:white; border-radius:5px; font-size:15px; padding:2px; margin:5px;")
        listEl.textContent = list;
        questionsEl.appendChild(choiceListEl)
        choiceListEl.appendChild(listEl);
        listEl.addEventListener("click", (match));
    })
};


function match(event){
    var element = event.target;
    if(element.matches("li")){
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id","newDiv");

        if(element.textContent == questions[arrayQuestions].answer){
            score++;
            newDiv.textContent = "RIGHT! correct answer:  "+ questions[arrayQuestions].answer;
        }else{
            secondsLeft = secondsLeft - penalty;
            newDiv.textContent = "WRONG! correct answer:  "+ questions[arrayQuestions].answer;
        }
    }
    arrayQuestions++;

    if(arrayQuestions >= questions.length){
        allDone();
        newDiv.textContent = 'Quiz Done! You got ' +score+ '/' +questions.length+ ' correct!';
    }else{
        showQuiz(arrayQuestions);
    }
    questionsEl.appendChild(newDiv);
}

function allDone(){
    questionsEl.innerHTML = "";
    currentTimer.innerHTML = "";
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionsEl.appendChild(createH1);


    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsEl.appendChild(createP);


    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(timer);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionsEl.appendChild(createP2);
    }


    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.setAttribute("style","margin:5px;")
    createLabel.textContent = "Enter your initials: ";

    questionsEl.appendChild(createLabel);


    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.setAttribute("style","margin:5px;")
    createInput.textContent = "";

    questionsEl.appendChild(createInput);


    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.setAttribute("style","margin:5px;")
    createSubmit.textContent = "Submit";

    questionsEl.appendChild(createSubmit);


    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);

            window.location.replace("./score.html");
        }
    });    
}
// submit/save score to local storage (also submit the score to the score.html page)
