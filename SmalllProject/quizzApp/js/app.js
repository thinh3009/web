const questions=[
    {
        question:"what time is it?",
        answer:[
            {text:"ten",correct:false},
            {text:"nine",correct:true},
            {text:"one",correct:false},
            {text:"two",correct:false}
        ]
    },
    {
        question:"what your name?",
        answer:[
            {text:"ten",correct:false},
            {text:"nine",correct:true},
            {text:"one",correct:false},
            {text:"two",correct:false}
        ]
    },
    {
        question:"what is this?",
        answer:[
            {text:"ten",correct:false},
            {text:"nine",correct:true},
            {text:"one",correct:false},
            {text:"two",correct:false}
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-button");
const nextButton=document.getElementById("text-btn");

let currentQuestionIndex=0;
let scrore=0;

function startQuiz(){
    currentQuestionIndex=0;
    scrore=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
}
function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.correct==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        scrore++;

    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";

}

function showScore(){
    resetState();
    questionElement.innerHTML=`Your score ${scrore} out of ${questions.length}`;
    nextButton.innerHTML="Play again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();