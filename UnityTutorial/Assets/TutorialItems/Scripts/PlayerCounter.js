#pragma strict

static var coinCounter = 0;
static var playerHealth = 3;

function Start () {

}

function Update () {

}

function OnCollisionEnter(collision : Collision){

if (collision.transform.name == ("Coin"))
{

coinCounter += 1;

}

else if (collision.transform.name == ("Enemy") && playerHealth >0)
{

playerHealth -= 1;

}

else if (collision.transform.name == ("Bullet(Clone)")&& playerHealth > 0)
{

playerHealth -= 1;

}

}