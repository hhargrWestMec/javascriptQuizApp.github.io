
//answer outputs location
const answerOutput1 = document.getElementById('answer1'); 
const answerOutput2 = document.getElementById('answer2');
const answerOutput3 = document.getElementById('answer3');
const answerOutput4 = document.getElementById('answer4');

//question & explanation output location
const questionOutput = document.getElementById('questionOutput');
const explanationOutput = document.getElementById('explanationOutput');

//question bool/num variable storage
let currentQuestion = 1;
let questionSelected1 = 0;
let questionSelected2 = 0;
let questionSelected3 = 0;
let questionSelected4 = 0;
let questionSelected5 = 0;
let questionSelected6 = 0;
let questionSelected7 = 0;
let questionSelected8 = 0;
let questionSelected9 = 0;
let questionSelected10 = 0;

//score holder
let score = 0;

//holds submition value
let submitted = false;


function previous () {
    if ( currentQuestion > 1 ) {
        currentQuestion--;
        console.log('User is now on question ' + currentQuestion);
        reloadPage(currentQuestion);
    } else {
        alert('You cannot do that!');
    }

    reloadAnswers();

}

function next () {
    if ( currentQuestion < 10) {
        currentQuestion++;
        console.log('User is now on question ' + currentQuestion);
        reloadPage(currentQuestion);
    } else {
        alert('That was the last question!');
    }

    reloadAnswers();

}

function reloadPage (questionNumber) {
    if ( submitted === false ) {
        var message = 'Question  ' + questionNumber + ' : ';
        eval('questionOutput.innerHTML =' + 'message' +' + question' + questionNumber + '.question');
        eval('answerOutput1.innerHTML = question' + questionNumber + '.ans1');
        eval('answerOutput2.innerHTML = question' + questionNumber + '.ans2');
        eval('answerOutput3.innerHTML = question' + questionNumber + '.ans3');
        eval('answerOutput4.innerHTML = question' + questionNumber + '.ans4');
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
    } else if ( submitted === true ) {
        var message = 'Question  ' + questionNumber + ' : ';
        eval('questionOutput.innerHTML =' + 'message' +' + question' + questionNumber + '.question');
        eval('answerOutput1.innerHTML = question' + questionNumber + '.ans1');
        eval('answerOutput2.innerHTML = question' + questionNumber + '.ans2');
        eval('answerOutput3.innerHTML = question' + questionNumber + '.ans3');
        eval('answerOutput4.innerHTML = question' + questionNumber + '.ans4');
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3'; 
        answerOutput1.style.color = 'black';
        answerOutput2.style.color = 'black';
        answerOutput3.style.color = 'black';
        answerOutput4.style.color = 'black'; 


        var holder = eval(('question' + questionNumber ) +'.correct');
        
        var holder2 = eval('answerOutput' + holder);

        holder2.style.color = 'green';

        displayExp(questionNumber);


    } else {
        console.loe('*Error, reloadPage();*')
    }

    if ( currentQuestion == 10 ) {
        document.getElementById('nextButton').style.visibility = 'hidden';
    } else {
        document.getElementById('nextButton').style.visibility = 'visible';

    }

    if ( currentQuestion == 1 ) {
        document.getElementById('prevButton').style.visibility = 'hidden';
    } else {
        document.getElementById('prevButton').style.visibility = 'visible';

    }
    


}

function displayExp (questionNumber) {

    var message = 'Explanation' + ' : ';
    eval('explanationOutput.innerHTML =' + 'message' +' + question' + questionNumber + '.exp');
}

function submitQuiz () {

    checkScore();

    submitted = true;

    currentQuestion = 1;
    reloadPage(currentQuestion);

    showScore();
    

}

function showScore () {
    var scoreDisplay = score + '/10';
    document.getElementById('scoreDisplay').innerHTML = scoreDisplay
    document.getElementById('scoreContainer').style.visibility = 'visible';

}

function resetQuiz () {
    window.location.reload();
}

function closeButton () {
    document.getElementById('scoreContainer').style.visibility = 'hidden';

}

function answerOneClicked () { 
    if ( submitted === false ) {
    if ( currentQuestion == 1 ) {
        answerOutput1.style.backgroundColor = '#bababa';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected1 = 1;


    } else if ( currentQuestion == 2 ) {
        answerOutput1.style.backgroundColor = '#bababa';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected2 = 1;


    } else if ( currentQuestion == 3 ) {
        console.log('Answer was correct!');
        answerOutput1.style.backgroundColor = '#bababa';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected3 = 1;


    } else if ( currentQuestion == 4 ) {
        answerOutput1.style.backgroundColor = '#bababa';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected4 = 1;


    } else if ( currentQuestion == 5 ) {
        answerOutput1.style.backgroundColor = '#bababa';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected5 = 1;


    } else if ( currentQuestion == 6 ) {
        console.log('Answer was correct!');
        answerOutput1.style.backgroundColor = '#bababa';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected6 = 1;


    } else if ( currentQuestion == 7 ) {
        answerOutput1.style.backgroundColor = '#bababa';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected7 = 1;


    } else if ( currentQuestion == 8 ) {
        answerOutput1.style.backgroundColor = '#bababa';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected8 = 1;


    } else if ( currentQuestion == 9 ) {
        answerOutput1.style.backgroundColor = '#bababa';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected9 = 1;


    } else if ( currentQuestion == 10 ) {
        answerOutput1.style.backgroundColor = '#bababa';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected10 = 1;


    }
    }
}


function answerTwoClicked () { 
    if ( submitted === false ) {
    if ( currentQuestion == 1 ) {
        answerOutput2.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected1 = 2;


    } else if ( currentQuestion == 2 ) {
        answerOutput2.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected2 = 2;


    } else if ( currentQuestion == 3 ) {
        answerOutput2.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected3 = 2;


    } else if ( currentQuestion == 4 ) {
        answerOutput2.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected4 = 2;


    } else if ( currentQuestion == 5 ) {
        console.log('Answer was correct!');
        answerOutput2.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected5 = 2;


    } else if ( currentQuestion == 6 ) {
        answerOutput2.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected6 = 2;


    } else if ( currentQuestion == 7 ) {
        answerOutput2.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected7 = 2;


    } else if ( currentQuestion == 8 ) {
        answerOutput2.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected8 = 2;


    } else if ( currentQuestion == 9 ) {
        answerOutput2.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected9 = 2;


    } else if ( currentQuestion == 10 ) {
        console.log('Answer was correct!');
        answerOutput2.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected10 = 2;

    }
}
}


function answerThreeClicked () { 
    if ( submitted === false ) {
    if ( currentQuestion == 1 ) {
        answerOutput3.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected1 = 3;


    } else if ( currentQuestion == 2 ) {
        console.log('Answer was correct!');
        answerOutput3.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected2 = 3;


    } else if ( currentQuestion == 3 ) {
        answerOutput3.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected3 = 3;


    } else if ( currentQuestion == 4 ) {
        answerOutput3.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected4 = 3;


    } else if ( currentQuestion == 5 ) {
        answerOutput3.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected5 = 3;


    } else if ( currentQuestion == 6 ) {
        answerOutput3.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected6 = 3;


    } else if ( currentQuestion == 7 ) {
        console.log('Answer was correct!');
        answerOutput3.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected7 = 3;


    } else if ( currentQuestion == 8 ) {
        answerOutput3.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected8 = 3;


    } else if ( currentQuestion == 9 ) {
        console.log('Answer was correct!');
        answerOutput3.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected9 = 3;


    } else if ( currentQuestion == 10 ) {
        answerOutput3.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput4.style.backgroundColor = '#d3d3d3';
        questionSelected10 = 3;


    }
}
}


function answerFourClicked () { 
    if ( submitted === false ) {
    if ( currentQuestion == 1 ) {
        console.log('Answer was correct!');
        answerOutput4.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        questionSelected1 = 4;


    } else if ( currentQuestion == 2 ) {
        answerOutput4.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        questionSelected2 = 4;


    } else if ( currentQuestion == 3 ) {
        answerOutput4.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        questionSelected3 = 4;


    } else if ( currentQuestion == 4 ) {
        console.log('Answer was correct!');
        answerOutput4.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        questionSelected4 = 4;


    } else if ( currentQuestion == 5 ) {
        answerOutput4.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        questionSelected5 = 4;


    } else if ( currentQuestion == 6 ) {
        answerOutput4.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        questionSelected6 = 4;


    } else if ( currentQuestion == 7 ) {
        answerOutput4.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        questionSelected7 = 4;


    } else if ( currentQuestion == 8 ) {
        console.log('Answer was correct!');
        answerOutput4.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        questionSelected8 = 4;


    } else if ( currentQuestion == 9 ) {
        answerOutput4.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        questionSelected9 = 4;

        
    } else if ( currentQuestion == 10 ) {
        answerOutput4.style.backgroundColor = '#bababa';
        answerOutput1.style.backgroundColor = '#d3d3d3';
        answerOutput2.style.backgroundColor = '#d3d3d3';
        answerOutput3.style.backgroundColor = '#d3d3d3';
        questionSelected10 = 4;


    }
}
}


function checkScore () {
    if ( questionSelected1 === 4 ) {
        score++;
    } 
    if ( questionSelected2 === 3 ) {
        score++;
    } 
    if ( questionSelected3 === 1 ) {
        score++;
    } 
    if ( questionSelected4 === 4 ) {
        score++;
    } 
    if ( questionSelected5 === 2 ) { 
        score++;
    } 
    if ( questionSelected6 === 1 ) {
        score++;
    } 
    if ( questionSelected7 === 3 ) {
        score++;
    } 
    if ( questionSelected8 === 4 ) {
        score++;
    } 
    if ( questionSelected9 === 3 ) { 
        score++;
    }
    if ( questionSelected10 === 2 ) {
        score++;
    }
    console.log('Your score was ' + score + '/10!')
}



function loadPastAnswer (questionNumber) {
    var num = eval('questionSelected' + questionNumber)
    
    var que = eval('answerOutput' + num);

    que.style.backgroundColor = '#3bababa'

    console.log(que);

}

function reloadAnswers () {
    if ( currentQuestion == 1 && questionSelected1 != 0 ) {
        //questionSelected1 holds 4
        var location = eval('answerOutput' + questionSelected1)

        location.style.backgroundColor = '#bababa';
    }

    if ( currentQuestion == 2 && questionSelected2 != 0 ) {
        //questionSelected1 holds 4
        var location = eval('answerOutput' + questionSelected2)

        location.style.backgroundColor = '#bababa';
    }

    if ( currentQuestion == 3 && questionSelected3 != 0 ) {
        //questionSelected1 holds 4
        var location = eval('answerOutput' + questionSelected3)

        location.style.backgroundColor = '#bababa';
    }

    if ( currentQuestion == 4 && questionSelected4 != 0 ) {
        //questionSelected1 holds 4
        var location = eval('answerOutput' + questionSelected4)

        location.style.backgroundColor = '#bababa';
    }

    if ( currentQuestion == 5 && questionSelected5 != 0 ) {
        //questionSelected1 holds 4
        var location = eval('answerOutput' + questionSelected5)

        location.style.backgroundColor = '#bababa';
    }

    if ( currentQuestion == 6 && questionSelected6 != 0 ) {
        //questionSelected1 holds 4
        var location = eval('answerOutput' + questionSelected6)

        location.style.backgroundColor = '#bababa';
    }

    if ( currentQuestion == 7 && questionSelected7 != 0 ) {
        //questionSelected1 holds 4
        var location = eval('answerOutput' + questionSelected7)

        location.style.backgroundColor = '#bababa';
    }

    if ( currentQuestion == 8 && questionSelected8 != 0 ) {
        //questionSelected1 holds 4
        var location = eval('answerOutput' + questionSelected8)

        location.style.backgroundColor = '#bababa';
    }

    if ( currentQuestion == 9 && questionSelected9 != 0 ) {
        //questionSelected1 holds 4
        var location = eval('answerOutput' + questionSelected9)

        location.style.backgroundColor = '#bababa';
    }

    if ( currentQuestion == 10 && questionSelected10 != 0 ) {
        //questionSelected1 holds 4
        var location = eval('answerOutput' + questionSelected10)

        location.style.backgroundColor = '#bababa';
    }
}
