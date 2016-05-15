#pragma strict
private var velAngular:float;
function Start () {
	velAngular = Random.Range(40,45);
}

function Update () {
	transform.Rotate(0,-velAngular*Time.deltaTime,0);
}