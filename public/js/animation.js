
/**
 * Function for close a panel
 * @param {Element} panneau 
 */
function closePanneau(panneau){
    panneau.classList.remove('panneau_open');
    panneau.classList.add('panneau_close');

    let id = panneau.id;
    let number = id.split('_')[1];

    let video = document.querySelector('#video_' + number);

    video.parentNode.removeChild(video);

    let img = document.querySelector('#img_' + number);
    let path = 'img/' + img.className.replace(/-/, '.');
    console.log(path);
    img.setAttribute('material', 'src: ' + path);

    img.setAttribute('animation__scale', 'property: scale; to: 1 1 1; dur: 1000; loop: false; easing: linear;');
    panneau.setAttribute('animation__scale', 'property: scale; to: 0.528 0.528 0.528; dur: 1000; loop: false; easing: linear;');

    
    img.setAttribute('animation__position', 'property: position; to: ' + parseFloat(panneau.getAttribute('position').x + 0.1) + ' 0.02 ' + panneau.getAttribute('position').z + '; dur: 1000; loop: false; easing: linear;');
    panneau.setAttribute('animation__position', 'property: position; to: ' + parseFloat(panneau.getAttribute('position').x + 0.1) + ' 0 ' + panneau.getAttribute('position').z + '; dur: 1000; loop: false; easing: linear;');
    

    panneau.setAttribute('animation__rotate', 'property: rotation; to: 0 -90 0; dur: 1000; loop: false; easing: linear;');
    img.setAttribute('animation__rotate', 'property: rotation; to: -90 -90 0; dur: 1000; loop: false; easing: linear;');
}

/**
 * Animation for the play button
 */
AFRAME.registerComponent("play-button-event", {
    init: function() {
        let id = this.el.id;
        let number = id.split('_')[1];
        this.el.addEventListener("click", function(e) {
            let panneau = document.querySelector('#panneau_' + number );
            let img = document.querySelector('#img_' + number );
            console.log('panneau_' + number);

            if(panneau.classList.contains('panneau_open')){
                
                closePanneau(panneau);
            
            }else{

                let panneaux = document.querySelectorAll('.panneau_open');
                panneaux.forEach(function(panneau){
                    closePanneau(panneau);
                });

                panneau.classList.remove('panneau_close');
                panneau.classList.add('panneau_open');

                let asset = document.querySelector('a-assets');

                let video = document.createElement('video');
                video.setAttribute('id', 'video_' + number);
                video.setAttribute('autoplay', 'false');
                video.setAttribute('loop', 'false');
                video.src = 'video/' + img.className.split("-")[0] + '.mp4';
                asset.appendChild(video);
                video.pause();
                img.setAttribute('material', 'src: #play-img');
                
                panneau.setAttribute('animation__rotate', 'property: rotation; to: 45 -90 0; dur: 1000; loop: false; easing: linear;');
                panneau.setAttribute('animation__position', 'property: position; to: ' + parseFloat(panneau.getAttribute('position').x-0.1) + ' 0.217 ' + panneau.getAttribute('position').z + '; dur: 1000; loop: false; easing: linear;');

                img.setAttribute('animation__rotate', 'property: rotation; to: -45 -90 0; dur: 1000; loop: false; easing: linear;');
                img.setAttribute('animation__position', 'property: position; to: ' + parseFloat(img.getAttribute('position').x-0.1) + ' 0.217 ' + img.getAttribute('position').z + '; dur: 1000; loop: false; easing: linear;');
            }
        });
        this.el.addEventListener("mouseenter", function(e) {
            e.target.setAttribute('scale', '0.06 0.06 0.06');
        });
        this.el.addEventListener("mouseleave", function(e) {
            e.target.setAttribute('scale', '0.05 0.05 0.05');
        });
    }
});

/**
 * Animation for panels
 */
AFRAME.registerComponent("event-listener", {
    init: function() {
        let id = this.el.id;
        let number = id.split('_')[1];
        let img = document.querySelector('#img_' + number );
        let camera = document.querySelector('a-camera');
        this.el.addEventListener("click", function(e) {

            if(e.target.classList.contains('panneau_open')){
                if(e.target.getAttribute('scale').x === 1.5){ 
                    let video = document.querySelector('#video_' + number);
                    video.pause();
                    img.setAttribute('material', 'src: #play-img');
                    e.target.setAttribute('animation__scale', 'property: scale; to: 0.528 0.528 0.528; dur: 1000; loop: false; easing: linear;');
                    img.setAttribute('animation__scale', 'property: scale; to: 1 1 1; dur: 1000; loop: false; easing: linear;');
                   
                    e.target.setAttribute('animation__rotate', 'property: rotation; to: 45 -90 0; dur: 1000; loop: false; easing: linear;');
                    img.setAttribute('animation__rotate', 'property: rotation; to: -45 -90 0; dur: 1000; loop: false; easing: linear;');
                    camera.setAttribute('animation__rotate', 'property: rotation; to: -24 -90 0; dur: 1000; loop: false; easing: linear;');

                    e.target.setAttribute('animation__position', 'property: position; to: ' + parseFloat(e.target.getAttribute('position').x) + ' 0.217 ' + e.target.getAttribute('position').z + '; dur: 1000; loop: false; easing: linear;');
                    img.setAttribute('animation__position', 'property: position; to: ' + parseFloat(img.getAttribute('position').x)+ ' 0.217 ' + img.getAttribute('position').z + '; dur: 1000; loop: false; easing: linear;');
                    camera.setAttribute('animation__position', 'property: position; to: 6.5 2 ' + parseFloat(e.target.getAttribute('position').z + 0.9)+ '; dur: 1000; loop: false; easing: linear;');

                }else{
                    let video = document.querySelector('#video_' + number);
                    img.setAttribute('material', 'src: #video_' + number);
                    video.play();

                    e.target.setAttribute('animation__scale', 'property: scale; to: 1.5  1.5 1.5; dur: 1000; loop: false; easing: linear;');
                    img.setAttribute('animation__scale', 'property: scale; to: 2.84 2.84 2.84; dur: 1000; loop: false; easing: linear;');
                    
                    e.target.setAttribute('animation__rotate', 'property: rotation; to: 90 -90 0; dur: 1000; loop: false; easing: linear;');
                    img.setAttribute('animation__rotate', 'property: rotation; to: 0 -90 0; dur: 1000; loop: false; easing: linear;');
                    camera.setAttribute('animation__rotate', 'property: rotation; to: 0 -90 0; dur: 1000; loop: false; easing: linear;');
                    
                    e.target.setAttribute('animation__position', 'property: position; to: ' + parseFloat(e.target.getAttribute('position').x) + ' 2.5 ' + e.target.getAttribute('position').z + '; dur: 1000; loop: false; easing: linear;');
                    img.setAttribute('animation__position', 'property: position; to: ' + parseFloat(img.getAttribute('position').x) + ' 2.5 ' + img.getAttribute('position').z + '; dur: 1000; loop: false; easing: linear;');
                    camera.setAttribute('animation__position', 'property: position; to: 6.424 2.5 ' + e.target.getAttribute('position').z + '; dur: 1000; loop: false; easing: linear;');
                }
            }
        });
    }
});

let state = true;

/**
 * Function which set the state of the mousewheel
 */
function setStateTrue(){
    state = true;
}

/**
 * Animation for the mousewheel
 */
window.addEventListener('mousewheel', function(e) {
    if(state){
        state = false;
        let camera = document.querySelector('a-camera');
        console.log('y: ' + e.deltaY + ', x: ' + e.deltaX + ', z: ' + e.deltaZ);
        let lastdescription = Array.from(
            document.querySelectorAll('.description')
        ).pop();
        
        console.log(' My position : ' + camera.getAttribute('position').z + ', last panneau : ' + lastdescription.getAttribute('position').z);
        if(e.deltaY > 0 && camera.getAttribute('position').z !== lastdescription.getAttribute('position').z){
            if(parseFloat(camera.getAttribute('position').z + 6.5) > lastdescription.getAttribute('position').z){
                camera.setAttribute('animation__position', 'property: position; to: ' + camera.getAttribute('position').x + ' ' + camera.getAttribute('position').y + ' ' + parseFloat(lastdescription.getAttribute('position').z) + '; dur: 1000; loop: false; easing: linear;');
                setStateTrue();
            }else{
                camera.setAttribute('animation__position', 'property: position; to: ' + camera.getAttribute('position').x + ' ' + camera.getAttribute('position').y + ' ' + parseFloat(camera.getAttribute('position').z + 6.5) + '; dur: 1000; loop: false; easing: linear;');
                setTimeout(setStateTrue, 1000);
            }
        }else{
            if(e.deltaY < 0){
                if(parseFloat(camera.getAttribute('position').z - 6.5) < 8.9){
                    camera.setAttribute('animation__position', 'property: position; to: ' + camera.getAttribute('position').x + ' ' + camera.getAttribute('position').y + ' 8.9; dur: 1000; loop: false; easing: linear;');
                    setStateTrue();
                }else{
                    camera.setAttribute('animation__position', 'property: position; to: ' + camera.getAttribute('position').x + ' ' + camera.getAttribute('position').y + ' ' + parseFloat(camera.getAttribute('position').z - 6.5) + '; dur: 1000; loop: false; easing: linear;');
                    setTimeout(setStateTrue, 1000);
                }
            }else{
                setStateTrue();
            }
        }
    }
});
