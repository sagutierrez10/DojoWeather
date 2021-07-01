// when the user clicks on a city display an alert
// clicking "I Accept" will dismiss the cookie policy message
// convert the temperatures when the <select> is changed


var degrees = document.querySelectorAll("h5 span,h6 span")

function swap(element){
    for (var i= 0; i< degrees.length; i++){
        var span= degrees[i];
        var currSpan = Number(span.innerText);

        if(element.value == '° C'){
            span.innerText = Math.round(((currSpan- 32) * (5/9)));
        }
        else if (element.value== '° F'){
            span.innerText = Math.round((currSpan * (9/5)) + 32);
        }        
    }
}

function hide(element){
    var messageElement = element.parentElement.parentElement;
    messageElement.remove();
}


// document.getElementById("nav-right").addEventListener("click", function(){
//     document.getElementsByClassName("popup")[0].classList.add ("active");

// });

// document.getElementById("dismiss-popup-btn").addEventListener("click", function(){
//     document.getElementsByClassName("popup")[0].classList.remove ("active");

// });
