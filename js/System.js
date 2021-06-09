class System{

    constructor(){}

    // Add code to authenticate the given code and the access codes.
    authenticate(actualCode,enteredCode){
        fill("black");
        textSize(50);
        text(code,300,300);

        if(actualCode===enteredCode)
            return true
        else
            return false
    }


    

}