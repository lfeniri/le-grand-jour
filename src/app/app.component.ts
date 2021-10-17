import { Component, ElementRef } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  camera;
  scene;
  renderer;
  isUserInteracting = false;
	lon = 0;
  lat = 0;
	phi = 0; 
  theta = 0;
	onPointerDownPointerX = 0;
  onPointerDownPointerY = 0;
  onPointerDownLon = 0;
  onPointerDownLat = 0;
  distance = 50;
  elem: any;
  container;
  constructor(ref: ElementRef) {
      this.elem = ref.nativeElement;
  }

  ngOnInit() {
      //this.aframe = this.elem.querySelector('a-scene');
      //this.init();
      //this.animate();
  }

  init() {

    this.container = this.elem.querySelector( '#container' );

    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );

    this.scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry( 500, 60, 40 );
    // invert the geometry on the x-axis so that all of the faces point inward
    geometry.scale( - 1, 1, 1 );

    const video = this.elem.querySelector('video');
    video.muted = true;
    video.play();

    const texture = new THREE.VideoTexture( video );
    const material = new THREE.MeshBasicMaterial( { map: texture } );

    const mesh = new THREE.Mesh( geometry, material );
    this.scene.add( mesh );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.container.appendChild( this.renderer.domElement );

    document.addEventListener( 'pointerdown', this.onPointerDown );
    document.addEventListener( 'pointermove', this.onPointerMove );
    document.addEventListener( 'pointerup', this.onPointerUp );

    //

    window.addEventListener( 'resize', this.onWindowResize );

  }

  onWindowResize() {

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( window.innerWidth, window.innerHeight );
  }

  onPointerDown = ( event ) => {

    this.isUserInteracting = true;

    this.onPointerDownPointerX = event.clientX;
    this.onPointerDownPointerY = event.clientY;

    this.onPointerDownLon = this.lon;
    this.onPointerDownLat = this.lat;

  }

  onPointerMove = ( event ) => {

    if ( this.isUserInteracting === true ) {

      this.lon = ( this.onPointerDownPointerX - event.clientX ) * 0.1 + this.onPointerDownLon;
      this.lat = ( this.onPointerDownPointerY - event.clientY ) * 0.1 + this.onPointerDownLat;

    }

  }

  onPointerUp = () => {

    this.isUserInteracting = false;

  }

  animate = () =>  {

    requestAnimationFrame( this.animate );
    this.update();

  }

  update() {

    this.lat = Math.max( - 85, Math.min( 85, this.lat ) );
    this.phi = THREE.MathUtils.degToRad( 90 - this.lat );
    this.theta = THREE.MathUtils.degToRad( this.lon );

    this.camera.position.x = this.distance * Math.sin( this.phi ) * Math.cos( this.theta );
    this.camera.position.y = this.distance * Math.cos( this.phi );
    this.camera.position.z = this.distance * Math.sin( this.phi ) * Math.sin( this.theta );

    this.camera.lookAt( 0, 0, 0 );

    this.renderer.render( this.scene, this.camera );

  }
  

  ngOnDestroy() {
  }
}
