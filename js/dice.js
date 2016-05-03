var camera, scene, renderer, controls;
var geometry, material, mesh;
var count = 0;

function init() {
  scene = new THREE.Scene();
  var width = window.innerWidth;
  var height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
  camera.position.set(0, 200, 700);
  scene.add(camera);

  var light = new THREE.DirectionalLight(0xffffff, 1); // color, intensity
  light.position.set(1, 1, 1);
  scene.add(light);


  var spotlight = new THREE.SpotLight(0xffffff, 0.5); // color, intensity
  spotlight.position.set(500, 500, 500);
  spotlight.castShadow = true;

  // shadow map texture width in pixels
  spotlight.shadow.mapSize.width = 2000;
  // shadow map texture height in pixels
  spotlight.shadow.mapSize.height = 2000;

  // perspective shadow frustum near parameter
  spotlight.shadow.camera.near = 500;
  // perspective shadow frustum far parameter
  spotlight.shadow.camera.far = 2000;
  // perspective shadow frustum field of view parameter
  spotlight.shadow.camera.fov = 45;

  scene.add(spotlight);

  var helper = new THREE.CameraHelper(spotlight.shadow.camera);
  // scene.add(helper);

  // instantiate a texture loader
  var textureLoader = new THREE.TextureLoader();

  textureLoader.load('pokeball.png', function(texture) {
    material = new THREE.MeshLambertMaterial({map: texture});
    geometry = new THREE.CubeGeometry(100, 100, 100);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = 100;
    mesh.castShadow = true;
    scene.add(mesh);
  });
  //
  // textureLoader.load('images/marble-white.jpg', function(texture) {
  //   var planeGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
  //   var planeMaterial = new THREE.MeshLambertMaterial({map: texture, side: THREE.DoubleSide});
  //   var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  //   plane.rotation.x = Math.PI / -2;
  //   plane.receiveShadow = true;
  //   scene.add(plane);
  // });

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

if(count < 90) {
  mesh.rotation.y += 0.12;
  mesh.rotation.x += 0.12;
  count++;
} else {
    mesh.rotation.y += 0;
    mesh.rotation.x += 0;
  }

  controls.update();
}

init();
animate();
