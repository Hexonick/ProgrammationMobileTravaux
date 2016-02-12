window.addEventListener("load", function(){
	j = 0;
	//Travail 1 ----------------------------
	document.getElementById("btnClick").addEventListener("click", function(){
		j++;
		document.getElementById("txt").innerHTML = "Vous avez clicque "+ j + " fois sur le bouton!";
	});
	
	//Travail 2 ----------------------------
	document.getElementById("btnAjouter").addEventListener("click", function(){
		var p = document.createElement("p");
		p.innerHTML = "J'ai reussit!!!!!";
		p.id = "para2";
		document.getElementById("trav2").appendChild(p);
	});
	
	//Travail 3 ----------------------------
	var ps = document.querySelectorAll('p');
	for(var i in ps)
	{
		ps[i].onclick = function()
		{
			this.parentNode.removeChild(this);
		}
	}
	
	//Travail 4 ----------------------------
	document.addEventListener("mousemove",function(e){
		document.getElementById("posMouse").innerHTML = "Positien en X : " + e.clientX + "</br>Position en Y : " + e.clientY;
	});

	//Travail 5 ----------------------------
	
});
