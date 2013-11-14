using UnityEngine;
using System.Collections;

public class Trigger : MonoBehaviour {

	float rotationVal;
	float rotation;
	bool moving;
	
	// Use this for initialization
	void Start () {
	   rotationVal = 0.25f;
	   rotation = rotationVal;
	   moving = false;
	}
	
	// Update is called once per frame
	void Update () {

		if (!moving) return;
			transform.Rotate(0,rotation,0,Space.Self);
		  if (transform.rotation.eulerAngles.y > 89.9){
			//transform.rotation.y = 90.0;
		    rotation = -rotationVal;
		  }
		  else if (transform.rotation.eulerAngles.y < 0.1){
			//transform.rotation.y =eulerAngles. 0.0;
			 rotation = rotationVal;
		  }	
	}
	


	void OnTriggerEnter(Collider other) {
	   if (moving)
			moving = false;
		else
			moving = true;

	}	
	void OnTriggerExit(Collider other) {
 	   moving = true;

	
	}
}