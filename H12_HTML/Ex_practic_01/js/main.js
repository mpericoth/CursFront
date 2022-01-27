import * as THREE from "https://threejs.org/build/three.module.js";

function main() {
  let sun, earth, mars, rotationEarth, rotationMars, rotationCamera;

  const canvas = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({ canvas });

  const fov = 50;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 55;
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
  //rotationEarth
  let sphereRadius = 0.1;
  let geometry = new THREE.SphereGeometry(sphereRadius);
  rotationEarth = new THREE.Mesh(geometry);
  scene.add(rotationEarth);
  //rotationMars
  sphereRadius = 0.1;
  geometry = new THREE.SphereGeometry(sphereRadius);
  rotationMars = new THREE.Mesh(geometry);
  scene.add(rotationMars);
  //rotationCamera
  sphereRadius = 0.1;
  geometry = new THREE.SphereGeometry(sphereRadius);
  rotationCamera = new THREE.Mesh(geometry);
  scene.add(rotationCamera);
  rotationCamera.add(camera);
  camera.position.z=25;
  // Sun
  sphereRadius = 1;
  geometry = new THREE.SphereGeometry(sphereRadius);
  let texture = new THREE.TextureLoader().load("img/sun.jpg");
  let material = new THREE.MeshBasicMaterial({ map: texture });
  sun = new THREE.Mesh(geometry, material);
  scene.add(sun);
  //Earth
  texture = new THREE.TextureLoader().load("img/earth.jpg");
  material = new THREE.MeshBasicMaterial({ map: texture });
  earth = new THREE.Mesh(geometry, material);
  rotationEarth.add(earth);
  earth.position.z = 5;
  //Mars
  texture = new THREE.TextureLoader().load("img/mars.jpg");
  material = new THREE.MeshBasicMaterial({ map: texture });
  mars = new THREE.Mesh(geometry, material);
  rotationMars.add(mars);
  mars.position.z = 8;

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
    rotationCamera.rotation.y = -time*0.2;
    sun.rotation.y = time * 0.5;
    earth.rotation.y = -time * 10;
    mars.rotation.y = -time * 4;
    rotationEarth.rotation.y = time * 4;
    rotationMars.rotation.x = time * 2;

    renderer.render(scene, camera);

    requestAnimationFrame(render);

  }
  requestAnimationFrame(render);
}

main();
