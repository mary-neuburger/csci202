$(document).ready(function(){

    $("#pQ").click(function(){
        window.location.replace("https://youtu.be/dQw4w9WgXcQ");
    });

    $("#pG").click(function(){
        $("#pQ").hide();
        $("#pG").hide();
        $("#pN").hide();
        $("#pB").hide();
        $("#G").show();
        $("#R").show();
    });

    $("#pN").click(function(){
        $("#pQ").hide();
        $("#pG").hide();
        $("#pN").hide();
        $("#pB").hide();
        $("#N").show();
        $("#R").show();
    });

    $("#pB").click(function(){
        $("#pQ").hide();
        $("#pG").hide();
        $("#pN").hide();
        $("#pB").hide();
        $("#B").show();
        $("#R").show();
    });

    $("#R").click(function(){
        $("#pQ").show();
        $("#pG").show();
        $("#pN").show();
        $("#pB").show();
        $("#G").hide();
        $("#N").hide();
        $("#B").hide();
        $("#R").hide();
    });
});