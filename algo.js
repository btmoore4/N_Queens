var world = 0; 
var num = 0; 
var solnum = 0; 
var sol = []; 

//Main Run function of the webpage. 
//Controls the buttons and runs the Queens algorithm apporpriatly 
function run() {
		undraw();
		if ((num == 0) && (world == 0)){
				//Only runs the algo once per page load
		var Q = [0,0,0,0,0,0,0,0,0]; 
		console.log("Initialized"); 
		Queens(Q,1,8);
		console.log("Done"); 
		world = 1; 
		}
		//Allows user to iterate through the solutions
		draw(sol[num], 8); 
		console.log(num); 
		console.log(solnum); 
		num++;
		document.getElementById("soltext").innerHTML = "Solution " + num;
		if (num >= solnum)
				num = 0; 
};

//Standard solution for the N Queens Problem 
function Queens(Q,r,n) {
		if (r == n + 1){
				var P = Q.slice(); 
				sol.push(P); 
				solnum++;
		}else{
				for (var j=1; j < (n+1); j++){
						var legal = true; 	
						for (var i=1; i < (r+1); i++){
								if (Q[i] == j)
										legal = false; 
								if (Q[i]==(j+r-i))
										legal = false; 
								if (Q[i]==(j-r+i)) 
										legal = false; 
						}
						if (legal){
								Q[r] = j; 
								Queens(Q, r+1, n); 
						}else{
						}
				}
		}
		return;
};

//Called by the reset button
function clear_all() {
		num = 0;
		undraw();
		document.getElementById("soltext").innerHTML = "Click for Solutions";
		return; 
};

//Restores the chess board to original colors
function undraw() {

		var col1 = document.getElementsByClassName("col1");
		var col2 = document.getElementsByClassName("col2");
		for (var i = 0; i < col1.length; i++){
			col1[i].style.backgroundColor = "#107896";
		}
		for (var i = 0; i < col2.length; i++){
			col2[i].style.backgroundColor = "#f2f3f4";
		}
		return;
};

//draws the solution of the given solution array
function draw(Q, n) {
		console.log("drawing"); 
		for (i=0; i < (n); i++){
				var coord = ""; 
				coord = coord.concat("t");  
				coord = coord.concat(Q[i+1]);  
				//coord = coord.concat(i+1);  
				coord = coord.concat(".");  
				//coord = coord.concat(Q[i+1]);  
				coord = coord.concat(i+1);  
				console.log(coord); 
				var div = document.getElementById(coord);
				div.style.backgroundColor = '#c02f1d';
		}

};




