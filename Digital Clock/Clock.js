setInterval(function () {
    var currenttime = new Date();
    var hours = currenttime.getHours();
    var minutes = currenttime.getMinutes();
    var second = currenttime.getSeconds();
    var period = "AM"

    if (hours >= 12) {
        period = "PM"
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (second < 10) {
        second = "0" + second;
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    
    var clockTime = hours + ":" + minutes + ":" + second + " " + period;

    var clock = document.getElementById('clock');
    clock.innerText = clockTime;
}, 1000);

