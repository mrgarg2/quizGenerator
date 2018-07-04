window.addEventListener('DOMContentLoaded',bindEvents);

var currentSection;
var studentObj;
var testObj;
var qId = 1;

function bindEvents(){

    document.querySelector('#beginTestBtn').addEventListener('click',()=>{
        console.log('Begin Test is clicked!!')
        changeSection('testContainer');
        initTest();
    });

    document.querySelector('#prevBtn').addEventListener('click',prevButton);
    document.querySelector('#nextBtn').addEventListener('click',nextButton);
    document.querySelector('#finishBtn').addEventListener('click',submitTest);

    init();

}

function init(){

    document.querySelector('#beginTestBtn').disabled = true;

    testOperations.searchTestById(localStorage.testId).then((jsonObj)=>{
        testObj = convertToTest(jsonObj);
        console.log('Test Object is',testObj);
        document.querySelector('#beginTestBtn').disabled = false;
    }).catch(err=>console.log("Cannot get Test : ",err));

    studentObj = JSON.parse(localStorage.student);
    currentSection = 'beginTest';
    document.querySelector('#studentName').innerHTML = studentObj.name;

}

function initTest(){
    questionStatus();
    timerRun(testObj.testTime,'timer',1000);
    initQuestion();
}

function initQuestion(){

    if(qId == 1){
        document.querySelector('#prevBtn').disabled = true;
        document.querySelector('#nextBtn').disabled = false;
    }
    else if(qId == testObj.questions.length){
        document.querySelector('#prevBtn').disabled = false;
        document.querySelector('#nextBtn').disabled = true;
    }
    else{
        document.querySelector('#nextBtn').disabled = false;
        document.querySelector('#prevBtn').disabled = false;
    }

    var ques = testObj.getQuestionById(qId);

    document.querySelector('#qId').innerHTML = qId;
    document.querySelector('#qName').value = ques.name;
    document.querySelector('#option1').value = ques.options[0];
    document.querySelector('#option2').value = ques.options[1];
    document.querySelector('#option3').value = ques.options[2];
    document.querySelector('#option4').value = ques.options[3];
}

function prevButton(){
    console.log(getSelectedOption());
    var ques = testObj.getQuestionById(qId);
    ques.changeResponse(ques.options[getSelectedOption()-1]);
    qId--;
    initQuestion();
}

function nextButton(){
    console.log('I am in next Button');
    var ques = testObj.getQuestionById(qId);
    var selectedOptionVal = ques.options[getSelectedOption() - 1];
    console.log("Selected Option Value is ",selectedOptionVal);
    ques.changeResponse(ques.options[getSelectedOption()-1]);
    qId++;
    initQuestion();
}

function submitTest(){

    var ques = testObj.getQuestionById(qId);
    ques.changeResponse(ques.options[getSelectedOption()-1]);
    testObj.calcResult();
    console.log('Student Object is ',studentObj);
    testOperations.submitStudentTest(studentObj.studentId,testObj);
    localStorage.studentTest = JSON.stringify(testObj);
    console.log(localStorage);
    location.href = 'studentResult.html';
}

function getSelectedOption(){
    var selectedOption;

    if(document.querySelector('#op1').checked){
        selectedOption = 1;
    }
    else if(document.querySelector('#op2').checked){
        selectedOption = 2;
    }
    else if(document.querySelector('#op3').checked){
        selectedOption = 3;
    }
    else if(document.querySelector('#op4').checked){
        selectedOption = 4;
    }
    else{
        selectedOption = null;
    }

    return selectedOption;
}

function questionStatus(){
    var quesStatusContainer = document.querySelector('#questionStatusContainer');

    var quesid = 1;
    testObj.questions.forEach(ques =>{
        quesStatusContainer.appendChild(dynamicQuesBtn(quesid));
        quesid++;
    })
}

function quesStatus(){

}

function dynamicQuesBtn(quesId){
    var label = document.createElement('label');
    label.classList.add('quesBtn');
    label.innerHTML = quesId;
    label.addEventListener('click',()=>{
        index = quesId-1;
        initQuestion();
    })
    return label;
    
}

function convertToTest(jsonObj){
    console.log(jsonObj);
    var Obj = new studentTest(jsonObj.testId,jsonObj.name,jsonObj.time,jsonObj.questionScore,jsonObj.teacherId,jsonObj.teacherName);
    jsonObj.questions.forEach(ques => {
        var studentQues = new studentQuestion(ques.quesId,ques.name,ques.options,ques.correctAns);
        console.log("Question Added is",studentQues);
        Obj.addQuestion(studentQues);
        
    });
    return Obj;
}


const changeSection = (newSection)=>{
    document.querySelector(`#${currentSection}`).classList.remove('show');
    document.querySelector(`#${currentSection}`).classList.add('hide');
    document.querySelector(`#${newSection}`).classList.add('show');

    currentSection = newSection;
}