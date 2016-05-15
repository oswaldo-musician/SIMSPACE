#pragma strict
private var velAngular:float;
function Start () {
	velAngular = Random.Range(1,1);
}

function Update () {
	transform.Rotate(0,-velAngular*Time.deltaTime,0);
}