window.addEventListener('DOMContentLoaded',bindEvents);

var teacherObj;


function bindEvents(){

    teacherObj = JSON.parse(localStorage.teacher);
    document.querySelector('#teacherName').innerHTML = teacherObj.name;
    document.querySelector('#generateTestBtn').addEventListener('click',()=>{
        location.href = 'testGenerate.html';
    });
}
