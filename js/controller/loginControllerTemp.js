window.addEventListener('DOMContentLoaded', bindEvents);

var currentSection;

function bindEvents(){

    currentSection = 'studentLogin';
    document.querySelector('#studentSection').addEventListener('click',studentLoginSection);
    document.querySelector('#student-LoginBt').addEventListener('click',studentLogin);
    
    document.querySelector('#teacherSection').addEventListener('click',teacherLoginSection);
    document.querySelector('#teacher-LoginBt').addEventListener('click',teacherLogin);

    document.querySelector('#student-RegisterSection').addEventListener('click',studentRegisterSection);
    document.querySelector('#teacher-RegisterSection').addEventListener('click',teacherRegisterSection);

    document.querySelector('#student-RegisterBt').addEventListener('click',studentRegister);
    document.querySelector('#teacher-RegisterBt').addEventListener('click',teacherRegister);

}

function studentLoginSection(){
    console.log('Inside Student Login Section');
    changeSection('studentLogin');
}

function studentLogin(){

    var studentId = document.querySelector('#student-id').value;
    var studentPass = document.querySelector('#student-pass').value;

    var studentPr = studentOperations.search(studentId);

    studentPr.then((data)=>{
        console.log(data);

        var studentObj = new Student(data.studentId,data.name,data.password);

        console.log('StudentObj.password is' , studentObj.password);
        console.log('Student Pass is', studentPass);

        if(studentObj.password == studentPass){
            document.querySelector('#student-loginMessage').innerHTML = `Welcome Student ${studentObj.name}`;
        }
        else{
            document.querySelector('#student-loginMessage').innerHTML = `Invalid Password`;
        }
    }).catch(err=>console.log('Invalid Student Id : ' + err))

    // console.log('Student Id ', studentId);
    // console.log('Student Pass',studentPass);
    //check for Student Login

}

function teacherLoginSection(){
    console.log('Inside Teacher Login Section..');
    changeSection('teacherLogin');
}

function teacherLogin(){
    var teacherId = document.querySelector('#teacher-id').value;
    var teacherPass = document.querySelector('#teacher-pass').value;

    console.log('Teacher Id ', teacherId);
    console.log('Teacher Pass',teacherPass);
    
}

function studentRegisterSection(){
    console.log('Inside Student Register Section');
    changeSection('studentRegister');
}

function teacherRegisterSection(){
    console.log('Inside Teacher Register Section');
    changeSection('teacherRegister');
}

function studentRegister(){
    var studentId = document.querySelector('#student-reg-id').value;
    var studentPass = document.querySelector('#student-reg-pass').value;
    var studentName = document.querySelector('#student-reg-name').value;

    var studentObj = new Student(studentId,studentPass,studentName);
    studentOperations.add(studentObj);

    console.log('Student Registered....')
    console.log('Student Id', studentId);
    console.log('Student Pass', studentPass);
    console.log('Student Name', studentName);
}

function teacherRegister(){
    var teacherId = document.querySelector('#teacher-reg-id').value;
    var teacherPass = document.querySelector('#teacher-reg-pass').value;
    var teacherName = document.querySelector('#teacher-reg-name').value;

    console.log('Teacher Registered....')
    console.log('Teacher Id', teacherId);
    console.log('Teacher Pass', teacherPass);
    console.log('Teacher Name', teacherName);
}

const changeSection = (newSection)=>{
    document.querySelector(`#${currentSection}`).className = 'hide';
    document.querySelector(`#${newSection}`).className = 'show';

    currentSection = newSection;
}



