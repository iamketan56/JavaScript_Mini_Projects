var vlaues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

const number1 = Math.floor(Math.random() * vlaues.length);
document.getElementById('number1').innerText = number1;
const number2 = Math.floor(Math.random() * vlaues.length);
document.getElementById('number2').innerText = number2;




var clickbtn = document.getElementById('btn');
clickbtn.addEventListener("click", function () {
   
    if (number1 + number2 == document.getElementById('in').value)
    {
        alert('Your Answer is correct');
    }
    else
    {
        alert('Your Answer is incorrect ...Correct Answer is ' + (number1+number2))
        }
    

});
