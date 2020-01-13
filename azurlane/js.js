(function(){
var **theVid** = document.getElementById("theVideo");
[].forEach.call(document.getElementsByClassName('btn'), function(btn) {
btn.addEventListener('click', function(e) {

switch (e.target.id){
case "btn1":
    <iframe 
	width="560" height="315" src="https://www.youtube.com/embed/lcAZiO9vqCQ" 
	frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
	picture-in-picture" allowfullscreen>
	</iframe>;
break;
case "btn2":
theVid.src = "mp4/Captain_Video02.mp4";	
break;
case "btn3":
console.log("button three selected!");
break;
case "btn4":
console.log("button four selected!");
break;
default:
console.log(e.target.id);
}
})
})
}())