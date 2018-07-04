console.log('Student Login Conroller called');

function studentLoginSection() {
    console.log('Inside Student Login Section');
    changeSection('studentLogin');

}

function studentLogin() {
    var studentId = document.querySelector('#student-id').value;
    var studentPass = document.querySelector('#student-pass').value;

    if (!studentId) {
        document.querySelector('#student-loginMessage').innerHTML = `User Name cannot be empty`;
        return;
    }

    var studentPr = studentOperations.search(studentId);
    studentPr.then((data) => {
        var studentObj = new Student(data.studentId, data.name, data.password);

        if (studentObj.password == studentPass) {
            document.querySelector('#student-loginMessage').innerHTML = `Welcome Student ${studentObj.name}`;
            localStorage.student = JSON.stringify(studentObj);
            location.href = 'welcomeStudent.html';
        }
        else {
            document.querySelector('#student-loginMessage').innerHTML = `Invalid Password`;
        }
    }).catch(err => console.log('Invalid Student Id : ' + err))
}

function studentRegisterSection() {
    console.log('Inside Student Register Section');
    changeSection('studentRegister');
}

function studentRegister() {
    var studentId = document.querySelector('#student-reg-id').value;
    var studentPass = document.querySelector('#student-reg-pass').value;
    var studentName = document.querySelector('#student-reg-name').value;

    var studentObj = new Student(studentId, studentName, studentPass);
    console.log("Student Object is", studentObj);

    // if (checkAvailability(studentObj)) {
    //     document.querySelector('#student-id-availability').innerHTML = "Student Id Avaialable"
    //     document.querySelector('#student-id-availability').className = 'green'
    // }
    // else {
    //     document.querySelector('#student-id-availability').innerHTML = "Student Id Not Avaialable"
    //     document.querySelector('#student-id-availability').className = 'red'
    //     return;
    // }
    studentOperations.add(studentObj);
    alert(`New Student ${studentObj.name} Registered !!`);

}

function checkAvailability(studentObj) {

    var studentPr = studentOperations.search(studentObj.studentId);
    studentPr.then(data => {
        console.log('Data is', data); return false
    }).catch(err => {
        console.log("Error is",err);
        return true;
    });

}

