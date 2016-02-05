function tableMulti(){ 

	var Nombre = prompt("Entre le nombre de fois que vous voulez faire la multiplication.");
	var Multi = prompt("Entre le multiple que vous voulez voir!");
	var tableau = (Nombre);
	var valeur
	
	for(i=0;i<Nombre;i++){
		document.write(i * Multi + " ");
	}	
}

function calcu(){
	var exp = prompt("Entre une expression arithmetique ex: 2 + 2, Utiliser les symboles: * et / pour multiplier et diviser!");
	
	document.write(eval(exp));
}

function jeu(){
	var fin = false;
	var nbAleatoire = Math.floor((Math.random() * 20) + 1);
	while(fin === false){
		var nombre = prompt("Entre un nombre en 1 et 20");
		if((nombre<21)&&(nombre>0)){
			if(nombre < nbAleatoire){
				alert("Votre nombre est plus petit de celui que vous devez trouver!");
			}
			else if(nombre>nbAleatoire){
				alert("Votre nombre est plus grand de celui que vous devez trouver!");
			}
			else{
				alert("Bravo, vous avez trouve le bon nombre!");
				fin = true;
			}
		}
	}
}






