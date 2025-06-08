// js/main.js (Versi Tanpa Pemuat Header/Footer)

(function ($) {
    "use strict";

    // Fungsi untuk kirim form ke WhatsApp (dipindahkan dari contact.html)
    window.sendToWhatsApp = function(event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Ganti dengan nomor WhatsApp tujuan Anda
        const tujuan = "6281235810578";

        // Format pesan
        const fullMessage = `Halo, saya ${name} (%0AWhatsApp: ${phone}) ingin menghubungi Anda:%0A%0A${message}`;

        // URL WhatsApp
        const whatsappURL = `https://wa.me/${tujuan}?text=${encodeURIComponent(fullMessage)}`;

        // Buka di tab baru
        window.open(whatsappURL, '_blank');
    }

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // Blogs Section
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);