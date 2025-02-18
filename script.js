let circles = document.getElementsByClassName("circle");
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let lines = document.getElementsByClassName("prog-line");

prevBtn.disabled=true;

let circleArr = [...circles];
let linesArr = [...lines];

nextBtn.addEventListener("click" ,()=>{
	prevBtn.disabled=false;
	count++;
	for(let i = 0 ; i<circleArr.length ; i++){
		circleArr[count].classList.add("active");
		if(count===circleArr.length-1){
			nextBtn.disabled=true;
		}
	}

	for(let i = 0 ; i<linesArr.length ; i++){
		linesArr[count-1].classList.add("active");
	}
});

let newCount=5;
prevBtn.addEventListener("click" , () =>{
	newCount--;
	for(let i = 0 ; i<circleArr.length ; i++){
		for(let j =0 ; j<linesArr.length ; j++)
		if(newCount!=0){
		circleArr[newCount].classList.remove("active");
		}
		else{
			nextBtn.disabled = false;
		}
		linesArr[newCount].classList.remove("active");
		}
	
});


