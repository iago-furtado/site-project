// The firts thisg that we goint to do is check to make sure that all the HTML is loaded. We do this to avoid any render bloking JavaScript
document.addEventListener('DOMContentLoaded', (loaded) => {
    
    // This will only be able to be seen in the console log. To check this inspect element in the browser and select the console tab
    console.log('Document is ready!!');

    // Change the text
    document.getElementById("ex1").innerHTML = "Available Now"
    document.getElementById("ex2").innerHTML = "Available Now"
    document.getElementById("ex3").innerHTML = "Coming Soon"
    document.getElementById("ex4").innerHTML = "Coming Soon"

    // Open new window when enter to buy the game
    function newPopup(){
        varWindow = window.open (
        'popup.html',
        'pahe',
        "width=350, height=255, top=100, left=110, scrollbars=no " );
    }
    
    //Javascript was also used in the submit button to change text.


    // Change color Read more
    function changeColor(){
        document.getElementById("about-1").style.color = "red";
    }

});