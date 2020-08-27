(function () {
    
    const elem = document.querySelector('.products__tshirts');
    const iso = new Isotope( elem, {
        itemSelector: '.products__content',
        filter: '.black'
});

    const controlls = document.querySelectorAll(".dot");
    const activeClass ="bord--active";
    controlls.forEach(function(control) {

        control.addEventListener("click", function(e) {
            e.preventDefault();

            const filterName = control.getAttribute("data-filter");

            controlls.forEach(function(link) {
                link.closest(".bord").classList.remove(activeClass);
            })

            control.closest(".bord").classList.add(activeClass);

            iso.arrange({
                filter: `.${filterName}`
            })
        
        })
    })

})();