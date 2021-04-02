$(document).ready(function(){
    $('.question').click(function(){
        $.get("https://opentdb.com/api.php?amount=10&category=15&type=multiple&encode=url3986", function (res){
            console.log('res.question')
        })
    })
    $('.choice[i]').click(function(){
        $.get("https://opentdb.com/api.php?amount=10&category=15&type=multiple&encode=url3986", function (res){
            console.log(res.answer)
        }, "json")
    })
})

