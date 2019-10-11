function aveargegrade() {
    const grade1 = parseInt(document.getElementById("grade1").value);
    const grade2 = parseInt(document.getElementById("grade2").value);
    const grade3 = parseInt(document.getElementById("grade3").value);

   let ans = (grade1 + grade2 + grade3)/3;
   
  
   document.getElementById('gradeaverage').innerHTML = ans;
   
    
 }
function clickCounter() {
if (typeof(Storage) !== "undefined") {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
    window.localStorage.setItem("localStorage.clickcount", localStorage.clickcount)
   } 
   else {
 localStorage.clickcount = 1;
}
document.getElementById("Grade-calculated").innerHTML =  localStorage.clickcount ;
} else {
document.getElementById("Grade-calculated").innerHTML = "Sorry, your browser does not support web storage...";
}
}

document.getElementById('button').addEventListener('click', aveargegrade);


console.log('get random quotes: AJAX fetch')

const url = "https://thesimpsonsquoteapi.glitch.me/quotes"
document.getElementById('simpbutt').addEventListener('mouseover', function() {
    fetch(url) //fetch is the simplifed version of xmlhttprequest
    .then((res) => { return res.json() }) //receiving returning response as JSON application
    .then((data) => {            // selecting which data retrieved from returned response to be displayed on html
        data.forEach((item) => {
            const { quote, character } = item
            const result = `Quote : "${quote}"  By : ${character}`
            document.getElementById('simpsons').innerHTML = result;
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error)); //logs in console whenever HTTP response error occurs (failed HTTP response handling)
    })
})
console.log('Script End')

/*const getAdvice = async () =>{
    const data = await fetch("https://api.adviceslip.com/advice")
    const json = await data.json()
    console.log(json.slip.advice)
    document.querySelector("#adviceField").innerHTML = json.slip.advice
}


document.querySelector('#advice').addEventListener('click', getAdvice)*/