window.addEventListener('DOMContentLoaded',bindEvents);

var y = autoGen();
var testObj;

function bindEvents(){
    document.querySelector('#addQuestionBtn').addEventListener('click',addQuestion);
    document.querySelector('#submitTestBtn').addEventListener('click',submitTest);
    testObj = convertToTest(JSON.parse(localStorage.test));
    initQues();
}

function initQues(){
    var qId = y.next().value;
    document.querySelector('#qno').innerHTML = qId;

    document.querySelector('#qName').value = "";
    document.querySelector('#option1').value = "";
    document.querySelector('#option2').value = "";
    document.querySelector('#option3').value = "";
    document.querySelector('#option4').value = "";
}

function convertToTest(jsonObj){
    console.log('Json Object is',jsonObj);
    var Obj = new Test(jsonObj.testId,jsonObj.name,jsonObj.time,jsonObj.questionScore,jsonObj.teacherId,jsonObj.teacherName);
    return Obj;
}

function* autoGen(){
    var counter = 1;
    while(true){
        yield counter;
        counter++;
    }
}

function addQuestion(){

    var qId = document.querySelector('#qno').innerHTML;
    var qName = document.querySelector('#qName').value;
    var option1 = document.querySelector('#option1').value;
    var option2 = document.querySelector('#option2').value;
    var option3 = document.querySelector('#option3').value;
    var option4 = document.querySelector('#option4').value;

    var correctOption;

    if(document.querySelector('#op1').checked){
        correctOption = 1;
    }
    else if(document.querySelector('#op2').checked){
        correctOption = 2;
    }
    else if(document.querySelector('#op3').checked){
        correctOption = 3;
    }
    else{
        correctOption = 4;
    }

    console.log('Correct Option is ', correctOption);
    var options = [];
    options.push(option1);
    options.push(option2);
    options.push(option3);
    options.push(option4);
    var correctAns = options[correctOption-1];

    var questionObj = new Question(qId,qName,options,correctAns);
    testObj.addQuestion(questionObj);

    console.log('Correct Answer is',options[correctOption-1]);
    console.log('Question is',questionObj);
    initQues();
}

function submitTest(){
    firebase.database().ref('test/' + testObj.testId).set(testObj);
    testObj.getMaxMarks();
    console.log('Test Object is ',testObj);
    alert(`Test ${testObj.name} successfullt Generated...`);
//    location.href = 'index.html';

}