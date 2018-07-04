window.addEventListener('DOMContentLoaded',bindEvents);

var currentSection;

function bindEvents(){


    console.log('Inside Bind Events');
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

const changeSection = (newSection)=>{
    document.querySelector(`#${currentSection}`).classList.remove('show');
    document.querySelector(`#${newSection}`).classList.add('show');

    currentSection = newSection;
}