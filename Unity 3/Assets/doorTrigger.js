var open : boolean;
var trigger : boolean;
var blocked : boolean;

var Smooth : float = 1.5;
var OpenAngle : float = 110.0;
var CloseAngle : float = 0.0;

var timer : int = 0;



function OnTriggerEnter (col : Collider) 
{
var controller : ThirdPersonController = col.GetComponent(ThirdPersonController);
if (controller != null)
{
if (!open)
trigger = true;
}

}

function OnTriggerStay (col : Collider) 
{
var controller : ThirdPersonController = col.GetComponent(ThirdPersonController);
if (controller != null)
{
blocked = true;

}
}

function OnTriggerExit (col : Collider) 
{
var controller : ThirdPersonController = col.GetComponent(ThirdPersonController);
if (controller != null)
{

blocked = false;

}
}


function Start () {}

function Update () {

if(trigger && !blocked && !open){
        var DoorOpen = Quaternion.Euler(0, OpenAngle, 0);
        transform.localRotation = Quaternion.Slerp(transform.localRotation, DoorOpen, Time.deltaTime * Smooth);
        

       timer++;
       if(timer >= 110) {
       	open = true;
       	trigger = false;
       }
} 


if(!trigger && !blocked && open){
       var DoorClosed = Quaternion.Euler(0, CloseAngle, 0);
       transform.localRotation = Quaternion.Slerp(transform.localRotation, DoorClosed, Time.deltaTime * Smooth);

timer--;
if(timer <= 15)
open = false;

}

}