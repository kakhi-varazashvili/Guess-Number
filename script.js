/*26/08/2022 - დავალება - მომხმარებელს შემოაქვს ინფუტიდან რიცხვები. 
ის ცდილობს გამოიცნოს კომპიუტერის მიერ დარენდომებული რიცხვი. 
როდესაც გამოიცნობს თამაში ჩერდება და ეწერება ცდების რაოდენობა. 
გამოცნობის შემდეგ ახალი ინფუტების შეტანა არ ხდება, 
თამაშის ახლდიან დასაწყებად უნდა გამოვიტანოთ რესტარტ ღილაკი.*/

var inp = document.querySelector("input")
var fname = 0;
var random = parseInt(Math.random()*20);
var result = document.querySelector(".win");
result.classList.add("correct");
function x(){
       
    if(inp.value==random){
        document.querySelector("input").disabled = true;
        // fname+=1
        result.innerHTML = "Bravo, you guessed it after "+(fname+1)+" attempts";
        // console.log("YES");  
    }
    else {
        console.log("Not found")
    }
    fname++
    console.log("input value: ",inp.value,"random: ",random, "Try: ",fname)
}

function restart(){
    document.querySelector("input").disabled = false;
    document.querySelector("input").value = "";
    result.innerHTML = "Start a new game :)";

    random = parseInt(Math.random()*20);
    fname=0;

}
