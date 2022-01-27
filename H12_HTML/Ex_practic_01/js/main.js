import * as THREE from "https://threejs.org/build/three.module.js";
import { Planeta } from './planeta.js';

function main() {
  let sun, earth, mars, mercury, jupiter, venuse;

  const canvas = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({ canvas });

  const fov = 120;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  const scene = new THREE.Scene();
  {
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_negx_1024x1024.jpg",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_negx_1024x1024.jpg",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_negx_1024x1024.jpg",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_negx_1024x1024.jpg",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_negx_1024x1024.jpg",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_negx_1024x1024.jpg",
    ]);
    scene.background = texture;
  }
  scene.add(camera);
  camera.position.y = 20;
  camera.position.z=15;
  camera.rotation.x=-0.87;
  // Sun
  let sphereRadius = 1;
  let geometry = new THREE.SphereGeometry(sphereRadius);
  let texture = new THREE.TextureLoader().load("img/sun.jpg");
  let material = new THREE.MeshBasicMaterial({ map: texture });
  sun = new THREE.Mesh(geometry, material);
  scene.add(sun);
  //planets
  earth = new Planeta(scene, 1, "earth.jpg", 2, 3);
  mars = new Planeta(scene, 1.5, "mars.jpg", 2.1, 6);
  mercury = new Planeta(scene, 2, "mercury.jpg", 1.8, 12);
  jupiter = new Planeta(scene, 2.5, "jupiter.jpg", 1.2, 20);
  venuse = new Planeta(scene, 3, "venuse.jpg", 1.4, 25);

  console.log(earth);


  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width = (canvas.clientWidth * pixelRatio) | 0;
    const height = (canvas.clientHeight * pixelRatio) | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {
    time *= 0.001; // convert time to seconds

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    earth.axis.rotation.y = time * earth.speed;
    mars.axis.rotation.y = time * mars.speed;
    venuse.axis.rotation.y = time * venuse.speed;
    jupiter.axis.rotation.y = time * jupiter.speed;
    mercury.axis.rotation.y = time * mercury.speed;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

main();
