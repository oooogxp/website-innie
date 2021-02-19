import React, { Component } from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import ubuntuFont from '../assets/font/ubuntu_medium_regular.json';

class Three extends Component {
    // threejs code start
    componentDidMount() {

        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()

        /**
         * Textures
         */

        // const textureLoader = new THREE.TextureLoader()

        /**
         * Fonts - react에서는 fontLoader.parse() 를 사용하고 function 안에 TextBufferGeometry 넣는게 아니라 그냥 실행시킴
         */
        const fontLoader = new THREE.FontLoader()
        const fontFile = fontLoader.parse(ubuntuFont)

        const textGeometry = new THREE.TextBufferGeometry(
            'YOON JEONG IN', {
                font: fontFile,
                size: 0.4,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 4
            }
        )
        textGeometry.center()

        const textMaterial = new THREE.MeshMatcapMaterial()
        const text = new THREE.Mesh(textGeometry, textMaterial)
        scene.add(text)
        
        /**
         * Sizes
         */

        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        /**
         *  Camera
         */

         const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
         camera.position.x = 0
         camera.position.y = 0
         camera.position.z = 3
         scene.add(camera)

         window.addEventListener('resize', () =>
         {
             // Update sizes
             sizes.width = window.innerWidth
             sizes.height = window.innerHeight
         
             // Update camera
             camera.aspect = sizes.width / sizes.height
             camera.updateProjectionMatrix()
         
             // Update renderer
             renderer.setSize(sizes.width, sizes.height)
             renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
         })

        // Controls
        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true

         /**
          * Renderer
          */
        
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    

        /**
         * Animate
         */
        // const clock = new THREE.Clock()

        const tick = () => {
            // const elapsedTime = clock.getElapsedTime()
            
            // Update Controls
            controls.update()

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }
        tick()
    }
    // threejs code end
    render() {
        return(
            <div />
        );
    }
}

export default Three;