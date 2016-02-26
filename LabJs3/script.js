var obj = {};

function valider(f){
		var nom = f.txtNom.value;
		var prenom = f.txtPrenom.value;
		var email =  f.txtEmail.value;
		var motdp = f.txtMDP.value;
		var uti = f.txtUti.value;
		var regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
		
		obj[uti] = motdp;
		
		return true;
};

function valider2(f){
	var util = f.txtUti.Value;
	var mdp = f.txtMDP.Value;
	
	if(obj.uti == mdp)
		alert("Vous vous etes bien connecte!!!");
	else
		alert("Vous vous etes pas connecte ou bien vous avez entre un mauvais mot de passe");
};
