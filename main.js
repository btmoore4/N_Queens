var world = 1; 
function myFunction() {
		//undraw();
		var Q = [0,0,0,0,0,0,0,0,0]; 
		//var Q = [1,2,3,4,3,2,1,2]; 
		console.log("Hi"); 
		console.log(world); 
		Queens(Q,1,8);
		console.log("done"); 
}

function Queens(Q,r,n) {
		if (r == n + 1){
				draw(Q,n); 
				world++; 
				throw new Error("Something went badly wrong!");
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

function undraw() {
		for (var i=1; i<9;i++){
				for (var j=1; j<9; j++){
						var coord = ""; 
						coord = coord.concat("t");  
						coord = coord.concat(i);  
						coord = coord.concat(".");  
						coord = coord.concat(j);  
						console.log(coord); 
						var div = document.getElementById(coord);
						div.style.backgroundColor = 'blue';
				}

		}
};


function draw(Q, n) {
		console.log("drawing"); 
		for (i=0; i < (n); i++){
				var coord = ""; 
				coord = coord.concat("t");  
				coord = coord.concat(i+1);  
				coord = coord.concat(".");  
				coord = coord.concat(Q[i+1]);  
				console.log(coord); 
				var div = document.getElementById(coord);
				div.style.backgroundColor = 'red';
		}

};




