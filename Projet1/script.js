function valider(f,val){
	if(val == true){
		var nom = f.nom.value;
		var prenom = f.prenom.value;
		var email =  f.mail.value;
		var numCarte = f.numCarte.value;
		var cvc = f.cvc.value;
		var typeCarte = f.typeCarte.value;
		var nomCarte = f.nomCarte.value;
		var monthCarte = f.month.value;
		var yearCarte = f.year.value;
		var regex = [/^([a-zA-Z'àâéèêôùûçÀÂÉÈÔÙÛÇ[:blank:]-]{3,30})$/ , /^[0-9]{16}$/ , /^[0-9]{3}$/, /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i];
		
		sessionStorage.setItem('nom', nom);
		sessionStorage.setItem('prenom', prenom);
		sessionStorage.setItem('email', email);
		sessionStorage.setItem('numCarte', numCarte);
		
		if(!regex[3].test(email)) 
		{  
			alert("Email invalide!");
			return false; 
		}
		if(regex[0].test(nom)) 
		{  
			alert("Nom invalide!");
			return false; 
		}
		if(regex[0].test(prenom)) 
		{  
			alert("Prenom invalide");
			return false; 
		}
		if(!regex[1].test(numCarte)) 
		{  	
			alert("Numéro de carte invalide!");
			return false; 
		}
		if(!regex[2].test(cvc)) 
		{  
			alert("CVC invalide!");
			return false; 
		}
		if(regex[0].test(nomCarte)) 
		{  
			alert("Nom de la carte invalide!");
			return false; 
		}
		else
		{  
			return true;
		}
	}
	else{
		var prix = f.hidden1.value;
		var nbCommande = f.txtNombre.value;
			
		prix = prix * nbCommande;
		var tps = prix * 0.05;
		var tvq = prix * 0.09975;
			
		var total = prix + tvq + tps;
		
		sessionStorage.setItem('prix', total);
		sessionStorage.setItem('command', nbCommande);
			
		return total;
	}
};