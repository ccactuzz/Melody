$(document).ready(function () {
    var currentFlor = 2;
    var CounterUp = $(".counter-up");
    var CounterDown = $(".counter-down");
    var florPath = $(".home-image path");
   florPath.on("mouseover",function() {
     currentFlor = $(this).attr('data-flor');
     florPath.removeClass('current-flor')
     $(".counter").text(currentFlor)
   });
   CounterUp.on("click",function(){
   if ( currentFlor < 18){
    currentFlor++;
    usCurrentFlor = currentFlor.toLocaleString("en-US",{ minimumIntegerDigits: 2,
    useGroupping: false});
    $(".counter").text(usCurrentFlor);
    florPath.removeClass('current-flor')
    $(`[data-flor=${usCurrentFlor}]`).toggleClass("current-flor");
   }

   });
   CounterDown.on("click",function(){
    if (  currentFlor > 2 ){
     currentFlor--;
     usCurrentFlor = currentFlor.toLocaleString("en-US",{ minimumIntegerDigits: 2,
     useGroupping: false});
     florPath.removeClass('current-flor')
     $(`[data-flor=${usCurrentFlor}]`).toggleClass("current-flor");
     $(".counter").text(usCurrentFlor);
    }
    });
});