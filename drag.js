$('.box').resizable({
    handles: 'n,w,s,e',minWidth: 10,
    maxWidth: 4000
});

function colorSelected (element) {
    document.getElementById('wrapper').style.background = element.value
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  document.getElementById("wrapper").style.borderRadius = this.value+"px";
}