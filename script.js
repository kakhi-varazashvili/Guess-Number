/*26/08/2022 - დავალება - მომხმარებელს შემოაქვს ინფუტიდან რიცხვები. 
ის ცდილობს გამოიცნოს კომპიუტერის მიერ დარენდომებული რიცხვი. 
როდესაც გამოიცნობს თამაში ჩერდება და ეწერება ცდების რაოდენობა. 
გამოცნობის შემდეგ ახალი ინფუტების შეტანა არ ხდება, 
თამაშის ახლდიან დასაწყებად უნდა გამოვიტანოთ რესტარტ ღილაკი.*/

var inp = document.querySelector("input")
var fname = 0;
var random = parseInt(Math.random()*100);
var result = document.querySelector(".win");
result.classList.add("correct");
function x(){
       
    if(inp.value==random){
        document.querySelector("input").disabled = true;
        result.innerHTML = "BRAVISSIMO, you guessed it after "+fname+" attempts";
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
    result.innerText = "";

}

    




