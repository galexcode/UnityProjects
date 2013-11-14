#pragma strict

var target : Transform;
var turret : Transform;
var damp = 1.0;
var bullet : Transform;
var bulletSpawn: Transform;
var timer = 0.0;

function Start () {

}

function Update () {




//turret.transform.LookAt(target);

}

function OnTriggerStay (objectTriggered : Collider) 
{
	timer += Time.deltaTime;
	if (objectTriggered.transform ==  target)
	{
	
	var rotate = Quaternion.LookRotation(target.position - turret.position);
	turret.rotation = Quaternion.Slerp(turret.rotation, rotate, Time.deltaTime * damp);
	
	
	if (timer > 3.0)
	{
	
	Instantiate (bullet, bulletSpawn.position, bulletSpawn.rotation);
	timer = 0.0;
	
	}
	}

}