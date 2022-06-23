{{--
    Nom : Julien THÊME
    Année : 2022
    Mail : julientheme@gmail.com 
--}}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://unpkg.com/aframe-text-geometry-component@^0.5.0/dist/aframe-text-geometry-component.min.js"></script> 

    <link rel="stylesheet" href="{{ asset('css/style.css')}}">
    <title>Portfolio</title>
</head>
<body>
    {{-- <div id="onload-div" class="is-unactive">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <p>Page loading</p>
    </div> --}}
    <div id="accueil-div" class="is-unactive">
        <h1>Portfolio</h1>
        <div>
            {{-- <button id="add-project">Ajouter un projet</button> --}}
            <button id="view-project">Voir les projets</button>
            <a class="button-div" href="project">Ajouter un projet</a>
        </div>
    </div>

    <div id="three-div" class="is-unactive">
        <a-scene vr-mode-ui="enabled: false">
            <a-assets>
                <a-asset-item 
                    id="optimerBoldFont" 
                    src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/optimer_bold.typeface.json">
                </a-asset-item>
                <a-asset-item
                    id="torii-glb"
                    src="{{asset('model/simpleTorii.glb')}}"
                ></a-asset-item>
                <a-asset-item
                    id="grass3-glb"
                    src="{{asset('model/grass3.glb')}}"
                ></a-asset-item>
                <a-asset-item
                    id="stone1-glb"
                    src="{{asset('model/stone1.glb')}}"
                ></a-asset-item>
                <a-asset-item
                    id="tree1-glb"
                    src="{{asset('model/tree1.glb')}}"
                ></a-asset-item>
                <a-asset-item
                    id="tree2-glb"
                    src="{{asset('model/tree2.glb')}}"
                ></a-asset-item>
                {{-- <a-image
                    id="img1"
                    src="{{asset('img/minesweeper.png')}}"
                ></a-image> --}}
                <a-asset-item
                    id="panneau-glb"
                    src="{{asset('model/panneau.glb')}}"
                ></a-asset-item>
                <a-asset-item
                    id="play-glb"
                    src="{{asset('model/cube.glb')}}"
                ></a-asset-item>
                <a-asset-item
                    id="bamboo-glb"
                    src="{{asset('model/bamboo/scene.gltf')}}"
                ></a-asset-item>
                <a-asset-item
                    id="fox-glb"
                    src="{{asset('model/fox1.glb')}}"
                ></a-asset-item>
                <a-asset-item
                    id="fuji-glb"
                    src="{{asset('model/fuji.glb')}}"
                ></a-asset-item>
                <a-asset-item
                    id="cloud1-glb"
                    src="{{asset('model/cloud_1.glb')}}"
                ></a-asset-item>
                <a-asset-item
                    id="cloud2-glb"
                    src="{{asset('model/cloud_2.glb')}}"
                ></a-asset-item>
                <a-asset-item
                    id="cloud3-glb"
                    src="{{asset('model/cloud_3.glb')}}"
                ></a-asset-item>
                <a-asset-item
                    id="cloud4-glb"
                    src="{{asset('model/cloud_4.glb')}}"
                ></a-asset-item>
                <img
                    id="play-img"
                    src="{{asset('img/play.png')}}"
                    crossorigin="anonymous"
                >
            </a-assets>
            <a-plane
                position="50 0 50"
                rotation="-90 0 0"
                width="150"
                height="150"
                color="#3c6432"
                shadow="receive: true"
            ></a-plane>
            <a-camera
                position="6.5 2 8.9"
                rotation="-24 -90 0"
                look-controls="enabled: false"

                wasd-controls-enabled="false" 
                look-controls 
                aframe-injected="" 
                data-aframe-inspector-original-camera=""
            ></a-camera>
            <a-entity cursor="rayOrigin:mouse" raycaster="objects: .panneaux, .play-button" ></a-entity>
            <a-sky
                id="sky"
                radius="71"
                color="#5a9bc5"
                rotation="0 -130 0"
                position="50 0 50"
            ></a-sky>
            {{-- <a-entity
                svg="src: #text; proportionalScale: 2; extrude: 1; zFactor: 0.001;"
                position="0 2 -5">
            </a-entity> --}}
        </a-scene>
        <button class="exit-button">X</button>
    </div>
    
</body>
<script src="{{ asset('js/loader.js')}}"></script>
<script src="{{ asset('js/animation.js')}}"></script>
<script src="{{ asset('js/environment.js')}}"></script>
<script src="{{ asset('js/ajax.js')}}"></script>
<script src="{{ asset('js/route.js')}}"></script>
</html>