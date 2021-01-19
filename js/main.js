console.log('todo anda correcto');

        /* ------------------------------------
                   scrollreveal
        ------------------------------------- */

window.sr = ScrollReveal();

sr.reveal('.move-banner', {
    duration: 3000,
    origin: 'left',
    distance: '500px'
});

/* ------------------------------------
       Nav 
------------------------------------- */

var hide = true;

function toggleNav() {
    if (!this.hide) {
        hide = true;
        document.getElementById("nav").style.display = "none";
        return;
    }else{
        hide= false;
        document.getElementById("nav").style.display = "block";
        return;
    }
}

/* ------------------------------------
                   button top
------------------------------------- */
