function validateForm()
{

  var resultatFinal = 0;

  let reponseQ1 = document.getElementById("Q1").value.toLowerCase();

  if(reponseQ1 === "pied" || reponseQ1 === "le pied")
  {
    resultatFinal += 5;
    alert("Vous avez "+ resultatFinal +" points");
  }
  else
  {
    resultatFinal += 0;
    alert("Vous avez "+ resultatFinal+" points");
  }

    // enregistrer la réponse Q2 et ajouter les points si correcte
  let reponseQ2 = document.getElementById("Q2").value;
  // vérifier si réponse est bonne

  if (reponseQ2 === "24oeufs" )
  {
    resultatFinal += 5;
    alert("Vous avez "+ resultatFinal +" points");
  }
  else
  {
    resultatFinal += 0;
    alert("Vous avez"+ resultatFinal +" points");
  }

  let input3 = document.querySelector('input[name="question3"]:checked').value;
  if (input3 ==="40km")
  {
      resultatFinal += 5;
    alert("Vous avez"+ resultatFinal +" points");

  }
  else
  {
    resultatFinal += 0;
    alert("Vous avez "+ resultatFinal +" points");
  }
  const Ville =["montréal","Saguenay","Gatineau","Laval","Sherbrooke","Terrebonne","Québec","Drummondville","Longueuil"]
  for(Ville)

}
//Ce boutton réinitialise tout les champs et reset le resultat a ZERO
function resetForm()
{
  var reset = document.getElementById("Questionnaire");
  reset.reset();
}




















