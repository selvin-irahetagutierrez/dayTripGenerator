let places= ['Spain','Brazil','Mexico']
let randomPlace= places[Math.floor(Math.random()*places.length)];
alert('Your Random Location is:'+randomPlace);
let mx='Mexico'
if (randomPlace==mx){
    let mexicanFood=['tacos','torillas','enchiladas','verduras']
    let randomRestuarnt=mexicanFood[Math.floor(Math.random()*mexicanFood.length)];
    alert('Your Mexican Restuarnt is:'+randomRestuarnt);
}
let bra='Brazil'
if (randomPlace==bra){
    let braizlianFood=['bbq','moqueca','brigadeiors','verduras']
    let randomRestuarnt=braizlianFood[Math.floor(Math.random()*braizlianFood.length)];
    alert('Your brazilian Restuarnt is:'+randomRestuarnt);
}

let sp='Spain'
if (randomPlace==sp){
    let spainshFood=['paella','torillas de patata','pollo al ajillo','tortilla espanola']
    let randomRestuarnt=spainshFood[Math.floor(Math.random()*spainshFood.length)];
    alert('Your Spainsh Restuarnt is:'+randomRestuarnt);

}
let transportaion=['Bus','Train','Bike']
let yourtransport=transportaion[Math.floor(Math.random()*transportaion.length)]
alert('Your Transportaion is:'+yourtransport);

let entertainment=['A play','A concert','A soccer match','A national monument']
let yourentertainment=entertainment[Math.floor(Math.random()*entertainment.length)];
alert('Your entertainment for the day is:'+yourentertainment)
let userinput=prompt('Confirm Day Trip?');
if (userinput='yes') {
    alert ('Here is your summary')
    console.log('Summary',+ randomPlace, + yourtransport + yourentertainment)
} 
else if (userinput='no') {
    alert('Your')
    console.log('Ok')
}
