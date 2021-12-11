window.onload = function(){
    var countersInit = document.getElementsByClassName("productUnique");
    var i;
    for(i = 0; i < countersInit.length; i++){
        var id = countersInit[i].childNodes[5].childNodes[3].id;
        countersInit[i].childNodes[5].childNodes[3].innerText = localStorage.getItem(id) || 0;
        localStorage.setItem(String(id), parseInt(countersInit[i].childNodes[5].childNodes[3].innerText))
        if(countersInit[i].childNodes[5].childNodes[3].innerText == "0"){
            countersInit[i].childNodes[1].style.opacity = 0.5;
        } 
    }
}

function incrementCount(element){
    var count = parseInt(element.parentNode.childNodes[3].innerText);
    count++;
    element.parentNode.parentNode.childNodes[1].style.opacity = 1;
    localStorage.setItem(String(element.parentNode.childNodes[3].id), count);
    element.parentNode.childNodes[3].innerText = count;
}

function decrementCount(element){
    var count = parseInt(element.parentNode.childNodes[3].innerText);
    if(count == 0){
        count = count;
    }
    else if(count == 1){
        count--;
        element.parentNode.parentNode.childNodes[1].style.opacity = 0.5;
    }
    else{
        count--;
    }
    localStorage.setItem(String(element.parentNode.childNodes[3].id), count);
    element.parentNode.childNodes[3].innerText = count;
}
