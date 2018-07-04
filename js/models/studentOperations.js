const studentOperations = {

    add(studentObj){
        firebase.database().ref('students/' + studentObj.studentId).set(studentObj);
        console.log('Student Registered Succesfully', studentObj);
    },

    search(id){
        var students = firebase.database().ref('students/' + id);

        var pr =  new Promise((resolve,reject)=>{
            students.on('value',(snapshot)=>{
                var studentObj = snapshot.val();
                if(studentObj){
                    resolve(studentObj)
                }
                else{
                    reject('No Student Found');
                }
                
            })
        })
        return pr;
    }
}