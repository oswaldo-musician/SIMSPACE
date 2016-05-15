#pragma strict
private var velAngular:float;
function Start () {
	velAngular = Random.Range(-3,-7);
}

function Update () {
	transform.Rotate(0,velAngular*Time.deltaTime,0);
}