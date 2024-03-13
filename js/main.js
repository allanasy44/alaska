
//swipper//

 var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    //navigation on scroll//
    wwindow.addEventListener("scroll",function(){
      const header=document.querySelector("header");
      header.classList.toggle("sticky",window.scrolly > 0)
    });
    //responsive navigation menu toggle//

    const menuBtn=document.querySelector(".nav-menu-btn");
     const closeBtn=document.querySelector(".nav-menu-btn");
      const navigation=document.querySelector(".nav-menu-btn");

      menuBtn.addEventListener("click",() => {
        navigation.classList.add("active");
      });

      closeBtn.addEventListener("click",() => {
        navigation.classList.remove("active");
      });
      ////other scripts///
      const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".services-grid", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".services-card", {
  ...scrollRevealOption,
  delay: 500,
});

// trending container
ScrollReveal().reveal(".services-content", {
  ...scrollRevealOption,
  interval: 500,
});


// guide container
ScrollReveal().reveal(".services-details", {
  ...scrollRevealOption,
  interval: 500,
});

//  client container
ScrollReveal().reveal(".services-image", {
  ...scrollRevealOption,
  interval: 500,
});