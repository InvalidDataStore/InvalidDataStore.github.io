function txtFunction(whichtxt, newtxt){
    if (whichtxt < 6) {
        if (whichtxt > 0) {
            document.getElementById("txt" + whichtxt).innerHTML = newtxt;
        }
        else {
            console.log("there is only 1-5 text in this file, txt0 doesnt exist")
        }
    }
    else {
        console.log("there is only 1-5 text in this file, txt6 doesnt exist")
    }
}
