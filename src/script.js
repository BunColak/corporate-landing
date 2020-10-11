$(document).ready(function () {
  const mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  });

  const accordionItems = $(".accordion__title");
  const accordionContents = $(".accordion__content");
  accordionItems.on("click", function () {
    const item = $(this);
    item.find("i").toggleClass("open"); // Rotate chevron
    const content = item.siblings(".accordion__content");
    accordionContents.not(content).slideUp();

    content.slideToggle();
  });
});
