import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

// import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

let scene,
    camera,
    renderer,
    controls,
    loader,
    spotLight,
    spotLight2,
    hemisphereLight,
    pointLight1,
    pointLight2,
    pointLight1Helper,
    pointLight2Helper,
    axesHelper;

function render() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        60,
        (window.innerWidth * 0.5) / (window.innerHeight * 0.7),
        1.0,
        1000.0
    );

    // axesHelper = new THREE.AxesHelper(200);
    // scene.add(axesHelper);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.7);

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.7;

    document
        .querySelector('#renderer-container')
        .appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);

    controls.enablePan = false;
    controls.enableDamping = true;
    controls.maxPolarAngle = 1.37;
    controls.minPolarAngle = 1.37;
    controls.enableZoom = false;

    camera.position.set(0, 20, 100);
    controls.update();

    loader = new FBXLoader();

    loader.load('../files/PEDESTRAL-2-WEB.fbx', (fbx) => {
        fbx.scale.multiplyScalar(0.31);
        fbx.rotation.x = -Math.PI / 2;
        fbx.position.set(0, 0, 0);
        scene.add(fbx);
    });

    hemisphereLight = new THREE.HemisphereLight(0x292929, 0xffffff, 4);
    scene.add(hemisphereLight);

    spotLight = new THREE.SpotLight(0xd1c7be, 4);
    spotLight.position.set(50, 25, 50);
    scene.add(spotLight);

    spotLight2 = new THREE.SpotLight(0xd1c7be, 4);
    spotLight2.position.set(-50, 25, -50);
    scene.add(spotLight2);

    // const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    // scene.add(spotLightHelper);

    // const spotLight2Helper = new THREE.SpotLightHelper(spotLight2);
    // scene.add(spotLight2Helper);

    pointLight1 = new THREE.PointLight(0x808080, 2);
    pointLight1.position.set(0, 0, 50);
    scene.add(pointLight1);

    pointLight2 = new THREE.PointLight(0x808080, 2);
    pointLight2.position.set(0, 0, -50);
    scene.add(pointLight2);

    animate();
}

function animate() {
    renderer.render(scene, camera);

    requestAnimationFrame(animate);
}

render();
