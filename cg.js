var colors = generateRandom(6);

var squares = document.querySelectorAll(".square");
var rgb = document.querySelector("span");
var messageDisplay = document.querySelector("#message");
var reset = document.querySelector("#nc");
var easybtn = document.querySelector("#e");
var hardbtn = document.querySelector("#h");
var pickedColor = rand();
var mode = 6;
rgb.textContent = pickedColor;

for(var i=0 ; i < squares.length ; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
	var clickedColor = this.style.background;
	console.log(clickedColor);
	console.log(pickedColor);
	if(clickedColor === pickedColor)
		{	
			messageDisplay.textContent = "Correct";
			reset.textContent = "Play Again";
			changeColor(clickedColor);
		}
	else
		{
			messageDisplay.textContent = "Try Again!";
			this.style.background = "#232323"
		}
	});
}

function changeColor(color){
	for(var i=0 ; i < squares.length ; i++)
		squares[i].style.background = color;
}

function rand(){
	var r = Math.floor(Math.random() * colors.length);
	return colors[r];
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

function generateRandom(num){
	var arr = [];
	for(var i=0 ; i < num ; i++)
		arr.push(randomColor());
	return arr;
}

reset.addEventListener("click",function(){
	messageDisplay.textContent = "";
	reset.textContent = "New Colors";
	colors = generateRandom(mode);
	pickedColor = rand();
	rgb.textContent = pickedColor;
	for(var i=0 ; i < squares.length ; i++)
		squares[i].style.background = colors[i];
});

easybtn.addEventListener("click",function(){
	messageDisplay.textContent = "";
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	colors = generateRandom(3);
	pickedColor = rand();
	rgb.textContent = pickedColor;
	for(var i=0 ; i < squares.length ; i++)
		{
			if(colors[i])
				squares[i].style.background = colors[i];
			else
				squares[i].style.display = "none";
		}
	mode=3;
});

hardbtn.addEventListener("click",function(){
	messageDisplay.textContent = "";
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	colors = generateRandom(6);
	pickedColor = rand();
	rgb.textContent = pickedColor;
	for(var i=0 ; i < squares.length ; i++){
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
	}
	mode=6;	
});
