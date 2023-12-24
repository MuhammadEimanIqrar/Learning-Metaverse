import * as THREE from 'three';
import Movements from './movements';

// Declaration of a new scene with Three.js
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfd1e5);

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

// Setting up the plane in the Mertaverse
const geometry_space = new THREE.BoxGeometry(100, 0.2, 50);
const material_space = new THREE.MeshPhongMaterial({ color: 0xffffff });
const space = new THREE.Mesh(geometry_space, material_space);
scene.add(space);

// Geometry figure to be represented in the Metaverse: Cube
const geometry_cube = new THREE.BoxGeometry();
const material_cube = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry_cube, material_cube);
scene.add(cube);

// Geometry figure to be represented in the Metaverse: Cone
const geometry_cone = new THREE.ConeGeometry(5, 20, 32);
const material_cone = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cone = new THREE.Mesh(geometry_cone, material_cone);
cone.position.set(10, 5, 0);
scene.add(cone);

// Geometry figure to be represented in the Metaverse: Cone
const geometry_cylinder = new THREE.CylinderGeometry(5, 5, 5, 32);
const material_cylinder = new THREE.MeshBasicMaterial({ color: 0x0303fc });
const cylinder = new THREE.Mesh(geometry_cylinder, material_cylinder); scene.add(cylinder);
cylinder.position.set(-10, 5, 0);
scene.add(cylinder);

camera.position.set(10, 5, 40);

function animation_cube() {
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;
}

function animation_cone() {
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
}

function animation_cylinder() {
    cylinder.rotation.x += 0.01;
}

function animate() {
    animation_cube();
    animation_cone();
    animation_cylinder();

    requestAnimationFrame(animate);

    // Movement to the left
    if (Movements.isPressed(37)) {
        camera.position.x -= 0.5;
    }

    // Upward Movement
    if (Movements.isPressed(38)) {
        camera.position.x += 0.5;
        camera.position.y += 0.5;
    }

    // Movement to the right
    if (Movements.isPressed(39)) {
        camera.position.x += 0.5;
    }

    // Downward Movement
    if (Movements.isPressed(40)) {
        camera.position.x -= 0.5;
        camera.position.y -= 0.5;
    }

    camera.lookAt(space.position);
    renderer.render(scene, camera);
}
animate();