import * as THREE from "https://threejs.org/build/three.module.js";

class Planeta {

    constructor(scene, radius, texture, speed, distance) {
        this.scene = scene;
        this.radius = radius;
        this.texture = texture;
        this.speed = speed;
        this.distance = distance;
        this.axis;
        let geometry;
        let planet;
        let material;

        function createAxis() {
            let sphereRadius = 0.1;
            let geometry = new THREE.SphereGeometry(sphereRadius);
            let rotation = new THREE.Mesh(geometry);

            return rotation;
        }
        geometry = new THREE.SphereGeometry(radius);
        texture = new THREE.TextureLoader().load("img/" + texture);
        material = new THREE.MeshBasicMaterial({ map: texture });
        planet = new THREE.Mesh(geometry, material);
        this.axis = createAxis();
        scene.add(this.axis);
        this.axis.add(planet);
        planet.position.z = distance;
    }

    
 

} export { Planeta };
