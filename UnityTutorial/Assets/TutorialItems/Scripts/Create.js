#pragma strict

var mine : Transform;

function Start () {

}

function Update () {

if (Input.GetButtonDown("Fire1"))
{

	Instantiate(mine, transform.position, transform.rotation);

	Debug.Log("MINE CREATED NIGGA");
}

}