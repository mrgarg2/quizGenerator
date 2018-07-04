window.addEventListener('DOMContentLoaded',bindEvents);

var testObj;

function bindEvents(){
    var studentObj = JSON.parse(localStorage.student);
    document.querySelector('#studentName').innerHTML = studentObj.name;
    testObj = convertToTest(JSON.parse(localStorage.studentTest));
    showResult();
}

function showResult(){
    document.querySelector('#score').innerHTML = testObj.score;
    document.querySelector('#maxMarks').innerHTML = testObj.maxMarks;
    testObj.questions.forEach((ques)=>{
        printResult(ques);
    })
}

function printResult(ques){

    console.log('Question is ',ques);

    var tbody = document.querySelector('#resultTable');
    var tr = tbody.insertRow();
    var td = tr.insertCell();
    var txt = document.createTextNode(ques.quesId);
    td.appendChild(txt);

    txt = document.createTextNode(ques.name);
    td = tr.insertCell();
    td.appendChild(txt);

    txt = document.createTextNode(ques.correctAns);
    td = tr.insertCell();
    td.appendChild(txt);

    txt = document.createTextNode(ques.userResponse);
    td = tr.insertCell();
    td.appendChild(txt);

    td = tr.insertCell();

    if(ques.isCorrect){
        txt = document.createTextNode('4.0');
        td.appendChild(txt);
        td.classList.add('green');
    }
    else{
        txt = document.createTextNode('0.0');
        td.appendChild(txt);
        td.classList.add('red');
    }
    
}


function convertToTest(jsonObj){
    console.log(jsonObj);
    var Obj = new studentTest(jsonObj.testId,jsonObj.name,jsonObj.time,jsonObj.questionScore,jsonObj.teacherId);
    jsonObj.questions.forEach(ques => {
        var studentQues = new studentQuestion(ques.quesId,ques.name,ques.options,ques.correctAns);
        studentQues.getOtherFields(ques.userResponse,ques.isCorrect,ques.answered);
        Obj.addQuestion(studentQues); 
    });
    Obj.getOtherFields(jsonObj.score);
    return Obj;
}