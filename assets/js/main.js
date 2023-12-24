import * as THREE from 'three';

// Declaration of a new scene with Three.js
const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xbfd1e5);

// Camera & Renderer Configuration
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Setting lights in scene
const ambient_light = new THREE.AmbientLight(0xbda355);
const direction_light = new THREE.DirectionalLight(0xffffff, 1);
ambient_light.add(direction_light);
scene.add(ambient_light);

// Cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

function animate() {
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();