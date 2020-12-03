var d = new Date();
var weekdays = new Array(7);
weekdays[0] = "Sunday"
weekdays[1] = "Monday"
weekdays[2] = "Tuesday"
weekdays[3] = "Wednesday"
weekdays[4] = "Thrusday"
weekdays[5] = "Friday"
weekdays[6] = "Satday"
 
var date = new Date();
var weekdayquetos = new Array(7);
weekdayquetos[0] = "my favorite day!"
weekdayquetos[1] = "lets do this!"
weekdayquetos[2] = "worry less live more!"
weekdayquetos[3] = "do good work today!"
weekdayquetos[4] = "Friday Just called!"
weekdayquetos[5] = "Weekend is here!"
weekdayquetos[6] = "Time to party"

var n = weekdays[d.getDay()];
var n1 = weekdayquetos[date.getDay()];

var dispalyday = document.getElementById('day');
var displayquotes = document.getElementById('quotes')

dispalyday.innerText = n;
displayquotes.innerText = n1;
