function teacherLogin() {
    var teacherId = document.querySelector('#teacher-id').value;
    var teacherPass = document.querySelector('#teacher-pass').value;

    if (!teacherId || !teacherPass) {
        document.querySelector('#teacher-loginMessage').innerHTML = 'Teacher Id or Password cannot be empty';
        return;
    }

    teacherOperations.search(teacherId).then(data => {
        if (data) {
            var teacherObj = new Teacher(data.teacherId, data.password, data.name);
            if (teacherObj.password == teacherPass) {
                //Login Successful
                localStorage.teacher = JSON.stringify(teacherObj);
                console.log("Teacher is ", teacherObj);
                console.log('Teacher Login Successful..');
                console.log('Teacher Id ', teacherId);
                console.log('Teacher Pass', teacherPass);

                location.href = 'welcomeTeacher.html'
            }
            else{
                document.querySelector('#teacher-loginMessage').innerHTML = 'Invalid Password';
            }
        }
        else {
            document.querySelector('#teacher-loginMessage').innerHTML = 'Invalid Teacher Id';
        }
    })
}

function teacherRegister() {
    var teacherId = document.querySelector('#teacher-reg-id').value;
    var teacherPass = document.querySelector('#teacher-reg-pass').value;
    var teacherName = document.querySelector('#teacher-reg-name').value;

    var teacherObj = new Teacher(teacherId, teacherPass, teacherName);
    teacherOperations.add(teacherObj);

    alert(`Teacher ${teacherName} Registered Successfully...`);

    // console.log('Teacher Registered....')
    // console.log('Teacher Id', teacherId);
    // console.log('Teacher Pass', teacherPass);
    // console.log('Teacher Name', teacherName);

    location.href = 'index.html';
}

function teacherLoginSection() {
    console.log('Inside Teacher Login Section..');
    changeSection('teacherLogin');
}

function teacherRegisterSection() {
    console.log('Inside Teacher Register Section');
    changeSection('teacherRegister');
}