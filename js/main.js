// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

// // import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
// import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

// let scene,
//     camera,
//     renderer,
//     controls,
//     PedestalLoader,
//     artLoader,
//     monalisaLoader,
//     chairLoader,
//     spotLight,
//     spotLight2,
//     hemisphereLight,
//     pointLight1,
//     pointLight2,
//     pointLight1Helper,
//     pointLight2Helper,
//     axesHelper;

// const siteLoader = document.querySelector('.site-loader');

// function render() {
//     // INITIATING CONSTRUCTOR

//     scene = new THREE.Scene();
//     camera = new THREE.PerspectiveCamera(
//         60,
//         (window.innerWidth * 0.5) / (window.innerHeight * 0.7),
//         1.0,
//         1000.0
//     );

//     // axesHelper = new THREE.AxesHelper(200);
//     // scene.add(axesHelper);

//     renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.7);

//     renderer.toneMapping = THREE.ReinhardToneMapping;
//     renderer.toneMappingExposure = 0.5;

//     document
//         .querySelector('#renderer-container')
//         .appendChild(renderer.domElement);

//     // CONTROLS

//     controls = new OrbitControls(camera, renderer.domElement);

//     controls.enablePan = false;
//     controls.enableDamping = true;
//     controls.maxPolarAngle = 1.37;
//     controls.minPolarAngle = 1.37;
//     controls.enableZoom = false;

//     camera.position.set(0, 20, 100);
//     controls.update();

//     // LOADER

//     PedestalLoader = new FBXLoader();

//     PedestalLoader.load('../files/PEDESTRAL-2-WEB.fbx', (fbx) => {
//         fbx.scale.multiplyScalar(0.31);
//         fbx.rotation.x = -Math.PI / 2;
//         fbx.position.set(0, 0, 0);
//         scene.add(fbx);
//     });

//     artLoader = new FBXLoader();

//     artLoader.load('../files/ART-WEB.fbx', (fbx) => {
//         fbx.scale.multiplyScalar(0.3);
//         fbx.rotation.x = -Math.PI / 2;
//         fbx.position.set(85, 0, -25);
//         scene.add(fbx);
//     });

//     monalisaLoader = new FBXLoader();

//     monalisaLoader.load('../files/MONA-LISA-WEB.fbx', (fbx) => {
//         fbx.scale.multiplyScalar(0.3);
//         fbx.rotation.x = -Math.PI / 2;
//         fbx.rotation.z = -Math.PI / 2;
//         fbx.position.set(-100, -10, 0);
//         scene.add(fbx);
//     });

//     chairLoader = new FBXLoader();

//     chairLoader.load(
//         '../files/LOUNGE-CHAIR-WEB.fbx',
//         (fbx) => {
//             fbx.scale.multiplyScalar(0.3);
//             fbx.rotation.x = -Math.PI / 2;
//             fbx.position.set(5, 1, 5);
//             scene.add(fbx);
//         },
//         (xhr) => {
//             if ((xhr.loaded / xhr.total) * 100 === 100) {
//                 console.log('done');
//                 // siteLoader.style.opacity = 0;
//                 // siteLoader.style.display = 'none';
//             }
//         }
//     );

//     // LIGHTS

//     hemisphereLight = new THREE.HemisphereLight(0x292929, 0xffffff, 4);
//     scene.add(hemisphereLight);

//     spotLight = new THREE.SpotLight(0xd1c7be, 4);
//     spotLight.position.set(50, 25, 50);
//     spotLight.castShadow = true;
//     scene.add(spotLight);

//     spotLight2 = new THREE.SpotLight(0xd1c7be, 4);
//     spotLight2.position.set(-50, 25, -50);
//     scene.add(spotLight2);

//     // const spotLightHelper = new THREE.SpotLightHelper(spotLight);
//     // scene.add(spotLightHelper);

//     // const spotLight2Helper = new THREE.SpotLightHelper(spotLight2);
//     // scene.add(spotLight2Helper);

//     pointLight1 = new THREE.PointLight(0x808080, 2);
//     pointLight1.position.set(0, 50, 100);
//     scene.add(pointLight1);

//     // const pointLight1SphereSize = 5;
//     // const pointLight1Helper = new THREE.PointLightHelper(
//     //     pointLight1,
//     //     pointLight1SphereSize
//     // );
//     // scene.add(pointLight1Helper);

//     pointLight2 = new THREE.PointLight(0x808080, 2);
//     pointLight2.position.set(0, 50, -100);
//     scene.add(pointLight2);

//     // const pointLight2SphereSize = 5;
//     // const pointLight2Helper = new THREE.PointLightHelper(
//     //     pointLight2,
//     //     pointLight2SphereSize
//     // );
//     // scene.add(pointLight2Helper);

//     animate();
// }

// function animate() {
//     renderer.render(scene, camera);

//     requestAnimationFrame(animate);
// }

// render();

// GSAP Animation

gsap.registerPlugin(ScrollTrigger);

// const nav_timeline = gsap.timeline({
//     defaults: { duration: 0.7, reversed: true },
// });

const header_timeline = gsap.timeline({ defaults: { duration: 0.7 } });
const hero_title = document.querySelector('.hero-title');
const hero_subtitle = document.querySelector('.hero-subtitle');
const hero_cta = document.querySelector('.hero-cta');
const hero_get_app = document.querySelector('.get-app');
const hero_right_column = document.querySelector('.right-column');

const features_right_col = document.querySelectorAll('.feature');

const case_studies = document.querySelector('.case_studies');
const cases = document.querySelectorAll('.case');

const modal_timeline = new TimelineLite({ paused: true, reversed: true });
const contac_form_modal = document.querySelector('.contact-form-modal');
const modal_container = document.querySelector('.modal-container');
const contact = document.querySelector('.contact');
const footerContact = document.querySelector('.footer-contact');
const cancel = document.querySelector('.cancel');

header_timeline
    .to([hero_title, hero_subtitle, hero_cta, hero_get_app], {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: 'power1.in',
    })
    .to(
        hero_right_column,
        {
            scale: 1,
            opacity: 1,
            ease: 'power1.in',
        },
        0.5
    )
    .to(features_right_col, {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.feature-container',
            start: 'top center',
            end: 'bottom 120%',
            scrub: 3,
            // markers: true,
        },
    })
    .to(cases, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.cases',
            start: 'top 60%',
            end: 'center 75%',
            scrub: 3,
            // markers: true,
        },
    });

modal_timeline
    .to(contac_form_modal, 0.45, {
        display: 'block',
        opacity: 1,
        ease: 'power1.in',
    })
    .to(modal_container, 0.45, {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: 'power1.in',
    });

contact.addEventListener('click', (e) => {
    e.stopPropagation();
    modal_timeline.play();
});
footerContact.addEventListener('click', (e) => {
    e.stopPropagation();
    modal_timeline.play();
});
contac_form_modal.addEventListener('click', (e) => {
    e.stopPropagation();

    if (e.target.className === 'contact-form-modal') {
        modal_timeline.reverse();
    }
});
cancel.addEventListener('click', (e) => {
    e.stopPropagation();
    modal_timeline.reverse();
});
