#pragma strict
var zmov :float;
var destruir:float=0.0f;
function Start () {
	zmov=Random.Range(-5,-20)*Time.deltaTime;
}

function Update () {
	gameObject.transform.Translate(0,0,zmov);
	destruir+=Time.deltaTime;
	if(destruir>5.0){
		Destroy(this.gameObject);
		Update();
	};
}