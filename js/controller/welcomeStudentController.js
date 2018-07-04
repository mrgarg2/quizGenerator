window.addEventListener('DOMContentLoaded', bindEvents);

var studentObj;

function bindEvents() {
    studentObj = JSON.parse(localStorage.student);
    document.querySelector('#studentName').innerHTML = studentObj.name;
    getSubmittedTests();
    getPendingTest();

}

function getSubmittedTests(){
    var submittedTestPr = testOperations.getStudentTests(studentObj.studentId);
    submittedTestPr.then((data)=>{
        if(data){
            console.log('Student Tests are', data);
            console.log("Submitted student tests are ",data);
            printStudentTests(data);
        }
        else{
            document.querySelector('#studentTestSection').innerHTML = 'No Tests Given Yet';
        }
    })
}

function getPendingTest() {
    var testPr = testOperations.getTests();

    testPr.then((data) => {
        console.log('Pending Tests are', data);
        printTests(data);
    }).catch(err => {
        console.log('Error in bringing tests', err);
    })
}

function printTests(tests) {

    for (key in tests) {
        printTest(tests[key])
    }
}

function printStudentTests(tests){
    for(key in tests){
        printStudentTest(tests[key]);
    }
}
function printStudentTest(test){

    var studentTestTable = document.querySelector('#studentTestTable');

    var tr = studentTestTable.insertRow();
    var td = tr.insertCell();
    var txt = document.createTextNode(test.testId);
    td.appendChild(txt);

    td = tr.insertCell();
    txt = document.createTextNode(test.name);
    td.appendChild(txt);
    
    td = tr.insertCell();
    txt = document.createTextNode(test.teacherName);
    td.appendChild(txt);
    
    td = tr.insertCell();
    txt = document.createTextNode(test.score);
    td.appendChild(txt);

    
    td = tr.insertCell();
    txt = document.createTextNode(test.maxMarks);
    td.appendChild(txt);

    
    td = tr.insertCell();
    if(test.feedback){
        txt = document.createTextNode(test.feedback);    
    }
    else{
        txt = document.createTextNode('No feedback yet');
    }
    td.appendChild(txt);

    td = tr.insertCell();
    button = document.createElement("button");
    button.setAttribute('test-id', test.testId);
    button.className = 'btn btn-primary';
    button.innerHTML = 'View Result';
    button.addEventListener('click',viewResult);
    td.appendChild(button);

}

function printTest(test) {
    var pendingTestTable = document.querySelector('#pendingTestTable');

    var tr = pendingTestTable.insertRow();
    var td = tr.insertCell();
    var txt = document.createTextNode(test.testId);
    td.appendChild(txt);

    td = tr.insertCell();
    txt = document.createTextNode(test.name);
    td.appendChild(txt);
    
    td = tr.insertCell();
    txt = document.createTextNode(test.teacherName);
    td.appendChild(txt);
    
    td = tr.insertCell();
    txt = document.createTextNode(test.time);
    td.appendChild(txt);

    
    td = tr.insertCell();
    txt = document.createTextNode(test.maxMarks);
    td.appendChild(txt);

    td = tr.insertCell();
    button = document.createElement("button");
    button.setAttribute('test-id', test.testId);
    button.className = 'btn btn-primary';
    button.innerHTML = 'Take Test';
    button.addEventListener('click',btnEvent);
    td.appendChild(button);

}

function viewResult(){
    var testId = this.getAttribute('test-id');
    console.log('Test Id is ', testId);
    localStorage.testId = testId;
    localStorage.student = JSON.stringify(studentObj);
    location.href = 'studentResult.html';
}

function btnEvent(){
    var testId = this.getAttribute('test-id');
    console.log('Test Id is ', testId);
    localStorage.testId = testId;
    localStorage.student = JSON.stringify(studentObj);
    location.href = 'takeTest.html';
}