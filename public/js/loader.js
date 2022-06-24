/**
 * Function that waits for the page to load
 */
function pageLoading(){
    window.addEventListener('load', function(){
        let three_d = document.querySelector('#three-div');
        let onload_div = document.querySelector('#onload-div');
    
        three_d.classList.remove('is-unactive');
        three_d.classList.add('is-active');
    
        onload_div.classList.remove('is-active');
        onload_div.classList.add('is-unactive');
    
        createPortals();
        createIndication();
    });
}

pageLoading();