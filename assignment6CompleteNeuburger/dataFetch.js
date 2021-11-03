$.getJSON('http://api.open-notify.org/astros.json', function(data) {
    
    data["people"].forEach(function (f){

        $("#names").append("<li>" + f["name"] + "</li>");
        $("#locations").append("<li>" + f["craft"] + "</li>");

    });

});