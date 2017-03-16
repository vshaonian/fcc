$(document).ready(function() {
    var quote;
    function getNewQuote() {
        $.ajax({
            url: 'http://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            success: function(response) {
                document.getElementById("text").innerHTML = response.quoteText;
                document.getElementById("author").innerHTML = "--" + response.quoteAuthor;
            }
        });
    }
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    $("#btn").click(function(){
        color = Math.floor(Math.random() * colors.length);
        $(".wrap").css("color",colors[color]);
        $("body").css("backgroundColor",colors[color]);
        $("#btn").css("backgroundColor",colors[color]);
        getNewQuote();
    })
    getNewQuote();
})