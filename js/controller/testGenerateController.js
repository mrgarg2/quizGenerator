window.addEventListener('DOMContentLoaded',bindEvents);


var teacherObj;

function bindEvents(){
    document.querySelector('#testGenerateBtn').addEventListener('click',initTest);
    teacherObj = JSON.parse(localStorage.teacher);

}

function initTest(){
    var teacherId = teacherObj.teacherId;
    var testId = document.querySelector('#testId').value;
    var testName = document.querySelector('#testName').value;
    var testTime = document.querySelector('#testTimeLimit').value;
    var questionScore = document.querySelector('#questionScore').value;
    // var noOfQuestions = document.querySelector('#testQuestions').value;


    var testObj = new Test(testId,testName,testTime,questionScore,teacherId,teacherObj.name);
    console.log('Test Generated....');
    console.log('Test is', testObj);

    localStorage.test = JSON.stringify(testObj);
    location.href = 'questionGenerate.html';
}