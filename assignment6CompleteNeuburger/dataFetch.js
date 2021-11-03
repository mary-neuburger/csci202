$.getJSON('https://mary-neuburger.github.io/csci202/assignment6CompleteNeuburger/astros.json', function(data) {
    
    data["people"].forEach(function (f){

        $("#names").append("<li>" + f["name"] + "</li>");
        $("#locations").append("<li>" + f["craft"] + "</li>");

    });

});
