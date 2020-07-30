$(function() {

    // fixed header    vars --> header , offset , scrollPosition

    let header = $("#header");
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    let offset = 150;
    let scrollPosition = $(window).scrollTop();

    checkScroll(scrollPosition, offset);

    $(window).on("scroll", function(){
        scrollPosition = $(this).scrollTop();
        checkScroll(scrollPosition, offset);
    });

    function checkScroll(scrollPosition, offset) {
        if(scrollPosition >= offset) { 
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }      

    // nav toggle   vars --> nav , navToggle , header
    

    navToggle.on("click", function(event) {
        event.preventDefault();
        header.toggleClass("mobile");
        nav.toggleClass("show");
    });


    // smooth scroll

    $("[data-scroll]").on("click",function(event) {
        event.preventDefault();
    
        let elementID = $(this).data("scroll");
        let elementsOffset = $(elementID).offset().top;
    
        nav.removeClass("show");
    
        $("html, body").animate({
        scrollTop: elementsOffset - 95
        }, 700);
    
    });

    // reviews -> https://kenwheeler.github.io/slick/
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });
    

});