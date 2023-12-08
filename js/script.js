$(document).ready(function(){

    /*      section01      */
    /* 메인 배경화면 슬라이드 */
    $(window).load(function(){
      var swiper = new Swiper('.main-visual', {
        slidesPerView : 'auto',
        watchSlidesVisibility:true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        speed: 1000,
        spaceBetween: 0,
        freeMode: false,
        loop: true,
        loopFillGroupWithBlank: false,
        centeredSlides: false,
        //autoplay: false,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          reverseDirection:false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on:{
          imagesReady: function(){
            //alert('1');
            //$('.swiper-container').fadeOut(2000);
          },
        },		
      });
    });

    /* count 효과 */
    var isAnimated = false;

    $(window).scroll(function () {
        // .section01의 상단 위치와 윈도우의 스크롤 위치를 비교
        var sectionOffsetTop = $('#section01').offset().top;
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        // 현재 스크롤 위치가 .section02를 지나갔을 때 애니메이션 실행
        if (scrollTop > sectionOffsetTop - windowHeight && !isAnimated) {
            isAnimated = true; // 애니메이션을 한 번만 실행하도록 플래그 설정

            $('.count-number').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    });
});