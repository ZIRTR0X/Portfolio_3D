let scene = document.querySelector('a-scene');
let plan = document.querySelector('a-plane');

/**
 * Function which create a project in the scene
 * @param {number} numProjects 
 * @param {string} commentaire 
 * @param {string} image 
 * @param {string} video 
 * @param {number} longueur 
 * @param {string} title 
 */
function createProject(numProjects, commentaire, image, video, longueur, title) {

    if(scene !== null && scene !== undefined){ 

        // ---------- CREATION OF THE IMAGE ----------
        let img = document.createElement('a-entity');
        img.setAttribute('id', 'img_' + numProjects);
        img.setAttribute('geometry', 'primitive: plane; width: 1; height: 0.5625');
        img.setAttribute('material', 'src: img/' + image);
        img.setAttribute('position', '8 0.02 ' + parseFloat(8+((numProjects-1)*6.5)));
        img.setAttribute('rotation', '-90 -90 0');
        img.setAttribute('scale', '1 1 1');
        let newimage = image.replace(/\s/, '');
        newimage = newimage.replace(/\./, '-');
        console.log(newimage);
        img.classList.add(newimage);
        scene.appendChild(img);
        // ---------- END OF IMAGE CREATION ----------

        // ---------- CREATION OF THE VIDEO ----------
        let panneau = document.createElement('a-entity');
        panneau.setAttribute('id', 'panneau_' + numProjects);
        panneau.setAttribute('class', 'panneaux');
        panneau.setAttribute('gltf-model', '#panneau-glb');
        panneau.setAttribute('position', '8 0 ' + parseFloat(8+((numProjects-1)*6.5)));
        panneau.setAttribute('rotation', '0 -90 0');
        panneau.setAttribute('event-listener', '');
        panneau.setAttribute('scale', '0.528 0.528 0.528');
        scene.appendChild(panneau);
        // ---------- END OF VIDEO CREATION ----------

        // ---------- CREATION OF THE TEXT ----------
        let titleOBJ = document.createElement('a-entity');
        titleOBJ.setAttribute('id', 'title_' + numProjects);
        titleOBJ.setAttribute('obj-model', 'obj: /obj/' + title);
        titleOBJ.setAttribute('position', '8.5 0.076 ' + parseFloat(9+((numProjects-1)*6.5)));
        titleOBJ.setAttribute('rotation', '0 -90 0');
        titleOBJ.setAttribute('scale', '0.5 0.5 0.5');
        scene.appendChild(titleOBJ);
        // ---------- END OF TEXT CREATION ----------

        // ---------- CREATION OF THE COMMENT ----------
        let description = document.createElement('a-text');
        description.setAttribute('id', 'description' + numProjects);
        description.setAttribute('class', 'description');
        description.setAttribute('position', '8.1 0.01 ' + parseFloat(8.9+((numProjects-1)*6.5)));
        description.setAttribute('rotation', '-90 -90 0');
        description.setAttribute('scale', '0.3 0.3 0.3');
        description.setAttribute('value', commentaire);
        description.setAttribute('color', '#FFF');
        scene.appendChild(description);
        // ---------- END OF COMMENT CREATION ----------

        // ---------- CREATION OF THE BUTTON ----------
        let play_button = document.createElement('a-entity');
        play_button.setAttribute('id', 'play_' + numProjects);
        play_button.setAttribute('class', 'play-button');
        play_button.setAttribute('gltf-model', '#play-glb');
        play_button.setAttribute('position', '8.1 0.2 ' + parseFloat(11+((numProjects-1)*6.5)));
play_button.setAttribute('animation__rotate', 'property: rotation; to: 0 720 0; dur: 8000; loop: true; easing: linear; dir: alternate');
play_button.setAttribute('animation__rotate1', 'property: rotation; to: 720 0 0; dur: 8000; loop: true; easing: linear; dir: alternate');
play_button.setAttribute('animation__rotate2', 'property: rotation; to: 0 0 720; dur: 8000; loop: true; easing: linear; dir: alternate');
        play_button.setAttribute('rotation', '0 -90 0');
        play_button.setAttribute('play-button-event', '');
        play_button.setAttribute('scale', '0.05 0.05 0.05');
        scene.appendChild(play_button);
        // ---------- END OF BUTTON CREATION ----------

        // ---------- CREATION OF SLABS ----------
        if(longueur !== 1){
            let dalle1 = document.createElement('a-entity');
            dalle1.setAttribute('id', 'dalle1-' + numProjects);
            dalle1.setAttribute('gltf-model', '#stone1-glb');
            dalle1.setAttribute('position', '8.1 -0.15 ' + parseFloat(12+((numProjects-1)*6.5)))
            dalle1.setAttribute('rotation', '0 0 0');
            dalle1.setAttribute('scale', '0.008 0.008 0.008');
            scene.appendChild(dalle1);

            let dalle2 = document.createElement('a-entity');
            dalle2.setAttribute('id', 'dalle2-' + numProjects);
            dalle2.setAttribute('gltf-model', '#stone1-glb');
            dalle2.setAttribute('position', '8 -0.15 ' + parseFloat(12.4+((numProjects-1)*6.5)))
            dalle2.setAttribute('rotation', '0 45 0');
            dalle2.setAttribute('scale', '0.008 0.008 0.008');
            scene.appendChild(dalle2);

            let dalle3 = document.createElement('a-entity');
            dalle3.setAttribute('id', 'dalle3-' + numProjects);
            dalle3.setAttribute('gltf-model', '#stone1-glb');
            dalle3.setAttribute('position', '8.1 -0.15 ' + parseFloat(12.8+((numProjects-1)*6.5)))
            dalle3.setAttribute('rotation', '0 90 0');
            dalle3.setAttribute('scale', '0.008 0.008 0.008');
            scene.appendChild(dalle3);

            let dalle4 = document.createElement('a-entity');
            dalle4.setAttribute('id', 'dalle4-' + numProjects);
            dalle4.setAttribute('gltf-model', '#stone1-glb');
            dalle4.setAttribute('position', '8 -0.15 ' + parseFloat(13.2+((numProjects-1)*6.5)))
            dalle4.setAttribute('rotation', '0 135 0');
            dalle4.setAttribute('scale', '0.008 0.008 0.008');
            scene.appendChild(dalle4);

            let dalle5 = document.createElement('a-entity');
            dalle5.setAttribute('id', 'dalle5' + numProjects);
            dalle5.setAttribute('gltf-model', '#stone1-glb');
            dalle5.setAttribute('position', '8.1 -0.15 ' + parseFloat(13.6+((numProjects-1)*6.5)))
            dalle5.setAttribute('rotation', '0 180 0');
            dalle5.setAttribute('scale', '0.008 0.008 0.008');
            scene.appendChild(dalle5);
        }
        // ---------- END OF SLABS CREATION ----------
    }
}

/**
 * Function that creates all the objects of the scene
 * @param {JSON} data 
 */
function createAllProjects(data) {
    let longueur = data.length;
    console.log(longueur);
    data.forEach(function(element){
        let array = Object.keys(element).map(function(key) {
            return [key, element[key]];
        });
        console.log(array);

        createProject(array[0][1], array[4][1], array[2][1], array[1][1], longueur, array[3][1],);
        longueur--;
    });
}

/**
 * Creationof the decoration of the scene
 */
if(scene !== null && scene !== undefined){
    // ---------- FOX ----------
    let fox = document.createElement('a-entity');
    fox.setAttribute('id', 'fox');
    fox.setAttribute('gltf-model', '#fox-glb');
    fox.setAttribute('position', '9.1 0.1 10.5');
    fox.setAttribute('rotation', '0 180 0');
    fox.setAttribute('scale', '0.05 0.05 0.05');
    scene.appendChild(fox);
    // ---------- FOX END ----------

    // ---------- Torii ----------
    let torii = document.createElement('a-entity');
    torii.setAttribute('id', 'torii');
    torii.setAttribute('gltf-model', '#torii-glb');
    torii.setAttribute('position', '10 0 10');
    torii.setAttribute('rotation', '0 -90 0');
    torii.setAttribute('scale', '0.1 0.1 0.1');
    scene.appendChild(torii);
    // ---------- TORII END ----------

    // ---------- FUJI ----------
    let fuji = document.createElement('a-entity');
    fuji.setAttribute('id', 'fuji');
    fuji.setAttribute('gltf-model', '#fuji-glb');
    fuji.setAttribute('position', '100 -0.05 50');
    fuji.setAttribute('rotation', '0 180 0');
    fuji.setAttribute('scale', '20 20 20');
    scene.appendChild(fuji);
    // ---------- FUJI END ----------

    // ---------- CLOUD ----------
    let cloud1 = document.createElement('a-entity');
    cloud1.setAttribute('id', 'cloud1');
    cloud1.setAttribute('gltf-model', '#cloud3-glb');
    cloud1.setAttribute('position', '52 10 10');
    cloud1.setAttribute('rotation', '0 90 0');
    cloud1.setAttribute('scale', '1 1 1');
    scene.appendChild(cloud1);

    let cloud2 = document.createElement('a-entity');
    cloud2.setAttribute('id', 'cloud2');
    cloud2.setAttribute('gltf-model', '#cloud1-glb');
    cloud2.setAttribute('position', '60 16 24');
    cloud2.setAttribute('rotation', '0 -90 0');
    cloud2.setAttribute('scale', '1 1 1');
    scene.appendChild(cloud2);

    let cloud3 = document.createElement('a-entity');
    cloud3.setAttribute('id', 'cloud3');
    cloud3.setAttribute('gltf-model', '#cloud3-glb');
    cloud3.setAttribute('position', '55 22 15');
    cloud3.setAttribute('rotation', '0 90 0');
    cloud3.setAttribute('scale', '1 1 1');
    scene.appendChild(cloud3);

    let cloud4 = document.createElement('a-entity');
    cloud4.setAttribute('id', 'cloud4');
    cloud4.setAttribute('gltf-model', '#cloud2-glb');
    cloud4.setAttribute('position', '50 17 30');
    cloud4.setAttribute('rotation', '0 -90 0');
    cloud4.setAttribute('scale', '1.3 1.3 1.3');
    scene.appendChild(cloud4);

    let cloud5 = document.createElement('a-entity');
    cloud5.setAttribute('id', 'cloud5');
    cloud5.setAttribute('gltf-model', '#cloud3-glb');
    cloud5.setAttribute('position', '50 12 -10');
    cloud5.setAttribute('rotation', '0 90 0');
    cloud5.setAttribute('scale', '1.3 1.3 1.3');
    scene.appendChild(cloud5);

    let cloud6 = document.createElement('a-entity');
    cloud6.setAttribute('id', 'cloud6');
    cloud6.setAttribute('gltf-model', '#cloud1-glb');
    cloud6.setAttribute('position', '55 17 -5');
    cloud6.setAttribute('rotation', '0 -90 0');
    cloud6.setAttribute('scale', '1.3 1.3 1.3');
    scene.appendChild(cloud6);

    let cloud7 = document.createElement('a-entity');
    cloud7.setAttribute('id', 'cloud7');
    cloud7.setAttribute('gltf-model', '#cloud2-glb');
    cloud7.setAttribute('position', '60 25 -3');
    cloud7.setAttribute('rotation', '0 90 0');
    cloud7.setAttribute('scale', '1.3 1.3 1.3');
    scene.appendChild(cloud7);

    let cloud8 = document.createElement('a-entity');
    cloud8.setAttribute('id', 'cloud8');
    cloud8.setAttribute('gltf-model', '#cloud1-glb');
    cloud8.setAttribute('position', '55 20 40');
    cloud8.setAttribute('rotation', '0 90 0');
    cloud8.setAttribute('scale', '1 1 1');
    scene.appendChild(cloud8);

    let cloud9 = document.createElement('a-entity');
    cloud9.setAttribute('id', 'cloud9');
    cloud9.setAttribute('gltf-model', '#cloud4-glb');
    cloud9.setAttribute('position', '50 17 45 ');
    cloud9.setAttribute('rotation', '0 -90 0');
    cloud9.setAttribute('scale', '1 1 1');
    scene.appendChild(cloud9);

    let cloud10 = document.createElement('a-entity');
    cloud10.setAttribute('id', 'cloud10');
    cloud10.setAttribute('gltf-model', '#cloud1-glb');
    cloud10.setAttribute('position', '60 15 55');
    cloud10.setAttribute('rotation', '0 90 0');
    cloud10.setAttribute('scale', '1.4 1.4 1.4');
    scene.appendChild(cloud10);

    let cloud11 = document.createElement('a-entity');
    cloud11.setAttribute('id', 'cloud11');
    cloud11.setAttribute('gltf-model', '#cloud3-glb');
    cloud11.setAttribute('position', '55 28 51');
    cloud11.setAttribute('rotation', '0 90 0');
    cloud11.setAttribute('scale', '1.4 1.4 1.4');
    scene.appendChild(cloud11);

    let cloud12 = document.createElement('a-entity');
    cloud12.setAttribute('id', 'cloud12');
    cloud12.setAttribute('gltf-model', '#cloud4-glb');
    cloud12.setAttribute('position', '50 22 60');
    cloud12.setAttribute('rotation', '0 -90 0');
    cloud12.setAttribute('scale', '1.4 1.4 1.4');
    scene.appendChild(cloud12);

    let cloud13 = document.createElement('a-entity');
    cloud13.setAttribute('id', 'cloud13');
    cloud13.setAttribute('gltf-model', '#cloud2-glb');
    cloud13.setAttribute('position', '60 19 74');
    cloud13.setAttribute('rotation', '0 90 0');
    cloud13.setAttribute('scale', '1.4 1.4 1.4');
    scene.appendChild(cloud13);

    let cloud14 = document.createElement('a-entity');
    cloud14.setAttribute('id', 'cloud14');
    cloud14.setAttribute('gltf-model', '#cloud1-glb');
    cloud14.setAttribute('position', '55 15 80');
    cloud14.setAttribute('rotation', '0 90 0');
    cloud14.setAttribute('scale', '1.4 1.4 1.4');
    scene.appendChild(cloud14);

    let cloud15 = document.createElement('a-entity');
    cloud15.setAttribute('id', 'cloud15');
    cloud15.setAttribute('gltf-model', '#cloud4-glb');
    cloud15.setAttribute('position', '50 23 84');
    cloud15.setAttribute('rotation', '0 -90 0');
    cloud15.setAttribute('scale', '1.4 1.4 1.4');
    scene.appendChild(cloud15);

    let cloud16 = document.createElement('a-entity');
    cloud16.setAttribute('id', 'cloud16');
    cloud16.setAttribute('gltf-model', '#cloud2-glb');
    cloud16.setAttribute('position', '60 18 100');
    cloud16.setAttribute('rotation', '0 90 0');
    cloud16.setAttribute('scale', '1.4 1.4 1.4');
    scene.appendChild(cloud16);

    let cloud17 = document.createElement('a-entity');
    cloud17.setAttribute('id', 'cloud17');
    cloud17.setAttribute('gltf-model', '#cloud1-glb');
    cloud17.setAttribute('position', '55 32 110');
    cloud17.setAttribute('rotation', '0 90 0');
    cloud17.setAttribute('scale', '1.4 1.4 1.4');
    scene.appendChild(cloud17);

    let cloud18 = document.createElement('a-entity');
    cloud18.setAttribute('id', 'cloud18');
    cloud18.setAttribute('gltf-model', '#cloud3-glb');
    cloud18.setAttribute('position', '50 28 -20');
    cloud18.setAttribute('rotation', '0 90 0');
    cloud18.setAttribute('scale', '1.4 1.4 1.4');
    scene.appendChild(cloud18);

    let cloud19 = document.createElement('a-entity');
    cloud19.setAttribute('id', 'cloud19');
    cloud19.setAttribute('gltf-model', '#cloud2-glb');
    cloud19.setAttribute('position', '60 25 -25');
    cloud19.setAttribute('rotation', '0 -90 0');
    cloud19.setAttribute('scale', '1.4 1.4 1.4');
    scene.appendChild(cloud19);

    let cloud20 = document.createElement('a-entity');
    cloud20.setAttribute('id', 'cloud20');
    cloud20.setAttribute('gltf-model', '#cloud1-glb');
    cloud20.setAttribute('position', '55 30 -30');
    cloud20.setAttribute('rotation', '0 90 0');
    cloud20.setAttribute('scale', '1.4 1.4 1.4');
    scene.appendChild(cloud20);

    let cloud21 = document.createElement('a-entity');
    cloud21.setAttribute('id', 'cloud21');
    cloud21.setAttribute('gltf-model', '#cloud4-glb');
    cloud21.setAttribute('position', '50 15 -35');
    cloud21.setAttribute('rotation', '0 -90 0');
    cloud21.setAttribute('scale', '1.4 1.4 1.4');
    scene.appendChild(cloud21);
    // ---------- CLOUD END ----------

    // ---------- ENVIRONMENT START ----------
    let x_plane = plan.getAttribute('width');
    let y_plane = plan.getAttribute('height');

    let box = document.createElement('a-entity');
    box.setAttribute('id', 'env');
    scene.appendChild(box);

    for(let i = 10.5; i < x_plane; i++){
        // console.log(i);
        for(let j = -20; j < y_plane; j++){
            // console.log(j);
            let random = Math.random();
            let position;
            if(random >= 0.9){
                let random = Math.random();
                let randomRosition = Math.random()*400;

                if(random >= 0.5){
                    if(random >= 0.90){
                        let tree = document.createElement('a-entity');
                        tree.setAttribute('id', 'tree1');
                        randomx = Math.random();
                        randomy = Math.random();
                        if(Math.random() >= 0.5){
                            tree.setAttribute('gltf-model', '#tree1-glb');
                            position = parseFloat(i + randomx) + ' 0 ' + parseFloat(j + randomy);
                        }else{
                            tree.setAttribute('gltf-model', '#tree2-glb');
                            position = parseFloat(i + randomx) + ' 1 ' + parseFloat(j + randomy);
                        }
                        tree.setAttribute('rotation', '0 ' + randomRosition + ' 0');
                        tree.setAttribute('scale', '0.5 0.5 0.5');
                        
                        tree.setAttribute('position', position);
                        box.appendChild(tree);
                    }else{
                        let stone = document.createElement('a-entity');
                        stone.setAttribute('id', 'stone1');
                        stone.setAttribute('gltf-model', '#stone1-glb');
                        stone.setAttribute('rotation', '0 ' + randomRosition + ' 0');
                        stone.setAttribute('scale', '0.004 0.004 0.004');
                        randomx = Math.random();
                        randomy = Math.random();
                        position = parseFloat(i + randomx) + ' 0 ' + parseFloat(j + randomy);
                        stone.setAttribute('position', position);
                        box.appendChild(stone);
                    }
                }else{
                    let grass = document.createElement('a-entity');
                    grass.setAttribute('id', 'grass3');
                    grass.setAttribute('gltf-model', '#grass3-glb');
                    grass.setAttribute('rotation', '0 ' + randomRosition + ' 0');
                    grass.setAttribute('scale', '0.4 0.4 0.4');
                    randomx = Math.random();
                    randomy = Math.random();
                    position = parseFloat(i + randomx) + ' 0 ' + parseFloat(j + randomy);
                    grass.setAttribute('position', position);
                    box.appendChild(grass);
                }
            }
        }
    }
    // ---------- ENVIRONMENT END ----------
}

