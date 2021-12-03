var testCount = localStorage.getItem("testCount") || 0;

window.onload = function(){
    document.getElementById("SWSH001").innerHTML = testCount;
    if(testCount == 0){
        document.getElementById("SWSH001Image").style.opacity = 0.5;
    }
    else{
        document.getElementById("SWSH001Image").style.opacity = 1;
    }
}

function incrementCount(){
    testCount++;
    document.getElementById("SWSH001Image").style.opacity = 1;
    localStorage.setItem("testCount", testCount);
    document.getElementById("SWSH001").innerHTML = testCount;
}

function decrementCount(){
    if(testCount == 0){
        testCount = testCount;
    }
    if(testCount == 1){
        testCount--;
        document.getElementById("SWSH001Image").style.opacity = 0.5;
    }
    else{
        testCount--;
    }
    localStorage.setItem("testCount", testCount);
    document.getElementById("SWSH001").innerHTML = testCount;
}
