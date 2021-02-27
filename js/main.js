// // Variables

// const fov = 60;
// let aspectRatio;
// const nearPoint = 1.0;
// const farPoint = 1000.0;

// if (window.innerWidth >= 1440) {
//     aspectRatio = 745 / 425;
// } else if (window.innerWidth >= 1960) {
//     aspectRatio = 900 / 510;
// } else if (window.innerWidth >= 2560) {
//     aspectRatio = 1175 / 670;
// }

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//     fov,
//     aspectRatio,
//     nearPoint,
//     farPoint
// );
// const renderer = new THREE.WebGLRenderer({ antialias: false });

// // Renderer setting

// renderer.setPixelRatio(window.devicePixelRation);
// // if (window.innerWidth >= 1440) {
// //     renderer.setSize(745, 425);
// // } else if (window.innerWidth >= 1960) {
// //     renderer.setSize(900, 510);
// // } else if (window.innerWidth >= 2560) {
// //     renderer.setSize(1175, 670);
// // }

// // Adding renderer into the DOM

// document.querySelector('#renderer-container').appendChild(renderer.domElement);
// console.log(renderer.getSize());

// // Camera setting

// camera.position.set(0, 15, 50);

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

let scene,
    camera,
    renderer,
    controls,
    loader,
    ambientLight,
    hemisphereLight,
    pointLight1,
    pointLight2,
    pointLight1Helper,
    pointLight2Helper,
    axesHelper,
    rendererContainer;

function render() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        60,
        (window.innerWidth * 0.5) / (window.innerHeight * 0.7),
        1.0,
        1000.0
    );

    // axesHelper = new THREE.AxesHelper(100);
    // scene.add(axesHelper);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.7);

    document
        .querySelector('#renderer-container')
        .appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.maxPolarAngle = 1.35;
    controls.minPolarAngle = 1.35;

    camera.position.set(0, 20, 100);
    controls.update();

    loader = new FBXLoader();

    loader.load('../files/PEDESTRAL-2-WEB.fbx', (fbx) => {
        fbx.scale.multiplyScalar(0.31);
        fbx.rotation.x = -Math.PI / 2;
        fbx.position.set(0, 0, 0);
        scene.add(fbx);
    });

    hemisphereLight = new THREE.HemisphereLight(0x808080, 0xffffff, 6);
    scene.add(hemisphereLight);

    // ambientLight = new THREE.AmbientLight(0x9b9393, 0.5);
    // scene.add(ambientLight);

    pointLight1 = new THREE.PointLight(0x808080, 2);
    pointLight1.position.set(0, 20, 100);
    scene.add(pointLight1);

    pointLight2 = new THREE.PointLight(0x808080, 2);
    pointLight2.position.set(0, 20, -100);
    scene.add(pointLight2);

    animate();
}

function animate() {
    renderer.render(scene, camera);

    requestAnimationFrame(animate);
}

render();

rendererContainer = document.querySelector('#renderer-container');
