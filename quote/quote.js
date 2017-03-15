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
                console.log(response);
                document.getElementById("text").innerHTML = response.quoteText;
                document.getElementById("author").innerHTML = "--" + response.quoteAuthor;
                console.log($('#text'))
            }
        });
    }
    getNewQuote();
})