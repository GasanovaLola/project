 /*$('.sl').slick();*/
 $('.sl').slick({
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 875,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
    ]
});

 $('.center').slick({
      centerMode: true,
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 1,
          }
        }
    ]
    });

$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  prevArrow: '<img src="тут ссылка на левую картинку">',
  nextArrow: '<img src="тут ссылка на правую картинку">'
});
