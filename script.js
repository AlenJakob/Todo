
  var input = document.querySelector(".input"),
      del = document.querySelector(".del"),
      click = document.querySelector(".click"),
      li = document.getElementsByClassName("item-list"),
      icon = document.querySelector(".fa-plus"),
      close = document.getElementsByClassName("close");

click.addEventListener("mouseover" , () =>{
  icon.style.color="deepskyblue";
});
click.addEventListener("mouseout" , () =>{
  icon.style.color="";
});
click.addEventListener("mousedown" , () =>{
  icon.classList.add("rotate")
});
click.addEventListener("mouseup" , () =>{
 setTimeout(function(){
    icon.classList.remove("rotate")
 },700)
});


  click.addEventListener("click", function() {
    // validateForm()
    moveOn();
  });
  input.addEventListener("keydown", e => {
   
 var code = e.keyCode || e.which;
    if (e.keyCode === 13) {   
      moveOn();
    }
  });
  function moveOn() {
    var input = document.querySelector(".input");
    var item = document.createElement("li");
    item.className = "item-list ";
    item.innerText = input.value;

var valueIn = document.getElementById("value-input").value;
 if (valueIn === '') {
    alert("You must write something!");
   return false;
  } 

    
    
    console.log(item);
    var ul = document.querySelector("ul");
    ul.appendChild(item);
    input.value = "";

    var dateSpan = document.createElement("span");    
    dateSpan.className = "fas fa-times close";
    item.appendChild(dateSpan);
    
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  }



