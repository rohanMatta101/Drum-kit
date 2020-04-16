document.addEventListener("keypress",function(event)
{
  if (event.key==="w")
  {
    var tom1=new Audio("tom-1.mp3");
    tom1.play();
    buttonanimation(event.key);
  }
  else if (event.key==="a")
  {
    var tom2=new Audio("tom-2.mp3");
    tom2.play();
    buttonanimation(event.key);
  }
  else if (event.key==="s")
  {
    var tom3=new Audio("tom-3.mp3");
    tom3.play();
    buttonanimation(event.key);
  }
  else if (event.key==="d")
  {
    var tom4=new Audio("tom-2.mp3");
    tom4.play();
    buttonanimation(event.key);
  }
  else if (event.key==="j")
  {
    var x=new Audio("snare.mp3");
    x.play();
    buttonanimation(event.key);
  }
  else if (event.key==="k")
  {
    var y=new Audio("crash.mp3");
    y.play();
    buttonanimation(event.key);
  }
  else if (event.key==="l")
  {
    var z=new Audio("kick-bass.mp3");
    z.play();
    buttonanimation(event.key);
  }


});
function buttonanimation(currentkey)
{
  var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function()
  {
    activebutton.classList.remove("pressed");
  },100);
}
