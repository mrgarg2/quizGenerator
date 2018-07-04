class studentQuestion{
    constructor(qId,name,options,correctAns){
        this.quesId = qId;
        this.name = name;
        this.options = options;
        this.correctAns = correctAns;
        this.answered = false;
        this.userResponse = null;
        this.isCorrect = null;
    }
    
    changeResponse(response){
        this.userResponse = response;
    }

    getOtherFields(userResponse,isCorrect,answered){
        this.userResponse = userResponse;
        this.isCorrect = isCorrect;
        this.answered = answered;
    }

}