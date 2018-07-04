const testOperations = {

    getTests() {
        var tests = firebase.database().ref('test');

        var pr = new Promise((resolve, reject) => {
            tests.on('value', (snapshot) => {
                resolve(snapshot.val());
            })
        });
        return pr;
    },

    searchTestById(testId){
        var test = firebase.database().ref('test/' + testId);

        var pr = new Promise((resolve,reject)=>{
            test.on('value',(snapshot)=>{
                resolve(snapshot.val());
            });
        });
        
        return pr;
    },

    submitStudentTest(studentId,testObj){
        firebase.database().ref('students/' + studentId + '/tests/' + testObj.testId).set(testObj);
    },

    getStudentTests(studentId){
        var studentTests = firebase.database().ref('students/' + studentId +'/tests');

        var pr = new Promise((resolve,reject)=>{
            studentTests.on('value',(snapshot)=>{
                resolve(snapshot.val());
            })
        })

        return pr;
        
    }
}