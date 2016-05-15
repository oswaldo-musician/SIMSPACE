#pragma strict
var mensaje="";
var valor:int=0;
public var camara:GameObject;
public var tierra:GameObject;
function Start () {

}

function Update () {
mensaje="";
}

function OnMouseExit()
{
valor=0;
}


function OnMouseOver(){
if(Input.GetMouseButtonUp(0)){
		if(name=='Sol')
		{
		valor = 1;
		}

		if(name=='Mercurio')
		{
		valor = 2;
		}

		if(name=='Venus')
		{
		valor = 3;
		}

		if(name=='Tierra')
		{
		valor = 4;
		}

		if(name=='Marte')
		{
		valor = 5;
		}
		if(name=='Jupiter')
		{
		valor = 6;
		}
}
}


	function OnGUI () {
		if(valor==1){
			mensaje='El Sol \n Esta ubicado a 140597870700 metros de la tierra \n Su diámetro es de 1392000km \n Su masa es de 1,9891X10^30 kg';
				}
		if(valor==2){
			mensaje='Mercurio \n Esta ubicado a 77000000 metros de la tierra \n Su diámetro es de 4879.4km \n Su masa es de 3.302X10^23 kg';
			}
		if(valor==3){
			mensaje='Venus \n Esta ubicado a 40000000 metros de la tierra \n Su diámetro es de 12103.6km \n Su masa es de 9.28X10^11 kg';
			GUI.Label (Rect (10, 10, 1000, 200), mensaje);
			}
		if(valor==4){
			mensaje='Tierra \n Vives aquí \n Su diámetro es de 13000km \n Su masa es de 5972X10^24 kg';
		}
		if(valor==5){
			mensaje='Marte \n Está ubicado a 149369930700km de la tierra \n Su diámetro es de 6794km \n Su masa es de 6,4815X10^24 kg';
		}
		if(valor==6){
			mensaje='Jupiter \n Está ubicado a 628730000km de la tierra \n Su diámetro es de 6794km \n Su masa es de 6,4815X10^24 kg';
		}
		GUI.Label (Rect (10, 10, 1000, 200), mensaje);
		if (GUI.Button (Rect (1200,520,100,60), "Iniciar el juego")) {
			camara.transform.position.x=tierra.transform.position.x;
			camara.transform.position.y=tierra.transform.position.y;
			camara.transform.position.z=-364.00;

			Application.LoadLevelAdditive("1");
   		 }
	}