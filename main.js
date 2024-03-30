$(document).ready(function(){
    // Función para resaltar las etiquetas de entrada cuando se enfocan
    $(".contenedor-formularios").find("input").on("keyup blur focus", function (e) {
        var $this = $(this),
            label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if($this.val() === "") {
                label.removeClass("active highlight"); 
            } else {
                label.removeClass("highlight");   
            }   
        } else if (e.type === "focus") {
            if($this.val() === "") {
                label.removeClass("highlight"); 
            } else {
                label.addClass("highlight");
            }
        }
    });

    // Función para cambiar entre pestañas (iniciar sesión y registrarse)
    $(".tab a").on("click", function (e) {
        e.preventDefault();

        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        var target = $(this).attr("href");

        $(".contenido-tab > div").not(target).hide();
        $(target).fadeIn(600);
    });
});
//función header scrolling
window.addEventListener('scroll', function () {
    const header = document.getElementById('containerheader');
    const title = document.getElementById('titulo');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        title.style.opacity = '0';
    } else {
        header.classList.remove('scrolled');
        title.style.opacity = '1';
    }
});