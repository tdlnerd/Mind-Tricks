var Pos : Vector3[];


function OnBecameInvisible () {
Move();
}

function Move() {
transform.position = Pos[Random.Range(0,Pos.Length)];
}