class studentTest{
    constructor(testId,testName,testTime,questionScore,teacherId,teacherName){
        this.testId = testId;
        this.testName = testName;
        this.testTime = testTime;
        this.questionScore = questionScore;
        this.teacherId = teacherId;

        this.questions = [];
        this.score = null;
        this.teacherName = teacherName;
        // this.feedBack;
        // this.result;
    }

    addQuestion(ques){
        this.questions.push(ques);
    }

    getQuestionById(quesId){
        return this.questions[quesId-1];
    }

    calcResult(){
        this.score = 0;

        this.questions.forEach((ques)=>{
            if(ques.correctAns == ques.userResponse){
                ques.isCorrect = true;
            }
            else{
                ques.isCorrect = false;
            }

            if(ques.isCorrect){
                this.score += 4
            }

        })
    }

    getOtherFields(score){
        this.score = score;
    }



}