#pragma strict




function Start () {

}

function Update () {

if (Input.GetButtonDown("Jump"))
{
	var newTarget = GameObject.FindWithTag("Cube").transform;
	GetComponent(Follow).target = newTarget;

}

}