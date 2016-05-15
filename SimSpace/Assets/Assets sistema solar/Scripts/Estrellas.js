#pragma strict
public var estrellas:GameObject;
var randomvector:Vector3;
var contador=0;
function Start () {

}

function Update () {
	 randomvector = new Vector3(Random.Range(-550,550),Random.Range(-350,350),Random.Range(16,250));
		Instantiate (estrellas,randomvector,transform.rotation);
		contador++;
		if(contador>500){
			Destroy(gameObject);

		};
}