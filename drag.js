$('.box').resizable({
    handles: 'n,w,s,e',minWidth: 10,
    maxWidth: 4000
});

function colorSelected (element) {
    document.getElementById('wrapper').style.background = element.value
}