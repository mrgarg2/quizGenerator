class Test{
    constructor(testId,testName,testTime,questionScore,teacherId,teacherName){
        this.testId = testId;
        this.name = testName;
        this.time = testTime;
        this.questionScore = questionScore;
        this.teacherId = teacherId;
        this.teacherName = teacherName;
        this.questions = [];
    }

    addQuestion(questionObj) {
        this.questions.push(questionObj);
        console.log("QUestion addded successfully in test", this);
        console.log('Question List is', this.questions);
    }

    getMaxMarks(){
        this.maxMarks = 0;
        this.questions.forEach((ques)=>{
            this.maxMarks += this.questionScore; 
        })
    }
}