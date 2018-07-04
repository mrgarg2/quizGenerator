// Initialize Firebase
var config = {
    apiKey: "AIzaSyDIQp0IQb4gMVdpHWJ6ubJcpKq-PdeOwm8",
    authDomain: "testengine-5016f.firebaseapp.com",
    databaseURL: "https://testengine-5016f.firebaseio.com",
    projectId: "testengine-5016f",
    storageBucket: "testengine-5016f.appspot.com",
    messagingSenderId: "528599258161"
};
firebase.initializeApp(config);


function timerRun(timeLeft,id,delay){

    var intervalId = setInterval(()=>{
        document.querySelector(`#${id}`).innerHTML = timeLeft;
        timeLeft--;
        if(timeLeft == 0){
            clearInterval(intervalId);
        }
    },delay);
}

// const changeSection = (newSection)=>{
//     document.querySelector(`#${currentSection}`).className = 'hide';
//     document.querySelector(`#${newSection}`).className = 'show';

//     currentSection = newSection;
// }