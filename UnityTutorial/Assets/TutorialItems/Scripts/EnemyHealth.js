#pragma strict

var enemyHealth = 5.0;
var destroyedParticles : Transform;

function Start () {

}

function Update () {

if (enemyHealth <= 0.0)
{
Instantiate(destroyedParticles, transform.position, transform.rotation);
Destroy(gameObject);

}

}

function OnCollisionEnter(projectileCollision : Collision)
{

if (projectileCollision.transform.name == ("Bullet(Clone)"))
{

enemyHealth -=1;

}

}