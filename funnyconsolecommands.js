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

console.log("type 'Cmds()' to check the current console commands! ");

function Cmds(){
    console.log("current commands:\n\ntxtFunction(whichtxt, newtxt)  -this command changes the text in the screen, it works like this: txtFunction(2, txthere) dont forget the parentheses. its like you were typing something to log in the console. console.log(-parenthese-txt-parenthese-).  the number is the order of the texts you see on the screen\n\n\nearbroken(number) - breaks your ears, the higher the number is. the stronger it is")
}

function earbroken(strong){
    let newtaco = 0;
    while (taco < strong) {
        onpressFunction()
        taco +=1
    }
    newtaco = 0;
}
