const teacherOperations = {

    add(teacherObj) {
        firebase.database().ref('teachers/' + teacherObj.teacherId).set(teacherObj);
    },

    search(teacherId) {
        var teachers = firebase.database().ref('teachers/' + teacherId);

        var pr = new Promise((resolve, reject) => {
            teachers.on('value', (snapshot) => {
                if(!snapshot){
                    reject('No Such Test Found');
                    return;
                }
                var response = snapshot.val();
                resolve(response);
            })
        })
        return pr;
    },

}