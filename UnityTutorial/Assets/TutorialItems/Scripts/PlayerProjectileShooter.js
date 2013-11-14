#pragma strict

var bullet : Transform;

function Start () {

}

function Update () {

if(Input.GetKeyDown("space"))
{

Instantiate(bullet, transform.position, transform.rotation);

}

}