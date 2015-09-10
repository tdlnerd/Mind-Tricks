var Pos : Vector3[];

function Update () {
	if (GetComponent.<Renderer>().isVisible == false) {
	GetComponent.<Renderer>().enabled = false;
	gameObject.isStatic = false;
	transform.position = Pos[Random.Range(0,Pos.Length)];
		if (GetComponent.<Renderer>().isVisible == true) {
	}
	}
	else {
	gameObject.isStatic = true;
	}
}