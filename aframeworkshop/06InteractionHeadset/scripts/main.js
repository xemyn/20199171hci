var rotationSpeed = 0.1;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z += rotationSpeed/2;
	console.log(myOtherBox.object3D.rotation);
}
setInterval(spin, 20);
//
myOtherBox.addEventListener('mouseenter', function(){
	rotationSpeed = 0.01;
	console.log('entered');
});
//
myOtherBox.addEventListener('mouseleave', function(){
	rotationSpeed = 0.001;
	console.log('left');
});

var growspeed = 1.75;

function grow(){
	myOtherBox.object3D.scale.x *= growspeed;
	myOtherBox.object3D.scale.y *= growspeed;
	myOtherBox.object3D.scale.z *= growspeed;

	console.log(myOtherBox.object3D.scale);
}

myOtherBox.addEventListener('click', function(){ // uses a fuse
	grow();
	console.log('grew');
	rotationSpeed = 0.5; 
	material.color = "red"
});