// Inclure la bibliothèque Three.js
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r117/three.min.js"></script>

// Créer une scène
const scene = new THREE.Scene();

// Créer une caméra
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// Créer une lumière
const light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 1, 1, 1 ).normalize();
scene.add( light );

// Créer un renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Charger une texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load( 'path/to/texture.jpg' );

// Créer une sphère
const sphereGeometry = new THREE.SphereGeometry( 1, 32, 32 );
const sphereMaterial = new THREE.MeshStandardMaterial( { map: texture } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
scene.add( sphere );

// Dessiner la scène
function render() {
  requestAnimationFrame( render );
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render( scene, camera );
}
render();
