import * as THREE from "https://threejs.org/build/three.module.js";

function main() {

  const canvas = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({ canvas });

  const fov = 50;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 55;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 30;
  camera.position.y = 15;
  camera.rotation.x=-0.45;

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
  // Sun
  let sphereRadius = 1;
  let geometry = new THREE.SphereGeometry(sphereRadius);
  let texture = new THREE.TextureLoader().load("img/sun.jpg");
  let material = new THREE.MeshBasicMaterial({ map: texture });
  let sun = new THREE.Mesh(geometry, material);
  scene.add(sun);
  //Earth
  sphereRadius = 1;
  geometry = new THREE.SphereGeometry(sphereRadius);
  texture = new THREE.TextureLoader().load("img/earth.jpg");
  material = new THREE.MeshBasicMaterial({ map: texture });
  let earth = new THREE.Mesh(geometry, material);
  sun.add(earth);
  earth.position.z = 5;

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
    sun.rotation.y = time;
    earth.rotation.y = -time * 4;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

main();
