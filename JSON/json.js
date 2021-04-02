$(document).ready(function() {
    $.get(url, function(res) {
        console.log(res.data)
        var html_str = "";
        for(var i - 0; i < res.data.length; i++) {
        html_str += "<div class=''>";
        //any other html_str goes here
        html_str += "</div>";
        }
        $(".main").html(html_str);
    }, "json");
})