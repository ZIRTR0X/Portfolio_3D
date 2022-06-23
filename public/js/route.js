/**
 * Function which reset all divs at is-unactive class
 */
function resetDiv(){
    let active_button = document.querySelectorAll('.is-active');
    active_button.forEach(function(button){
        button.classList.remove('is-active');
        button.classList.add('is-unactive');
    });
}

/**
 * Event of the view button
 */
let button_view = document.querySelector('#view-project');
if(button_view != null && button_view != undefined){
    button_view.addEventListener('click', function(){
        resetDiv();

        let project_div = document.querySelector('#three-div');
        project_div.classList.remove('is-unactive');
        project_div.classList.add('is-active');
    });
}

/**
 * Event of the exit button 
 */
let exit_button = document.querySelectorAll('.exit-button');
exit_button.forEach(function(button){
    button.addEventListener('click', function(){
        resetDiv();

        if(button === exit_button[0]){
            let accueil_div = document.querySelector('#accueil-div');
            accueil_div.classList.remove('is-unactive');
            accueil_div.classList.add('is-active');
        }
    });
});