var color = ['red', 'blue', 'green', 'maroon', 'Teal', 'Sienna', 'Yellow','Blue','Black'];

var clickbtn = document.getElementById('btn');
clickbtn.addEventListener("click", function () {
    const acutal = Math.floor(Math.random() * color.length);

    document.getElementById("changer").style.backgroundColor = color[acutal] ;
    

});
