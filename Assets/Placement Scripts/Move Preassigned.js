var Pos : Vector3[];

function Update () {
	if (GetComponent.<Renderer>().isVisible == false) {
	gameObject.isStatic = false;
	transform.position = Pos[Random.Range(0,Pos.Length)];
		if (GetComponent.<Renderer>().isVisible == true) {
		GetComponent.<Renderer>().enabled = false;
	}
	}
	else {
	gameObject.isStatic = true;
	GetComponent.<Renderer>().enabled = true;
	}
}