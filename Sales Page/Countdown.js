// countdown.js

function countdown() {
    var endDate = new Date("2023-06-30").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var timeLeft = endDate - now;
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        if (timeLeft < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Offer expired";
        }
    }, 1000);
}

countdown();
