$(document).ready(function() {
    var computerArr = [],
      playerArr = [],
      strict = false,
      level = 0,currentStep = 0,madeMistake = false,
      greenSound, redSound, yellowSound, blueSound;

    greenSound = $("audio")[0];
    yellowSound = $("audio")[1];
    redSound = $("audio")[2];
    blueSound = $("audio")[3];

     function nextNum(){
      var randNum = Math.floor(Math.random() * 4);
      computerArr.push(randNum);
    }

    function computerAI() {
      var nextMove = computerArr[level];

      if (nextMove === 0) {
        greenLightOn();
        setTimeout(greenLightOut, 600);
      } else if (nextMove === 1) {
        redLightOn();
        setTimeout(redLightOut, 600);
      } else if (nextMove === 2) {
        yellowLightOn();
        setTimeout(yellowLightOut, 600);
      } else if (nextMove === 3) {
        blueLightOn();
        setTimeout(blueLightOut, 600);
      }
   
      console.log("This is the computer array : [" + computerArr+",]")
      

    } //end Of computerAI function

  
  function startGame(){
    $(".counter").text("LEVEL: "+ (level+1)+"");
        computerArr = [];
        playerArr = [];
        currentStep=0;
        level=0;
        $("#title").text("Simon Game");
        
        
       setTimeout( nextNum,300);
        console.log(computerArr);
        
        setTimeout(computerAI, 1500);
        
        madeMistake = false;
  }
  
    $("#start").click(function() {
      
     startGame();
       
      
    })

   $(".grid").on('click', function() {
    
     var click = $(this).attr("id");
  
     tileClicked(click);
     
    })

 
 function tileClicked(button) {
   
  var expect = computerArr[currentStep];
  console.log("currentStep: "+ currentStep);
  
   
  if (button == expect) {
    currentStep++;
    playerArr.push(button);//continue
    console.log(playerArr, currentStep);
    
        var correctSequence = playerArr.length == computerArr.length;
        if (correctSequence) {
            nextNum();
            setTimeout(showMoves,1200);
            level++;
          if(level == 19){
            alert("Well done, you have just completed the simon game!!, press start to go again.");
            start = false;
          }
            var counter = $(".counter").text("LEVEL: "+ (level + 1) +"");
            currentStep=0;
            clearPlayerArr();
        }
    
  } 
   
   
   
   else {
    
    if (strict) {
      return gameOver();
    }
    else { 
          if(madeMistake == false){
            $("#title").text("Try again one more time");
            madeMistake = true;
            clearPlayerArr();
            currentStep = 0;
          function text(){
            $("#title").text("Simon Game");
          }
            setTimeout(text, 1000);
              setTimeout(repeatMistakePattern, 1500);
          } 
      else {
            return gameOver();
          }
    }
  }
 
    
}    
           
        


    function blueLightOut() {
      $("#3").removeClass("active");
    }

    function yellowLightOut() {
      $("#2").removeClass("active");
    }

    function redLightOut() {
      $("#1").removeClass("active");
    }

    function greenLightOut() {
      $("#0").removeClass("active");

    }

    function blueLightOn() {
      $("#3").addClass("active");
      blueSound.play();
    }

    function yellowLightOn() {
      $("#2").addClass("active");
      yellowSound.play();
    }

    function redLightOn() {
      $("#1").addClass("active");
      redSound.play();
    }

    function greenLightOn() {
      $("#0").addClass("active");
      greenSound.play();

    }

    function clearPlayerArr(){
    playerArr = [];
  }
  
  
  function showMoves() {
  var i = 0;
  var moves = setInterval(function(){
    if (computerArr[i] === 0) {
            greenLightOn();
            setTimeout(greenLightOut, 600);
          } else if (computerArr[i] === 1) {
            redLightOn();
            setTimeout(redLightOut, 600);
          } else if (computerArr[i] === 2) {
            yellowLightOn();
            setTimeout(yellowLightOut, 600);
          } else if (computerArr[i] === 3) {
            blueLightOn();
            setTimeout(blueLightOut, 600);
          }
    i++;
    if (i >= level ) {
      clearInterval(moves);
      setTimeout(computerAI,1000);
      }
    
  }, 1000)
  
}
  
  $("#0").click(function(){
    
     greenSound.play();
  })
  $("#1").click(function(){
    redSound.play();
  })
  $("#2").click(function(){
    yellowSound.play();
  })
  $("#3").click(function(){
    blueSound.play();
  })
  
  
  function gameOver(){
    $("#title").html("Game over, it will start again");
    level=0;
    $(".counter").text("LEVEL : "+ (level+1)+"");
    clearPlayerArr();
    computerArr=[];
    start = false;
    currentStep = 0;
    setTimeout(startGame,500);
    
    
    }
  
  $("#strict").click(function(){
    
    if (strict== true){
      strict = false;
      $("#strict").removeClass("btn-primary");
      console.log(strict);
      
    }else{
    
    $("#strict").addClass("btn-primary");
      strict = true;
      console.log(strict);
    } 
  })
function repeatMistakePattern(){
  
  var i = 0;
  var moves = setInterval(function(){
    if (computerArr[i] === 0) {
            greenLightOn();
            setTimeout(greenLightOut, 600);
          } else if (computerArr[i] === 1) {
            redLightOn();
            setTimeout(redLightOut, 600);
          } else if (computerArr[i] === 2) {
            yellowLightOn();
            setTimeout(yellowLightOut, 600);
          } else if (computerArr[i] === 3) {
            blueLightOn();
            setTimeout(blueLightOut, 600);
          }
    i++;
    if (i >= level ) {
      clearInterval(moves);
      setTimeout(computerAI,1000);
      }
    
  }, 1000)
  
  
  
}
  
  }) // end of document model
