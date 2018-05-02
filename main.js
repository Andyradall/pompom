var duration = {};
var pomodoroDuration = 25; 

var startBtn = document.querySelector('.start-btn');
var unitTextEl = document.querySelector('.duration_unit');
var timerTextEl = document.querySelector('.duration_time');


startBtn.addEventListener('click', handleStartBtnClick);


function handleStartBtnClick(){
  startBtn.classList.add('invisible'); 
  unitTextEl.classList.add('invisible');
  

    // Start timer
var intervalObj = setInterval(handleInterval, 1000)
    timerTextEl.textContent = 'dkdkdkd';
}

function handleInterval(){
    console.log('test');
}

// 


// til mandag 
// 1. utforsk setInterval()
// 2. utforsk textContent
// 3. Lag en countdown ved hjelp av setInterval og .textContent

// 1. Lag et objekt som holder orden på tiden
// 2. Hente inn og lagre DOM elementer
// 3. Gjøre klart til at noe skal skje når man trykker start
// 4. Lag en funksjon som trigges når man trykker på start
// 5. Skjule start knappen når man trykker på den
// 6. Bruke setinterval() til å telle nedover hvert sekund
// 7. lage en funksjon som kalles hvert sekund og sendes inn i setingerval()
// 8. Lage en nedtellingsfunksjon
// 9. Lag en funksjon som viser det nye tallet
// 10. Lage en funksjon som kalles når nedtelling er ferdig
// 11. Lag en funksjon som resetter klokka, tekst og ui. 

/* Looper

function myFunction(a, b, limit) {
    var c = a + b; 
    console.log("the sum is: "+ c);
    
    if( c > limit){
        console.log('jeg er større enn '+limit)
    }else{
        console.log('jeg er mindre enn'+limit)
    }
}

myFunction(5, 10, 10);
*/