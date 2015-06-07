//just a bunch of throw away function that make it easy to debug from the developer console

function point (position, color, size) {
	var colors = {
		'red': 0xFF0000,
		'green': 0x00FF00,
		'blue': 0x0000FF,
		'white': 0xFFFFFF,
	};

	size = size || 0.05;
	color = colors[color] || color || colors['white'];
	material = new THREE.MeshBasicMaterial( { color: color } );

	geometry = new THREE.BoxGeometry(size,size,size);
	mesh = new THREE.Mesh(geometry, material);
	mesh.position = position;
	view.scene.add(mesh);
}

function pointLatLon (lat,lon) {
	var cartesian = Sphere.toCartesian({lat:Sphere.toRadians(lat), lon: Sphere.toRadians(lon)});
	point(cartesian);
}

function great_circle (eulerPole, color, pointNum) {
	var pointNum = pointNum || 100;
	for(i=0;i<pointNum;i++) point(Sphere.getRandomPointAlongGreatCircle(eulerPole), color);
}